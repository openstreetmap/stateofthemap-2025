---
layout: session
title: "Mapping Mangrove Regeneration and Degradation Zones in the Sundarbans Using OpenStreetMap and Remote Sensing"
code: "LBDHR9"
speaker_names: ['Anika Tabassum Ohee']
affiliations: None
room: "Pulag"
length: "5"
time: "Friday, 12:40"
time_iso: "2025-10-03T04:40:00Z"
resources: []
recording: True
---

Mangrove ecosystems are frontline defenders against climate change, yet data gaps hinder timely conservation. This research introduces a open mapping framework to detect and classify mangrove regeneration and degradation zones in the Sundarbans—one of the world’s largest mangrove forests. We fuse NDVI-based satellite analytics with OpenStreetMap (OSM) contributions and local validation to improve spatial accuracy. Our workflow strengthens OSM’s environmental data model and demonstrates how open-source mapping can guide climate adaptation, habitat restoration, and disaster risk planning. The study serves as a template for scaling environmental monitoring across other fragile coastal ecosystems.

<hr>

Introduction
Mangrove forests are among the most critical yet vulnerable ecosystems on Earth, acting as natural buffers against coastal erosion, rising sea levels, and tropical cyclones. The Sundarbans, shared by Bangladesh and India, represent the world’s largest contiguous mangrove forest and play a vital role in biodiversity conservation, carbon sequestration, and local livelihoods. However, the Sundarbans are facing increasing ecological stress due to climate change, cyclonic events, sea-level rise, salinity intrusion, and unsustainable human activity. Tracking spatial changes in mangrove health—especially the zones of regeneration and degradation—is essential for policy-driven conservation. Yet, high-resolution, community-validated, and frequently updated datasets remain limited.
This study aims to bridge that gap by developing a reproducible, open-source mapping framework to monitor mangrove regeneration and degradation zones in the Bangladeshi Sundarbans. By integrating remote sensing techniques such as NDVI (Normalized Difference Vegetation Index) with community-contributed OpenStreetMap (OSM) data, we seek to enhance the accuracy and coverage of open environmental datasets. Furthermore, by aligning satellite-derived indices with participatory mapping workflows, we demonstrate how geospatial science, citizen participation, and open data platforms like OSM can be brought together to track ecosystem health in near-real-time.

Objectives
The primary objectives of this research are:
•	To map zones of mangrove regeneration and degradation in the Sundarbans using NDVI-based time-series analysis.
•	To validate and improve mangrove coverage in OpenStreetMap through field observations and remote community mapping.
•	To develop a reproducible, open-access geospatial workflow that enhances OSM’s environmental dataset quality and usability.
•	To support local and national-level conservation efforts through policy-relevant spatial insights on mangrove ecosystem dynamics.

Methodology
Our workflow consists of four main phases: data acquisition, image processing and classification, OSM data enhancement, and community validation.

1. Data Acquisition
•	Satellite Imagery: Landsat-8 and Sentinel-2 datasets were used to retrieve cloud-free seasonal images of the Sundarbans from 2015 to 2024. These datasets offer adequate spatial and temporal resolution to monitor vegetation trends.
•	OpenStreetMap Data: Mangrove-related features were extracted from OSM using Overpass API and HOT Export Tools. Features include mangrove forests, coastal boundaries, rivers, and protected areas.
•	Ancillary Data: Ground-truthing data were acquired from previous mangrove studies, local forestry reports, and high-resolution drone imagery from select field sites.

2. Vegetation Change Detection
We calculated NDVI values for each time frame and performed a time-series analysis to detect trends in mangrove cover changes. NDVI values were categorized to identify three types of zones:
•	Stable Zones: Little to no NDVI change over the years.
•	Regenerating Zones: Areas showing increasing NDVI, indicating healthy vegetation growth.
•	Degrading Zones: Areas with declining NDVI values, possibly due to deforestation, salinity, or erosion.
NDVI classification thresholds were refined through comparison with ground data and OSM features.

3. Integration with OSM and Map Updating
Using JOSM and iD editor, the classified zones were digitized as OSM-compatible features. Regeneration and degradation areas were tagged using a proposed tagging schema (e.g., landuse=forest, leaf_type=broadleaved, regeneration=yes, degraded=yes). Our edits were uploaded with proper changeset comments and source references.
To increase transparency and reproducibility, the entire workflow was developed using open tools including QGIS, Google Earth Engine (GEE), Python, and R. The GEE scripts and OSM edit history are made openly available via GitHub.

4. Community Validation
Field verification was conducted through collaboration with university students, local forest offices, and community-based volunteers. For areas inaccessible due to terrain or wildlife risk, remote validation was done using high-resolution imagery and interviews with local inhabitants. Feedback loops were created through participatory mapathons, where volunteers validated, added, or corrected data using MapSwipe, Tasking Manager, and JOSM.

Findings
Our analysis revealed significant spatial variation in mangrove conditions over the past decade. Key findings include:
•	Regeneration Hotspots: Zones in Satkhira and Khulna districts showed positive NDVI trends, often due to natural sedimentation and reforestation projects.
•	Degradation Zones: Coastal fringes near Hiron Point and Dublar Char indicated substantial vegetation loss, likely caused by salinity intrusion and human encroachment.
•	OSM Improvements: Over 1,200 mangrove features were added or corrected in OSM, improving forest layer accuracy and enabling better navigation and planning tools for researchers and conservationists.
These results are visualized using interactive OSM-based web maps and time-series NDVI charts for policymakers and researchers.

Scientific Contribution
This research contributes to OpenStreetMap science in several ways:
•	It introduces a hybrid methodology combining remote sensing, OSM editing, and field validation for ecosystem monitoring.
•	The study enhances OSM’s environmental data model, particularly for forest-related features, and proposes a consistent schema for tagging ecological change.
•	All methods, code, and tools are released under open licenses to ensure reproducibility and transparency, aligning with SoTM Science's open knowledge ethos.
•	The approach can be replicated in other deltaic, coastal, or mangrove ecosystems, offering a scalable model for biodiversity monitoring through OSM.
Practical Impact
This project offers practical benefits for:
•	Policymakers: Spatial data on regeneration and degradation zones help prioritize conservation funding and coastal afforestation.
•	Disaster Risk Managers: Understanding mangrove loss patterns aids cyclone preparedness and early warning systems.
•	Researchers and NGOs: Open geospatial layers enable collaborative research and advocacy for sustainable coastal development.
•	Local Communities: Citizen science empowers coastal populations to contribute to and benefit from environmental data.

Reproducibility and Open Access
To ensure reproducibility:
•	All code (NDVI processing, classification, OSM validation) is available on [GitHub link].
•	Satellite imagery access and preprocessing steps are documented using GEE.
•	OSM changesets, tags, and project documentation are archived with timestamps.
•	All mapping tools used are open-source: QGIS, JOSM, HOT Tasking Manager.

Conclusion
This work shows how community-driven geospatial data and open science tools can be integrated to monitor vital ecosystems like the Sundarbans mangroves. By identifying where mangroves are thriving or vanishing, the project empowers local action and supports global sustainability goals. It reinforces the role of OpenStreetMap not only as a mapping platform but as a critical resource for environmental research and policy.
Through open collaboration, reproducibility, and scientific rigor, this research strengthens the bridge between the OSM and scientific communities, demonstrating the transformative potential of participatory environmental monitoring.

