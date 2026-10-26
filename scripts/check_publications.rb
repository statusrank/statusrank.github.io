# Run after Jekyll builds: bundle exec ruby scripts/check_publications.rb
require "nokogiri"
require "yaml"
require "uri"

root = "." # Run from the repository root; avoid Windows locale conversion of the CJK path.
preprints = YAML.safe_load_file(File.join(root, "_data", "preprints.yml"))

def verify(condition, message)
  raise message unless condition
end

expected_titles = {
  "Pairwise AUC Optimization Needs Corrective Power: A Unified View" => "https://arxiv.org/abs/2610.21743",
  "GoodDiffusion: Proactive Copyright Protection for Diffusion Bridge Models via Learnable Sample-specific Signatures" => "https://proceedings.mlr.press/v306/qin26k.html",
  "Rethinking Collaborative Metric Learning: Toward an Efficient Alternative without Negative Sampling" => "https://doi.org/10.1109/TPAMI.2022.3141095",
  "The Minority Matters: A Diversity-Promoting Collaborative Metric Learning Algorithm" => "https://proceedings.neurips.cc/paper_files/paper/2022/hash/109cf25cbc36037deecdbeabfa199956-Abstract-Conference.html",
  "When All We Need is a Piece of the Pie: A Generic Framework for Optimizing Two-way Partial AUC" => "https://proceedings.mlr.press/v139/yang21k.html"
}

["index.html", "zh/index.html"].each do |page|
  doc = Nokogiri::HTML(File.read(File.join(root, "_site", page), encoding: "UTF-8"))
  catalog = doc.at_css(".publication-catalog")
  verify(catalog, "Missing publication catalog: #{page}")
  verify(doc.css("#preprints").length == 1, "Duplicate preprints anchor: #{page}")
  list = doc.at_css("#preprints").next_element
  verify(list["class"].to_s.split.include?("preprint-list"), "Missing preprint list: #{page}")
  entries = list.css("li.preprint-entry")
  verify(entries.length == preprints.length, "Wrong preprint count: #{page}")

  entries.zip(preprints).each do |entry, data|
    title = entry.at_css("a.publication-title")
    verify(title.text == data["title"], "Preprint title mismatch: #{page}")
    verify(title["href"] == "https://arxiv.org/abs/#{data['arxiv']}", "Wrong arXiv link: #{page}")
    authors = data["authors"][0...-1].join(", ") + ", and " + data["authors"].last + "."
    verify(entry.at_css(".preprint-entry__authors").text.strip == authors, "Author order mismatch: #{page}")
    verify(entry.at_css(".preprint-entry__authors strong").text == "Shilong Bao", "Missing author emphasis: #{page}")
    language = page.start_with?("zh/") ? "zh" : "en"
    verify(entry.css(".publication-keyword").map(&:text) == data["keywords_#{language}"], "Keyword mismatch: #{page}")
    verify(entry.at_css(".preprint-entry__year").text == data["year"].to_s, "Wrong preprint year: #{page}")
    %w[code dataset].each do |resource|
      links = entry.css(".resource-link--#{resource}")
      verify(links.length == (data[resource] ? 1 : 0), "Unexpected #{resource} resource: #{page}")
      verify(links.first["href"] == data[resource], "Wrong #{resource} resource: #{page}") if data[resource]
    end
    verify(entry.at_css(".resource-link--pdf")["href"] == "https://arxiv.org/pdf/#{data['arxiv']}", "Wrong PDF: #{page}")
  end

  expected_titles.each do |title, url|
    links = doc.css(".highlight-paper-list a, .publication-catalog a").select { |a| a.text.strip.sub(/\.$/, "") == title }
    verify(!links.empty? && links.all? { |a| a["href"] == url }, "Wrong publication destination: #{title}, #{page}")
  end

  compact_text = doc.css(".highlight-paper-list, .publication-catalog").text
  verify(!compact_text.match?(/PMLR \d+|Advances in Neural Information Processing Systems|International Conference on Machine Learning|AAAI Conference on Artificial Intelligence/), "Non-compact conference citation: #{page}")
  sod = doc.css(".highlight-paper-list .paper-box").find { |box| box.text.include?("Size-invariance Matters:") }
  verify(sod, "Missing SI-SOD: #{page}")
  verify(sod.css("a").none? { |a| a.text.match?(/\[(Video|Poster|Slides)\]/) }, "Mislabelled SI-SOD resources: #{page}")
  %w[preprint llm-evaluation-reasoning].each do |value|
    verify(catalog.css("button[data-filter-value='#{value}']").length == 1, "Missing filter: #{value}, #{page}")
  end
  catalog.css("a[href]").each { |a| verify(URI.parse(a["href"]).is_a?(URI::HTTPS), "Invalid publication URL: #{page}") }
  puts "#{page}: PASS (preprints, authors, keywords, resources, compact citations, bilingual destinations)"
end
