---
layout: session
title: "User testing of AI-assisted mapping tool fAIr"
code: "WJDTBX"
speaker_names: ['Radim Štampach']
affiliations: None
room: "Pulag"
length: "20"
time: "Friday, 15:00"
time_iso: "2025-10-03T07:00:00Z"
resources: []
recording: True
---

Humanitarian OpenStreetMap Team proposed the fAIr project (https://fair.hotosm.org/) - an open-source AI-assisted mapping tool. This study describes our user testing organized to compare AI-assisted mapping of buildings in the fAIr tool and classic manual mapping of buildings in the JOSM editor without AI assistance. 26 participants took part in the experiment. Efficiency (number of buildings mapped per minute), effectiveness (proportion of buildings mapped correctly), and satisfaction (feedback from participants) were analyzed.

<hr>

Introduction 
Humanitarian organizations need maps for their activities. However, there is a lack of quality maps in many countries. The Humanitarian OpenStreetMap Team (HOT) is coordinating a global effort for humanitarian mapping, where volunteers create maps of remote locations. They use satellite imagery to search for roads and buildings and draw them into the OpenStreetMap. Despite all the efforts of volunteers, many regions remain insufficiently mapped (Herfort et al., 2021). Artificial intelligence (AI) is already used to analyze satellite imagery. There is thus an opportunity to use AI for humanitarian mapping as well. HOT proposed the fAIr project (https://fair.hotosm.org/) – an open-source AI-assisted mapping tool (HOT, 2025). In a presentation from SOTM 2024, Anna Zanchetta (Zanchetta, 2024) analyzed the performance of fAIr in detecting buildings in different conditions. 

Our group, located in the Department of Geography, Faculty of Science, Masaryk University, Czechia, is part of the humanitarian mapping community Missing Maps Czechia and Slovakia. We were in contact with the fAIr developers from HOT – Omran Najjar, Kshitij Sharma, and Anna Zanchetta. They asked us if we could organize user testing of the first version of fAIr. The goal was to compare AI-assisted mapping buildings with the fAIr tool and classic manual mapping buildings without AI assistance. The popular JOSM editor, which offers experienced tools for manual building mapping, was used for comparison.

Methodology 
The experiment took place in an online environment during November 2024. The experiment took place in four different sessions, so each participant could choose the day and time that suited them best. Training datasets were prepared for 24 different localities around the globe. 26 participants took part in the experiment – 14 beginners and 12 experienced contributors. The participants were divided into groups A and B, so there were similar numbers of experienced contributors and beginners in both groups. Each participant was assigned one location for mapping in fAIr and one location for mapping in JOSM. Each session was structured as follows: 
-An explanation of the rules for correctly and incorrectly mapped buildings. 
-45 minutes: group A mapped in fAIr, group B mapped in JOSM 
-5 minutes: break
-45 minutes: group B mapped in fAIr, group A mapped in JOSM 
-Participants filled in the feedback questionnaire. 
Validators evaluated the mapped buildings, and the results were analyzed. Efficiency (number of buildings mapped per minute), effectiveness (proportion of buildings mapped correctly), and satisfaction (feedback from participants) were analyzed.

Results
Mapping in JOSM (86.08 %) was significantly more accurate than the fAIr tool (78.22 %).  Mapping in JOSM (4.23 buildings/min) was significantly faster compared to the fAIr tool (1.97 buildings/min).
Results of experienced users and beginners were also compared. Beginners mapped faster in JOSM (2.89 buildings/min) than in fAIr (2.08 buildings/min), but the mapping quality was almost the same in JOSM (79.28 %) and fAIr (80.41 %). Experienced contributors mapped much faster (5.69 buildings/min) and with higher quality (93.45 %) in JOSM than in fAIr (1.84 buildings/min and 75.38 %).

Interestingly, it means that beginners have better results of mapping quality (80.41%) and mapping speed in fAIr (2.08 buildings/min) than experienced contributors (75.38 % and 1.84 buildings/min). On the contrary, experienced contributors have much better results in mapping quality (93.45 %) and mapping speed (5.69 buildings/min) in JOSM than beginners (79.28 % and 2.89 buildings/min).

We also analyzed the influence of the complexity of mapping locality, e.g., the density of buildings in the mapped site and the quality of the imagery. For easy localities, experienced contributors generally have higher mapped building counts, indicating better fAIr performance on simpler tasks. For complex localities, the number of buildings mapped by experienced contributors drops significantly, suggesting that complex localities pose a challenge even for experienced contributors. A higher number of errors was found in complex localities, where AI likely generated lower-quality building outline designs. Interestingly, for complex localities, beginners mapped more buildings than experienced contributors, which may suggest that they focus on quantity. This could indicate potential quality issues.

23 participants answered a feedback questionnaire. They indicated that fAIr was not their preferred tool for humanitarian mapping, but more than half of them said they would return to it. In their opinion, fAIr is suitable for beginners. On the other hand, most participants stated that the buildings generated by AI need to be further modified. Most participants claimed that mapping in the JOSM editor was faster.

Discussion 
After evaluating the results and feedback from participants, recommendations were proposed for the further development of the fAIr tool:
-fAIr is a beginner-friendly tool. It is suitable for quick mapping of simple features. Users appreciated the simple interface and AI support. Beginners have similar results in fAIr as experienced contributors, sometimes even better. Users suggested combining both tools – starting with quick mapping in fAIr and refining the quality in JOSM. 
-Participants had issues with AI-generated shapes, as fAIr did not allow proper mapping of more complex buildings. Often, separate buildings were mistakenly combined into a single outline. These problems were greater in the complex areas (e.g., density of the mapped site and the quality of the imagery), where the AI seemed unable to design good building outlines. 
-The results were influenced by the fact that JOSM includes tools for mapping buildings, which gives it an advantage over fAIr. However, JOSM does not have specialized tools for mapping other features (e.g., roads). It is possible that mapping these features would yield more favorable results for fAIr. 
-Users believe that fAIr has the potential to improve the mapping process and could be helpful if key problems are addressed. 

Some problems will likely be solved using innovations in the new version of fAIr – e.g., using a YOLO-type ML model and increasing the speed of prediction of building outlines (HOT, 2025). A continuation of our study could be to repeat user testing with the new version of fAIr – e.g., compare the results of the RAMP model from the original version of fAIr with the YOLO model from the latest version.

The results of the experiment (HOT &amp; MUNI, 2024) were published as a scientific report: 
https://drive.google.com/file/d/10I1wz1BHsBXmBjXMx99KzqBwaVpj5MJN/view?usp=sharing 
Raw data from the experiment can be found here: 
https://docs.google.com/spreadsheets/d/10LUGkN10wUt-VBRJoNFdCxIEOpvQkyWg/edit?usp=sharing&amp;ouid=116154085074085968041&amp;rtpof=true&amp;sd=true

