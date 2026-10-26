# Publication resources checked on 2026-10-26

Scope: the English and Chinese Highlight Papers and Publications sections,
including the two new preprints. Existing unrelated profile, service, student,
and news content is unchanged.

## Updated destinations and resources

| Paper | Change | Primary evidence |
| --- | --- | --- |
| UtilityBench | Add PDF, official code, and dataset; retain arXiv title link. | [Paper HTML](https://arxiv.org/html/2610.25924v1), [author repository](https://github.com/LQF39466/UtilityBench), [dataset](https://huggingface.co/datasets/leiqf/UtilityBench) |
| Compare to Correct | Add PDF; retain arXiv title link. No verified public implementation found in the paper or author account. | [Paper HTML](https://arxiv.org/html/2610.18583v1), [author's public repositories](https://api.github.com/users/huacong/repos?per_page=100) |
| Pairwise AUC Optimization Needs Corrective Power | Replace the previously unlinked title with its newly public arXiv record and add PDF. Keep NeurIPS 2026 as the venue, not a third standalone preprint. | [arXiv record](https://arxiv.org/abs/2610.21743), which explicitly reports NeurIPS 2026 acceptance |
| GoodDiffusion | Replace the title's code-repository destination with the formal proceedings page. Update the title from "Diffusion Generative Models" to the published "Diffusion Bridge Models" and add verified pages 101756-101784. Retain the existing code link and Oral distinction. | [ICML proceedings](https://proceedings.mlr.press/v306/qin26k.html), [author repository](https://github.com/qsx830/GoodDiffusion) |
| Towards Size-invariant Salient Object Detection | Add the author-specified code repository and open PDF alongside the existing DOI title link. | [Paper abstract](https://arxiv.org/abs/2509.15573) explicitly names [SI-SOD](https://github.com/Ferry-Li/SI-SOD) |
| AUCPro | Use its stable DOI title destination instead of the numeric IEEE URL. | [Crossref record](https://api.crossref.org/works/10.1109/TPAMI.2025.3545639) |
| Improved Diversity-Promoting Collaborative Metric Learning | Use the stable DOI title destination; add open PDF and a Project link to the author-specified LibCML library. Do not label that link as a released implementation of ImpDPCML: its README still says that implementation is forthcoming. | [Paper abstract](https://arxiv.org/abs/2409.01012), [Crossref record](https://api.crossref.org/works/10.1109/TPAMI.2024.3412687), [LibCML README](https://github.com/statusrank/LibCML) |
| Rethinking Collaborative Metric Learning | Replace the arXiv title destination with the published journal DOI, retain SFCML code, and add the open PDF separately. | [Crossref record](https://api.crossref.org/works/10.1109/TPAMI.2022.3141095), [author manuscript](https://arxiv.org/abs/2206.11549) |
| The Minority Matters | Use the official NeurIPS proceedings title destination; retain the author PDF as a separate resource. Remove the unverified Slides label pointing to the poster/video event page. Retain the working code, video event page, and direct poster. | [NeurIPS proceedings](https://proceedings.neurips.cc/paper_files/paper/2022/hash/109cf25cbc36037deecdbeabfa199956-Abstract-Conference.html), [event page](https://nips.cc/virtual/2022/poster/55412) |
| When All We Need is a Piece of the Pie | Replace the title's repository-hosted PDF destination with the official proceedings page; preserve the existing code, video, poster, and slides resources. | [ICML proceedings](https://proceedings.mlr.press/v139/yang21k.html) |
| Size-invariance Matters (ICML 2024) | Remove Video, Poster, and Slides labels that all pointed to the same generic project page. Retain the verified paper, code, and Project links. | [Author project page](https://ferry-li.github.io/SI_SOD/) provides paper and code, but no separate resources for those labels. |

Other existing code repositories returned HTTP 200, with matching repository
descriptions or paper names. Existing PMLR, CVF, and NeurIPS title destinations
were retained where they already matched the listed paper. Conference citations
are now consistently the venue acronym, available page range, and year; journal
metadata is retained.

## Access limitations

- Several IEEE destinations returned HTTP 202 without article text to the
  automated client. Their DOI identities were checked through publisher-supplied
  Crossref metadata; HTTP 202 was not treated as proof of readable article content.
- The ACM destination for Collaborative Preference Embedding returned HTTP 403
  to the automated client. Crossref confirms the existing DOI and title, so the
  link was retained rather than replaced as if it were broken.
- The AAAI page initially failed in the local HTTP client, but the official page
  was readable with the web tool and matched the title and authors. It was retained.
- No substitute, guessed repository, or placeholder code link was inserted for
  the newly accepted NeurIPS paper, Compare to Correct, or the PAUC journal paper
  when no exact public implementation could be verified.

## Presentation and checks

- Preserve the existing publication-list structure, fonts, and resource-button
  treatment. Following the user's layout correction, preprints have no separate
  rounded border or tinted background. Put years and resources inline with the
  citation, as in the other publications. Keyword pills reuse the existing
  publication-tag style without duplicate general topic badges.
- Keep topic/type filtering and the existing anchor IDs. Show a short empty
  result message when a filter combination has no matches.
- Maintain bilingual preprint facts in `_data/preprints.yml` and render them
  through `_includes/preprints.html`; separate language fields support localized
  wording, while the current keywords use shared standard English search terms.
- Regression check: `bundle exec ruby scripts/check_publications.rb` after build.
- Verify both languages and themes at desktop and mobile widths before release.

## Keyword revision requested on 2026-10-26

The homepage keywords are editorial search labels, not author-supplied metadata.
The user requested established, moderately scoped research terms instead of
abstract labels or newly coined method/metric names. Do not require three tags
when two complementary terms are sufficient. Both language pages retain these
standard English terms for searchability.

- UtilityBench: **LLM Benchmarks**, **LLM Abstention**.
- Compare to Correct: **LLM Reasoning**, **Test-time Scaling**, **Self-Consistency**.

Independent usage was checked against
[Know Your Limits: A Survey of Abstention in Large Language Models](https://aclanthology.org/2025.tacl-1.26/)
and
[Slim-SC: Thought Pruning for Efficient Scaling with Self-Consistency](https://aclanthology.org/2025.emnlp-main.1750/).
The paper abstracts and full-text sections establish relevance to the two
listed works. This records primary-publication usage, not a claim that Google
Scholar indexing or search rankings were directly verified.
