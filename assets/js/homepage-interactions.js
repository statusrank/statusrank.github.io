(function () {
  "use strict";

  var TOPIC_LABELS = {
    "auc-ranking": "AUC & Ranking",
    "robust-imbalanced": "Robust & Imbalanced Learning",
    "multimodal-learning": "Multimodal Learning",
    "trustworthy-genai": "Trustworthy GenAI"
  };

  var PUBLICATION_METADATA = {
    "Guiding Diffusion-based Reconstruction with Contrastive Signals for Balanced Visual Representation": {
      kind: "conference",
      topics: ["robust-imbalanced", "multimodal-learning"]
    },
    "BlackMirror: Black-Box Backdoor Detection for Text-to-Image Models via Instruction-Response Deviation": {
      kind: "conference",
      topics: ["trustworthy-genai", "multimodal-learning"]
    },
    "Closing the Approximation Gap of Partial AUC Optimization: A Tale of Two Formulations": {
      kind: "journal",
      topics: ["auc-ranking", "robust-imbalanced"]
    },
    "LightFair: Towards an Efficient Alternative for Fair T2I Diffusion via Debiasing Pre-trained Text Encoders": {
      kind: "conference",
      topics: ["trustworthy-genai", "multimodal-learning"]
    },
    "One Image is Worth a Thousand Words: A Usability Preservable Text-Image Collaborative Erasing Framework": {
      kind: "conference",
      topics: ["trustworthy-genai", "multimodal-learning"]
    },
    "MixBridge: Heterogeneous Image-to-Image Backdoor Attack through Mixture of Schrödinger Bridges": {
      kind: "conference",
      topics: ["trustworthy-genai", "multimodal-learning"]
    },
    "OpenworldAUC: Towards Unified Evaluation and Optimization for Open-world Prompt Tuning": {
      kind: "conference",
      topics: ["auc-ranking", "multimodal-learning"]
    },
    "Bidirectional Logits Tree: Pursuing Granularity Reconcilement in Fine-Grained Classification": {
      kind: "conference",
      topics: ["robust-imbalanced", "auc-ranking"]
    },
    "AUCSeg: AUC-oriented Pixel-level Long-tail Semantic Segmentation": {
      kind: "conference",
      topics: ["auc-ranking", "robust-imbalanced"]
    },
    "ReconBoost: Boosting Can Achieve Modality Reconcilement": {
      kind: "conference",
      topics: ["multimodal-learning", "robust-imbalanced"]
    },
    "Harnessing Hierarchical Label Distribution Variations in Test Agnostic Long-tail Recognition": {
      kind: "conference",
      topics: ["robust-imbalanced", "auc-ranking"]
    },
    "Revisiting AUC-oriented Adversarial Training with Loss-Agnostic Perturbations": {
      kind: "journal",
      topics: ["auc-ranking", "robust-imbalanced"]
    },
    "AUC-Oriented Domain Adaptation: From Theory to Algorithm": {
      kind: "journal",
      topics: ["auc-ranking", "robust-imbalanced"]
    },
    "Asymptotically Unbiased Instance-wise Regularized Partial AUC Optimization: Theory and Algorithm": {
      kind: "conference",
      topics: ["auc-ranking", "robust-imbalanced"]
    },
    "Optimizing Two-way Partial AUC with an End-to-end Framework": {
      kind: "journal",
      topics: ["auc-ranking", "robust-imbalanced"]
    },
    "AdAUC: End-to-end Adversarial AUC Optimization Against Long-tail Problems": {
      kind: "conference",
      topics: ["auc-ranking", "robust-imbalanced"]
    },
    "Learning with Multiclass AUC: Theory and Algorithms": {
      kind: "journal",
      topics: ["auc-ranking", "robust-imbalanced"]
    },
    "Collaborative Preference Embedding against Sparse Labels": {
      kind: "conference",
      topics: ["auc-ranking", "robust-imbalanced"]
    }
  };

  var RESOURCE_LINKS = {
    code: { label: "Code", icon: "</>" },
    video: { label: "Video", icon: "▶" },
    poster: { label: "Poster", icon: "▣" },
    slides: { label: "Slides", icon: "▤" },
    project: { label: "Project", icon: "↗" },
    website: { label: "Website", icon: "⌂" },
    pdf: { label: "PDF", icon: "PDF" }
  };

  function normalizeTitle(value) {
    return value.replace(/\s+/g, " ").trim().replace(/\.$/, "");
  }

  function makeTopicTags(metadata) {
    var container = document.createElement("span");
    container.className = "publication-meta";
    container.setAttribute("aria-label", "Research topics");

    metadata.topics.forEach(function (topic) {
      var tag = document.createElement("span");
      tag.className = "publication-topic";
      tag.dataset.topic = topic;
      tag.textContent = TOPIC_LABELS[topic];
      container.appendChild(tag);
    });

    return container;
  }

  function enhancePublicationCatalog() {
    var catalog = document.querySelector(".publication-catalog");
    if (!catalog) return;

    var items = Array.prototype.slice.call(catalog.querySelectorAll("ul > li"));
    var controls = catalog.querySelector(".publication-catalog__intro");
    var selected = { kind: "all", topic: "all" };

    items.forEach(function (item) {
      var titleLink = item.querySelector("a");
      if (!titleLink) return;

      titleLink.classList.add("publication-title");
      var textWalker = document.createTreeWalker(item, NodeFilter.SHOW_TEXT);
      var textNode;
      while ((textNode = textWalker.nextNode())) {
        textNode.nodeValue = textNode.nodeValue.replace(
          /[\u00a0\u1680\u180e\u2000-\u200f\u202f\u205f\u2060\u3000\ufeff]+/g,
          " "
        );
      }
      if (titleLink.nextSibling && titleLink.nextSibling.nodeType === Node.TEXT_NODE) {
        titleLink.nextSibling.nodeValue = titleLink.nextSibling.nodeValue.replace(/^\s*/, " ");
      }
      var title = normalizeTitle(titleLink.textContent);
      var metadata = PUBLICATION_METADATA[title];

      if (!metadata) {
        item.dataset.kind = "unknown";
        item.dataset.topics = "";
        return;
      }

      item.dataset.kind = metadata.kind;
      item.dataset.topics = metadata.topics.join(" ");
      item.appendChild(makeTopicTags(metadata));
    });

    function applyFilters() {
      items.forEach(function (item) {
        var matchesKind = selected.kind === "all" || item.dataset.kind === selected.kind;
        var topics = (item.dataset.topics || "").split(/\s+/);
        var matchesTopic = selected.topic === "all" || topics.indexOf(selected.topic) !== -1;
        item.hidden = !(matchesKind && matchesTopic);
      });

      Array.prototype.slice.call(catalog.children).forEach(function (heading) {
        if (heading.tagName !== "H2") return;
        var list = heading.nextElementSibling;
        if (!list || list.tagName !== "UL") return;
        var hasVisibleItems = Array.prototype.some.call(list.children, function (item) {
          return !item.hidden;
        });
        heading.hidden = !hasVisibleItems;
        list.hidden = !hasVisibleItems;
      });

    }

    if (controls) {
      controls.addEventListener("click", function (event) {
        var button = event.target.closest(".publication-filter");
        if (!button || !controls.contains(button)) return;

        var group = button.dataset.filterGroup;
        selected[group] = button.dataset.filterValue;

        Array.prototype.forEach.call(
          controls.querySelectorAll('[data-filter-group="' + group + '"]'),
          function (candidate) {
            var isActive = candidate === button;
            candidate.classList.toggle("is-active", isActive);
            candidate.setAttribute("aria-pressed", String(isActive));
          }
        );

        applyFilters();
      });
    }

    applyFilters();
  }

  function enhanceResourceLinks() {
    var parents = [];

    Array.prototype.forEach.call(document.querySelectorAll(".page__content a"), function (link) {
      var match = link.textContent.trim().match(/^\[(Code|Video|Poster|Slides|Project|Website|PDF)\]$/i);
      if (!match) return;

      var type = match[1].toLowerCase();
      var resource = RESOURCE_LINKS[type];
      link.classList.add("resource-link", "resource-link--" + type);
      link.dataset.icon = resource.icon;
      link.textContent = resource.label;
      link.setAttribute("aria-label", resource.label + " resource");
      if (parents.indexOf(link.parentNode) === -1) parents.push(link.parentNode);
    });

    parents.forEach(function (parent) {
      Array.prototype.forEach.call(parent.childNodes, function (node) {
        if (node.nodeType === Node.TEXT_NODE) {
          node.nodeValue = node.nodeValue.replace(/\s*[|\\]\s*/g, " ");
        }
      });
    });
  }

  function markSectionTypography() {
    var targetSections = [
      { title: "Services", slug: "services" },
      { title: "Honors and Awards", slug: "honors" },
      { title: "Educations & Work Experience", slug: "experience" },
      { title: "Invited Talks", slug: "invited-talks" },
      { title: "Fundings and Project", slug: "projects" },
      { title: "Students", slug: "students" }
    ];

    Array.prototype.forEach.call(document.querySelectorAll(".page__content h1"), function (heading) {
      var headingText = heading.textContent.replace(/\s+/g, " ").trim();
      var section = targetSections.find(function (target) {
        return headingText.indexOf(target.title) !== -1;
      });
      if (!section) return;

      heading.classList.add("page-section-heading", "page-section-heading--" + section.slug);

      var sibling = heading.nextElementSibling;
      while (sibling && sibling.tagName !== "H1") {
        if (/^H[2-6]$/.test(sibling.tagName)) {
          sibling.classList.add("page-section-subheading", "page-section-subheading--" + section.slug);
        } else {
          sibling.classList.add("page-section-body", "page-section-body--" + section.slug);
        }
        sibling = sibling.nextElementSibling;
      }
    });
  }

  function enhanceExperienceTimeline() {
    var timeline = document.querySelector(".experience-timeline");
    if (!timeline) return;

    Array.prototype.forEach.call(timeline.querySelectorAll(".school-box"), function (item, index) {
      var summary = item.querySelector(".school-box-text p:first-child");
      if (!summary || summary.querySelector(".experience-period")) return;

      var text = summary.textContent.replace(/\s+/g, " ").trim();
      var separator = text.indexOf(",");
      if (separator === -1) return;

      var period = document.createElement("span");
      period.className = "experience-period";
      period.textContent = text.slice(0, separator).trim();

      var role = document.createElement("span");
      role.className = "experience-role";
      role.textContent = text.slice(separator + 1).trim();

      var kind = document.createElement("span");
      kind.className = "experience-kind";
      kind.textContent = index === 0 ? "Work Experience" : "Education";

      summary.textContent = "";
      summary.appendChild(period);
      summary.appendChild(role);
      summary.appendChild(kind);
    });
  }

  function markSectionDates() {
    Array.prototype.forEach.call(
      document.querySelectorAll(".news-scroll em:first-child, .page-section-body em:first-child"),
      function (date) {
        if (/^\d{4}(?:\.|\s|$)/.test(date.textContent.trim())) {
          date.classList.add("section-date");
        }
      }
    );
  }

  document.addEventListener("DOMContentLoaded", function () {
    enhancePublicationCatalog();
    enhanceResourceLinks();
    markSectionTypography();
    enhanceExperienceTimeline();
    markSectionDates();
  });
})();
