---
layout: session
title: "Intelligent Enough? Evaluating Collective Action in HOT Tasking Manager Mapping Projects"
code: "CWLZMQ"
speaker_names: ['Héctor Ochoa Ortiz']
affiliations: None
room: "Pulag"
length: "20"
time: "Friday, 15:30"
time_iso: "2025-10-03T07:30:00Z"
resources: []
recording: True
---

This talk examines the dynamics of collective intelligence in humanitarian mapping projects coordinated through the HOT Tasking Manager, using a dataset of 746 projects and 312,289 tasks to evaluate participation, collaboration, and evidence of intelligent group behavior.

<hr>

Humanitarian mapping projects coordinated through the Humanitarian OpenStreetMap Team Tasking Manager (HOT-TM) represent a paradigmatic case of large-scale digital collaboration. Yet, while their practical utility in disaster response and preparedness is increasingly evident, the underlying collective dynamics that allow these efforts to function effectively remain under-explored. This talk builds on our recent article published in ACM Transactions on Computer-Human Interaction (TOCHI) [1] that presents a comprehensive analysis of HOT-TM projects through the lens of collective intelligence.

Collective Intelligence is defined as “groups of individuals acting collectively in ways that seem intelligent [2].” Following this definition, we structured our analysis around three guiding research questions: (RQ1) What characterizes the group of individuals collaborating in HOT-TM mapping projects?, (RQ2) How is collective action organized within these projects?, and (RQ3) What evidence of intelligent action can be identified in this setting?

To answer these questions, we constructed and analyzed a dataset encompassing 746 HOT-TM projects executed between December 2021 and November 2023. The dataset includes 312,289 mapping tasks performed by 38,893 contributors, as well as detailed records of over 1.8 million task states. Additionally, we incorporated spatial information on the area of mapped buildings using data extracted from the OpenStreetMap database.

Our analysis proceeds in three stages. First, we profile the mapping community. Results show that the vast majority of contributors are beginners, who typically participate in a single project. However, a small group of highly experienced mappers—classified by HOT-TM as &#34;advanced&#34;—contribute to dozens of projects and assume more complex tasks. Notably, only 29% of contributors declare their country, but among those who do, the majority are based outside the regions affected by the mapping projects (see Figure 1). This reinforces existing concerns about the limited presence of local knowledge in humanitarian Volunteered Geographic Information (VGI) initiatives [3].

Second, we investigate the organization of collective action using process mining techniques applied to task state logs. Most mapping tasks follow a simple trajectory: a task is mapped and then validated without being split or invalidated (see Figure 2). However, tasks that involve higher complexity or suffer errors require more contributors and longer processing times. Roles within the mapping system are clearly stratified: while beginners dominate mapping in simpler projects, advanced mappers take the lead in complex cases and are responsible for nearly all validations. Despite the potential for collaboration in the mapping phase—through the sequential editing of tasks—true interdependence among contributors is limited. Most tasks are executed by a single mapper, and where collaboration occurs, it is often sequential and uncoordinated. This suggests that HOT-TM's microtasking design promotes a form of &#34;collection&#34; rather than &#34;collaboration&#34; [4].

Third, we assess the presence of intelligent group behavior by analyzing task validation outcomes through logistic regression. We find that advanced contributors are significantly more likely to produce validated outputs, especially when working alone. However, involving multiple contributors in a task—especially when they are less experienced—decreases the probability of successful validation. Furthermore, tasks with larger building areas or those requiring extensive validation times are less likely to be validated, suggesting that complexity and ambiguity remain major challenges.

These findings highlight a paradox at the heart of humanitarian mapping: although the system succeeds in rapidly mobilizing volunteers to produce useful geographic data, its collective intelligence is unevenly distributed and relies heavily on a small core of experienced contributors. The wisdom of the crowd is therefore not uniformly distributed; rather, it is the wisdom of a few that sustains the productivity and reliability of the system. Moreover, the absence of strong collaborative mechanisms and the limited engagement of local mappers constrain the potential for adaptive and context-aware mapping.

We conclude by reflecting on possible design improvements for platforms like HOT-TM. These include: (1) enhancing onboarding and mentorship to accelerate the transition from beginner to advanced contributor; (2) incentivizing meaningful collaboration beyond sequential task handovers; and (3) integrating local knowledge more effectively by prioritizing and rewarding contributions from mappers with relevant geographic proximity or contextual expertise. These directions not only aim to improve the efficiency of mapping but also address the deeper goal of fostering sustainable, inclusive, and context-aware humanitarian VGI ecosystems.

In this era of rapid and widespread adoption of artificial intelligence, our study offers valuable guidance for the thoughtful integration of these technologies in ways that strengthen—rather than undermine—productive collaboration. By examining how collective intelligence emerges and operates in humanitarian mapping, we identify strategies for deploying AI that support human contributors, enhance coordination, and sustain engagement across diverse experience levels.

This work contributes to the growing body of research at the intersection of Human-Computer Interaction, Collective Intelligence, and Geographic Information Science, and provides empirical grounding for future interventions in humanitarian mapping systems. 


Acknowledgement:
This work is supported by the ODECO project. This project has received funding from the European Union’s Horizon 2020 research and innovation programme under the Marie Skłodowska-Curie grant agreement No. 955569.

