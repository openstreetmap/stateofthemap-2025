---
layout: session
title: "OSM Swiss Style and the new OSM Swiss Base Map"
code: "RD3WXL"
speaker_names: ['Stefan Keller']
affiliations: None
room: "Pulag"
length: "20"
time: "Saturday, 16:30"
time_iso: "2025-10-04T08:30:00Z"
resources: [{ description: "Presentation (PDF v1) on &#34;OSM Swiss Style&#34; by Stefan Keller, State of the Map 2025 Manila, 2025-10-04", url: "https://pretalx.com/media/sotm2025/submissions/RD3WXL/resources/2025-10-04_SotM_2_fdAEz2Y.pdf" },{ description: "Webapp of the &#34;OSM Swiss Base Map&#34; covering Switzerland and surrounding countries, July 2025 (No guarantee – subject to change or unavailability)", url: "https://osm-swiss-style.infs.ch/" },{ description: "&#34;OSM Swiss Base Map&#34; showing Zermatt at zoom level ~16.7 (Screenshot 2025-09-28)", url: "https://pretalx.com/media/sotm2025/submissions/RD3WXL/resources/2025-10-04_SotM_2_KZUQJlR.png" }]
recording: True
prerecorded: True
---

This talk will present the OSM Swiss Style project and the new OSM Swiss Base Map, which was developed by University of Applied Sciences OST, in cooperation with ETH Zurich, Sourcepole AG and the Swiss OpenStreetMap Association. The goal is to create a base map for thematic maps that blends Swiss cartographic design principles such as clarity and readability with modern technologies like vector tiles and unique worldwide datasets such as OpenStreetMap (OSM) data and Terrain 3D tiles. The map style pays particular attention to public transport. It uses MapLibre GL JS, PMTiles, Tilemaker with Lua scripts and an extended Shortbread schema. Graphical assets include custom-made icons, icons from the OSM project, and the Roboto font. Innovations include geographical name and points-of-interest (POI) prioritization with QRank, which will be discussed alongside the challenges experienced so far.

<hr>

This talk will present the OSM Swiss Style project and the new OSM Swiss Base Map. This small project is a collaboration between the Eastern Switzerland University of Applied Sciences OST, ETH Zurich's Institute of Cartography and Geoinformation, Sourcepole AG and the Swiss OpenStreetMap Association.

The project's main goal was to develop a base map for OSM.ch that could be used as a base layer for creating thematic maps for various applications, such as tourism and mobility, under a CC BY 4.0 licence. The idea was to combine traditional Swiss map design, with its clarity and readability and hill and rock shading, with modern open-source technologies such as vector tiles, as well as unique worldwide datasets such as OpenStreetMap (OSM) and 3D terrain data (terrain tiles).

Currently, the map is limited to the bounding box around Switzerland, but the tools and styles are designed to be scalable worldwide. The map style pays particular attention to public transport (railways) versus private transport and features clear, categorised symbols.

The front-end uses MapLibre GL JS with plug-ins including PMTiles. Graphical assets include icons from the OSM project, custom point, line, and area symbology, and the Roboto font family. Backend processes are handled using Tilemaker with Lua scripts and an extended version of the Shortbread vector tile schema.
 
Discussed innovations include prioritization of geographical names and points-of-interest (POI) using the QRank dataset. Some challenges will also be mentioned, like data preprocessing and generalization. It is hoped that the innovations and challenges mentioned will stimulate a lively Q&amp;A session.

