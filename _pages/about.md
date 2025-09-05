---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

# About Me

<span class='anchor' id='about-me'></span>

Hi! I'm Shilong Bao(包世龙, E-mail: baoshilong@ucas.ac.cn). Now I am a Post-doc Fellow with the School of Computer Science and Technology, University of Chinese Academy of Sciences (UCAS). I got my Ph.D. degree in **Institute of Information Engineering, Chinese Academy of Sciences (IIE, CAS)**, supervised by Prof. [Qingming Huang (黄庆明)](https://qmhuang-ucas.github.io/) (IEEE Fellow). I am also lucky to have opportunities to collaborate with [Qianqian Xu (许倩倩)](https://qianqianxu010.github.io/) (Professor at Institute of Computing Technology (ICT), CAS), [Xiaochun Cao (操晓春)](https://scst.sysu.edu.cn/members/caoxiaochun.htm) (Dean of School of Cyber Science and Technology, Sun Yat-sen University), [Zhiyong Yang (杨智勇)](https://joshuaas.github.io/) (Tenure-track Assistant Professor at UCAS).

My research interests primarily lie in machine learning and AI safety, with a particular focus on:
- Theory of Learning to Rank and its Derived Algorithms
- AUC-oriented Learning and its Applications (e.g., downstream computer vision tasks)
- Safe AI Models and Algorithms (e.g., certified/adversarial robustness, robust and fair generative models)

**<font color='red'> I am always open to academic collaboration—please feel free to contact me if you are interested. </font>**

# 🔥 News
- *2025.09.13*: We are organizing the forum "Efficient Training and Inference of Large Models" at the [CSIG Young Scientists Conference 2025](https://mp.weixin.qq.com/s/NYc2zJeq2iWjHNANvg8qiA). Welcome to join us! 
- *2025.08.01*: Our team won the **<font color='red'> 1st Place Award </font>** in ICCV 2025 Competition for High-Quality Face Dataset Generation (DataCV Challenge), with one paper accepted by ICCV 2025 workshop!
- *2025.06.30*: &nbsp;🎉🎉 My PhD Thesis "Toward Efficient and Generalizable Collaborative Metric Learning Algorithms" (in Chinese) has been selected as the Distinguished Dissertation Award of Chinese Academy of Sciences (totally 100 papers) (中国科学院百篇优博论文)
- *2025.06.18*: &nbsp;🎉🎉 Our team (MR-CAS) won the **<font color='red'> 1st Place Award </font>** in CVPR 2025 Workshop on Compositional 3D Vision (C3DV 3DCoMPaT-200, Coarse-Grained GCR Track)
- *2025.06.12*: &nbsp;🎉🎉 Our team (MR-CAS) won the **<font color='red'> 1st Place Award </font>** in CVPR 2025 Competition for Fine-grained Video Understanding (EgoVis HoloAssist Challenges: Mistake Detection Track).
- *2025.05.20*: &nbsp;🎉🎉 I have been nominated as ICLR Notable Reviewer 2025.
- *2025.05.02*: &nbsp;🎉🎉 Three papers have been accepted by ICML 2025.
- *2025.02.20*: &nbsp;🎉🎉 One papers have been accepted by TPAMI 2025.


<!-- - *2024.06.08*: &nbsp;🎉🎉 One paper has been accepted by T-PAMI 2024. Congrats to all! -->
<!-- - *2024.05.2*: &nbsp;🎉🎉 Three papers have been accepted by ICML 2024 (One is Spotlight). Congrats to all! -->
<!-- - *2022.02*: &nbsp;🎉🎉 Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  -->

# 📝 Publications 

## Highlight Paper
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">NeurIPS 2022 (Oral)</div><img src='images/dpcml_nips22.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[The Minority Matters: A Diversity-Promoting Collaborative Metric Learning Algorithm](https://arxiv.org/pdf/2209.15292.pdf).

**Shilong Bao**, Qianqian Xu, Zhiyong Yang , Yuan He, Xiaochun Cao, Qingming Huang. Advances in Neural Information Processing Systems (**NeurIPS**), 2451-2464, 2022. **<font color='red'> (Oral, 1.7%) </font>** \| [\[Code\]](https://github.com/statusrank/DPCML)\| [\[Video\]](https://nips.cc/virtual/2022/poster/55412) \| [\[Poster\]](https://nips.cc/media/PosterPDFs/NeurIPS%202022/55412.png?t=1668477709.8846257) \| [\[Slides\]](https://nips.cc/virtual/2022/poster/55412)
</div>
</div>

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2021 (Long Talk)</div><img src='images/tpauc_icml21.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[When All We Need is a Piece of the Pie: A Generic Framework for Optimizing Two-way Partial AUC](https://github.com/statusrank/A-Generic-Framework-for-Optimizing-Two-way-Partial-AUC/blob/main/TPAUC.pdf).

Zhiyong Yang, Qianqian Xu, **Shilong Bao**, Yuan He, Xiaochun Cao and Qingming Huang. International Conference on Machine Learning (**ICML**), 11820–11829, 2021. **<font color='red'> (Long Talk, 3%) </font>** \| [\[Code\]](https://github.com/statusrank/A-Generic-Framework-for-Optimizing-Two-way-Partial-AUC)\| [\[Video\]](https://slideslive.com/38958537/when-all-we-need-is-a-piece-of-the-pie-a-generic-framework-for-optimizing-twoway-partial-auc?ref=speaker-22247) \| [\[Poster\]](https://github.com/statusrank/A-Generic-Framework-for-Optimizing-Two-way-Partial-AUC/blob/main/TPAUC_poster.png) \| [\[Slides\]](https://github.com/statusrank/A-Generic-Framework-for-Optimizing-Two-way-Partial-AUC/blob/main/oral_pdf.pdf)
</div>
</div>


<div class='paper-box'><div class='paper-box-image'><div><div class="badge">ICML 2024 (Spotlight)</div><img src='images/SI_SOD1.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">
[Size-invariance Matters: Rethinking Metrics and Losses for Imbalanced Multi-object Salient Object Detection](https://arxiv.org/pdf/2405.09782).

Feiran Li, Qianqian Xu, **Shilong Bao**, Zhiyong Yang, Runmin Cong, Xiaochun Cao and Qingming Huang. International Conference on Machine Learning (**ICML**), 2024. **<font color='red'> (Spotlight, 3.5%) </font>** \| [\[Code\]](https://github.com/Ferry-Li/SI-SOD)\| [\[Video\]](https://ferry-li.github.io/SI_SOD/) \| [\[Poster\]](https://ferry-li.github.io/SI_SOD/) \| [\[Slides\]](https://ferry-li.github.io/SI_SOD/) \| [\[Project\]](https://ferry-li.github.io/SI_SOD/)
</div>
</div>

## 2025

- [One Image is Worth a Thousand Words: A Usability Preservable Text-Image Collaborative Erasing Framework for Diffusion Models](https://arxiv.org/pdf/2505.11131). Feiran Li, Qianqian Xu, **Shilong Bao**, Zhiyong Yang, Xiaochun Cao, Qingming Huang. International Conference on Machine Learning (ICML), 2025. \|[\[Code\]](https://github.com/Ferry-Li/Co-Erasing)\|

- [MixBridge: Heterogeneous Image-to-Image Backdoor Attack through Mixture of Schrödinger Bridges](https://arxiv.org/pdf/2505.08809?). Shixi Qin, Zhiyong Yang, **Shilong Bao**, Shi Wang, Qianqian Xu, Qingming Huang. International Conference on Machine Learning (ICML), 2025. \|[\[Code\]](https://github.com/qsx830/MixBridge)\|

- [OpenworldAUC: Towards Unified Evaluation and Optimization for Open-world Prompt Tuning](https://arxiv.org/pdf/2505.05180). Cong Hua, Qianqian Xu, Zhiyong Yang, Zitai Wang, **Shilong Bao**, Qingming Huang. International Conference on Machine Learning (ICML), 2025. \|[\[Code\]](https://github.com/huacong/OpenworldAUC)\|

- [AUCPro: AUC-Oriented Provable Robustness Learning](https://ieeexplore.ieee.org/document/10904855). **Shilong Bao**, Qianqian Xu, Zhiyong Yang, Yuan He, Xiaochun Cao, and Qingming Huang. IEEE Transactions on Pattern Analysis and Machine Intelligence (**T-PAMI**), 47(6): 4579-4596, Jun. 2025. \|[\[Code\]](https://github.com/statusrank/AUCPro)\|

- [Bidirectional Logits Tree: Pursuing Granularity Reconcilement in Fine-Grained Classification](https://arxiv.org/abs/2412.12782). Zhiguang Lu, Qianqian Xu, **Shilong Bao**, and Zhiyong Yang and Qingming Huang. AAAI Conference on Artificial Intelligence (AAAI), 2025. \|[\[Code\]](https://github.com/ZhiguangLuu/BiLT)\|

## 2024

- [AUCSeg: AUC-oriented Pixel-level Long-tail Semantic Segmentation](https://arxiv.org/abs/2409.20398). Boyu Han, Qianqian Xu, Zhiyong Yang, **Shilong Bao**, Peisong Wen, Yangbangyan Jiang and Qingming Huang. Advances in Neural Information Processing Systems (**NeurIPS**), 2024. \|[\[Code\]](https://github.com/boyuh/AUCSeg)\|

- [Improved Diversity-Promoting Collaborative Metric Learning for Recommendation](https://ieeexplore.ieee.org/abstract/document/10553349). **Shilong Bao**, Qianqian Xu, Zhiyong Yang, Yuan He, Xiaochun Cao, and Qingming Huang. IEEE Transactions on Pattern Analysis and Machine Intelligence (**T-PAMI**), 46(12): 9004-9022, Jun. 2024. \|[\[Code\]](https://)\|

- [ReconBoost: Boosting Can Achieve Modality Reconcilement](https://arxiv.org/abs/2405.09321). Cong Hua, Qianqian Xu, **Shilong Bao**, Zhiyong Yang and Qingming Huang. International Conference on Machine Learning (**ICML**), 2024 \| [\[Code\]](https://github.com/huacong/ReconBoost) \|

- [Harnessing Hierarchical Label Distribution Variations in Test Agnostic Long-tail Recognition](https://arxiv.org/pdf/2405.07780). Zhiyong Yang, Qianqian Xu, Zitai Wang, Sicong Li, Boyu Han, **Shilong Bao**, Xiaochun Cao and Qingming Huang. International Conference on Machine Learning (**ICML**), 2024 \| [\[Code\]](https://github.com/scongl/DirMixE) \|

## Earlier Publications

- [Revisiting AUC-oriented Adversarial Training with Loss-Agnostic Perturbations](https://ieeexplore.ieee.org/abstract/document/10214340). Zhiyong Yang, Qianqian Xu, Wenzheng Hou, **Shilong Bao**, Yuan He, Xiaochun Cao and Qingming Huang. IEEE Transactions on Pattern Analysis and Machine Intelligence (**T-PAMI**), 2023. \| [\[Code\]](https://github.com/statusrank/AUC-Oriented-Adversarial-Training) \|

- [AUC-Oriented Domain Adaptation: From Theory to Algorithm](https://ieeexplore.ieee.org/abstract/document/10214222). Zhiyong Yang, Qianqian Xu, **Shilong Bao**, Peisong Wen, Yuan He, Xiaochun Cao and Qingming Huang. IEEE Transactions on Pattern Analysis and Machine Intelligence (**T-PAMI**), 2023. \| [\[Code\]](https://github.com/statusrank/AUC-Oriented-Domain-Adaptation) \|

- [Asymptotically Unbiased Instance-wise Regularized Partial AUC Optimization: Theory and Algorithm](https://arxiv.org/pdf/2210.03967.pdf). Huiyang Shao, Qianqian Xu, Zhiyong Yang, **Shilong Bao** and Qingming Huang. Advances in Neural Information Processing Systems (NeurIPS), 38667–38679, 2022. \| [\[Code\]](https://github.com/Shaocr/PAUCI) \|

- [Optimizing Two-way Partial AUC with an End-to-end Framework](https://arxiv.org/abs/2206.11655). Zhiyong Yang, Qianqian Xu, **Shilong Bao**, Yuan He, Xiaochun Cao and Qingming Huang. IEEE Transactions on Pattern Analysis and Machine Intelligence (**T-PAMI**), 10228-10246, 2022. \| [\[Code\]](https://github.com/statusrank/XCurve) \|

- [AdAUC: End-to-end Adversarial AUC Optimization Against Long-tail Problems](https://arxiv.org/abs/2206.12169). Wenzheng Hou, Qianqian Xu, Zhiyong Yang, **Shilong Bao**, Yuan He and Qingming Huang. International Conference on Machine Learning (**ICML**), 8903–8925, 2022. \| [\[Code\]](https://github.com/statusrank/AUC-Oriented-Adversarial-Training) \|

- [Rethinking Collaborative Metric Learning: Toward an Efficient Alternative without Negative Sampling](https://arxiv.org/abs/2206.11549). **Shilong Bao**, Qianqian Xu, Zhiyong Yang, Xiaochun Cao and Qingming Huang. IEEE Transactions on Pattern Analysis and Machine Intelligence (**T-PAMI**), 45(1): 1017-1035, Jan. 2023. \|[\[Code\]](https://github.com/statusrank/SFCML)\|

- [Learning with Multiclass AUC: Theory and Algorithms](https://arxiv.org/pdf/2107.13171.pdf). Zhiyong Yang, Qianqian Xu, **Shilong Bao**, Xiaochun Cao and Qingming Huang. IEEE Transactions on Pattern Analysis and Machine Intelligence (**T-PAMI**),  7747–7763, 2021. \| [\[Code\]](https://github.com/joshuaas/Learning-with-Multiclass-AUC-Theory-and-Algorithms) \|

- [Collaborative Preference Embedding against Sparse Labels](http://www.jdl.link/doc/2011/20191229_ACMM-Collaborative%20Preference%20Embedding%20against%20Sparse%20Labels.pdf). **Shilong Bao**, Qianqian Xu, Ke Ma, Zhiyong Yang, Xiaochun Cao and Qingming Huang. ACM International Conference on Multimedia (**ACM-MM**), 2079–2087, 2019. \| [\[Code\]](https://github.com/statusrank/CPE)\|

# 📖 Services

### Conferences
 - *ICML*: PC Member (2022-2025)
 - *ICLR*: PC Member (2024-2026)
 - *NeurIPS*: PC Member (2023-2025)
 - *CVPR*: PC Member (2024-2025)
 - *ICCV*: PC Member (2025)
 - *WACV*: PC Member (2025)
 - *AAAI*: PC Member (2023-2025)
 - *AISTATS*: PC Member (2025-2026)

### Journals
- IEEE Transactions on Pattern Analysis and Machine Intelligence (T-PAMI): Reviewer
- IEEE Transactions on Multimedia (T-MM): Reviewer
- IEEE Transactions on Circuits and Systems for Video Technology publication information (T-CSVT): Reviewer
- ACM Transactions on Multimedia Computing, Communications and Applications (TOMM): Reviewer
- Multimedia Systems: Reviewer

# 🎖 Honors and Awards
- *2025* **<font color='red'> 1st Place Award </font>** in ICCV 2025 Competition for High-Quality Face Dataset Generation (DataCV Challenge)
- *2025* Distinguished Dissertation Award of Chinese Academy of Sciences (totally 100 papers) (中国科学院优秀博士学位论文，中科院<font color='red'>全学科100篇</font>)
- *2025* **<font color='red'> 1st Place Award </font>** at the 3rd CVPR Workshop on Compositional 3D Vision (Coarse-Grained GCR Track Challenge, 2025)
- *2025* **<font color='red'> 1st Place Award </font>** in CVPR EgoVis HoloAssist Challenges for Fine-grained Video Understanding (Mistake Detection Track, 2025)
- *2025* ICLR Notable Reviewer (480/all) 
- *2024* Outstanding Doctoral Dissertation Award of Beijing Society of Image and Graphics (BSIG). (北京图象图形学学会优秀博士学位论文奖 (<font color='red'> 京津冀5篇 </font>))
- *2023* Zhuliyuehua Scholarship for Excellent Doctoral Student, CAS. (中国科学院朱李月华奖学金，中科院共300人)
- *2022* National Scholarship, Ministry of Education of the People’s Republic of China. (国家奖学金)
- *2021* Director Special Scholarship Award, IIE, CAS. (中科院信息工程研究所所长特别奖)
- *2017* The ACM-ICPC Asia Regional Contest Qingdao Site 2017 <font color='red'> Silver Medal </font> (ACM-ICPC 亚洲区域赛 (青岛站))
- *2017* The ACM-ICPC Asia Regional Contest Xian Site 2017 <font color='red'> Bronze Medal </font> (ACM-ICPC 亚洲区域赛 (西安站))
- *2017* 3rd China Collegiate Programming Contest Harbin Site <font color='red'> Bronze Medal </font> (第三届中国大学生程序设计竞赛 CCPC (哈尔滨站))


# 🎓 Educations

<div class='school-box'>
<div><img src='images/ucas.jpg' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2019.09 - 2024.06, Ph.D. in Computer Applied Technology.

Institute of Information Engineering, Chinese Academy of Sciences (IIE, CAS).

University of Chinese Academy of Sciences, Beijing.
</div>
</div>

<div class='school-box'>
<div><img src='images/qdu.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1">
2015.09 - 2019.06, Undergraduate.

College of Computer Science and Technology.

Qingdao University (QDU), Qingdao.
</div>
</div>

# 💬 Invited Talks

<div class='paper-box'><div class='paper-box-image'><div><div class="badge"> ChinaMM 2025 Special Forum 22: Trustworthy Multimedia Learning </div><img src='images/ChinaMM2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

*2025.08*:  &nbsp;  [Efficient and Generalizable Robust Collaborative Ranking](https://github.com/statusrank/statusrank.github.io/tree/main/docs/ChinaMM25.pdf). [\[Website\]](https://ccf.org.cn/ChinaMM2025/news_d_3177)

**Abstract**: Collaborative Ranking is a fundamental technique in tasks such as representation learning, content retrieval, and multimedia recommendation. However, it often faces significant challenges when dealing with large-scale web data, including limited representational capacity, low computational efficiency, and poor robustness, hindering the generalization ability of models. While existing research primarily focuses on model architecture and loss function optimization, systematic theoretical analysis of generalization remains limited. This report introduces a generalization theory framework for collaborative ranking, which further guides the design and optimization of ranking algorithms toward developing efficient, robust, and generalizable solutions.
</div>
</div>

- *2023.02*: &nbsp; AI TIME Youth PhD Talk of NeurIPS2022. [\[Video\]](https://www.bilibili.com/video/BV1624y1G7un/?spm_id_from=333.999.0.0&vd_source=356f7336a633368638ff41a90a11197b).
- *2022.11*: &nbsp; Oral presentation at NeurIPS conference [\[Video\]](https://nips.cc/virtual/2022/poster/55412).


# 💻 Fundings and Project

- *2025.08*: &nbsp; Young Scientists Fund of the National Natural Science Foundation of China (NSFC青年基金C类, No.62502496)
- *2025.07*: &nbsp; General Program of the Chinese Postdoctoral Science Foundation (中国博士后科学基金面上资助, No.2025M771492)
- *2025.06*: &nbsp; CAS Special Research Assistant Talent Support Program (中国科学院特别研究助理资助项目)
- *2024.07*: &nbsp; Postdoctoral Fellowship Program of the Chinese Postdoctoral Science Foundation (中国博士后科学基金会国家资助博士后研究人员计划（B档）, No.GZB20240729)
 

<!-- <div class='school-box'>
<div><img src='images/Xcurve.png' alt="sym" width="80"></div>
<div class='school-box-text' markdown="1"> -->

<div class='paper-box'><div class='paper-box-image'><div><div class="badge">XCurve</div><img src='images/xcurve_4.png' alt="sym" width="120%"></div></div>
<div class='paper-box-text' markdown="1">

*2020.02 - now*: &nbsp; **<font color='red'> As a core member, </font>** I participated in the development of [XCurve: Machine Learning with Decision-Invariant Metrics](https://github.com/statusrank/XCurve). 

- Machine learning and deep learning technologies have recently been successfully employed in many complicated high-stake decision-making applications. The goal of Xcurve learning is to learn high-quality models that can adapt to different decision conditions, which provides a systematic solution to optimize the area under different kinds of performance curves. Welcome to try now and give us feedback!
</div>
</div>

<!-- - *2020.02 - 至今*: &nbsp; As core member, I participated in the developments of X as [XCurve: Machine Learning with X-Curve Metrics](https://github.com/statusrank/XCurve). 

XCurve focuses on **the design criteria of the objective function for ML tasks**, which can be formulated as a series of X-metric (say AUROC, AUPRC, AUTKC) optimization problems considering the **average performance of all decision thresholds** during the training phase. Welcome to try now and give us feedback! -->