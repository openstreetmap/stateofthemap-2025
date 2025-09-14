---
layout: session
title: "Where are we heading? The current state of OpenStreetMap in numbers."
code: "MHL8MU"
speaker_names: ['Benjamin Herfort']
affiliations: None
room: "Mayon"
length: "20"
time: "Friday, 16:30"
time_iso: "2025-10-03T08:30:00Z"
resources: []
recording: True
---

OpenStreetMap has celebrated its 20th birthday last year. Over the past two decades the community grew tremendously and now covers (almost) the entire globe. This talk summarizes OSM’s evolution with maps and meaningful numbers. We want to take a look at the “state of the map”, current mapping trends and some of the challenges that we face.

We look at the size of the active community, analyse regional differences in mapping and look at the impact of mobile OSM editors such as StreetComplete and Every Door. Let’s also take a brief look at humanitarian mapping, corporate mapping and the impact of AI-generated data and Street View Imagery on OSM’s future. 

This talk is intended to be an introduction and puts a focus on the basics. Each topic mentioned above would probably deserve its own talk!

<hr>

OpenStreetMap has celebrated its 20th birthday last year. Over the past two decades the community grew tremendously and now covers (almost) the entire globe. This talk summarizes OSM’s evolution with maps and meaningful numbers. We want to take a look at the “state of the map”, current mapping trends and some of the challenges that we face.

### Active Community
OSM had pretty stable base of about 250,000 active mappers per year for the past three years. Nevertheless, the all time high has been recorded in 2017 and since then there was a slight decline in active mappers. We want to break down these large numbers: How many people make up the core of OSM by contributing most data? How many people start mapping in OSM for their first time each day? What does this mean for the future of OSM and the next generation of mappers?

### Regional Differences
OSM as a global project has always been characterized by regional differences. This can be assessed by looking at the map in various places, but also by by breaking down the number of mappers per country and setting this into perspective with the overall population count. How “biased” was OSM in its first decade and to what extend did this change over the past years? What are the “trending” countries in OSM that have experienced a particular strong increase? Are there countries where the OSM community is under pressure, in particular after the pandemic? We will take a closer look at our host country the Philippines and the evolution of OSM in Southeast Asia. 

### Micro Mapping
New OSM editors such as StreetComplete and Every Door for smartphones have removed some of the technical barriers and have made OSM mapping available to a less technical minded group of users. This is great and we can see this in the OSM data when taking a closer look at where amenities and point-of-interests are edited. How much mapping happens through mobiles apps compared to the more traditional editors such as JOSM or iD? Which countries are leading the way?

### Further Trends and Challenges
The OSM community is diverse and organised forms of mapping have evolved over the past years. Humanitarian mapping, e.g. through the HOT Tasking Manager, or corporate mapping have added map data in places previously unmapped. At the same time organized mapping has also undergone some changes and corporate mapping has declined over the past years significantly. On the other hand, there are new forms of mapping that challenge some of the established conventions. AI-data and AI-assisted mapping already begin to have a larger impact on OSM. As the coverage of Street View Imagery expands, new details can be added to the map without being physically on the ground. What does this mean for the future of OSM?

I’m not sure if we want to talk about vandalism in OSM. In recent years we saw at least two waves of vandalism in OSM related to real-world political conflicts. Probably it’s too much for this talk, but let’s see.

### Tech &amp; Tools
For the analysis we will mainly rely on HeiGIT’s ohsomeNow stats dashboard (https://stats.now.ohsome.org/), which offers minutely updated and global scale overview statistics on all mapping activity in OSM. The website and API allow you to get insights into the number number of contributors, total map edits, added buildings and added road length for a given time range and optional OSM Changesets hashtag and country filters. Hexagon maps (upcoming in next release in June) provide further insights “where” mapping happens at a finer resolution.

Some of the results presented in the talk will be based on GeoParquet files generated with ohsome-planet (https://github.com/GIScience/ohsome-planet). You can use the ohsome-planet data to perform a wide range of geospatial analyses, e.g. using DuckDB, GeoPandas or QGIS. At the State of the Map 2024 in Nairobi we have organized a workshop which shows use cases and provides a more thorough introduction (https://giscience.github.io/sotm-2024-ohsome-data-insights-workshop/intro.html).

When preparing this talk we have also drawn inspiration from the OSM statistics provided by Piet Brömmel (https://github.com/piebro/openstreetmap-statistics).

