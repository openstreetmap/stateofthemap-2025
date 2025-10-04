---
layout: session
title: "Overpass Turbo goes PostGIS"
code: "GQKLBA"
speaker_names: ['Frederik Ramm']
affiliations: None
room: "Mayon"
length: "20"
time: "Saturday, 15:00"
time_iso: "2025-10-04T07:00:00Z"
resources: [{ description: "Presentation Slides", url: "https://pretalx.com/media/sotm2025/submissions/GQKLBA/resources/postpass_31WD5H8.pdf" }]
recording: True
prerecorded: False
---

This talks presents the &#34;Postpass&#34; service, a database that services OSM data for public querying much like Overpass, but uses PostGIS under the hood. With a few extra characters added to your query, you can have the power of PostGIS at your fingertips from within Overpass Turbo.

<hr>

Overpass and Overpass Turbo are indispensable tools for OSM contributors - everyone uses them whenever you need to glance at the data and go beyond what's visible on the map. Show me pizza places in Dundee, which playgrounds in Paris have age restrictions - stuff like that can be done quickly with Overpass and doesn't require any data downloading or software installation.

Because such &#34;rapid prototyping&#34; is so easy with Overpass, a lot of community projects small and large have come to depend on Overpass and its two domain-specific query languages as a backbone. Pages upon pages on the community forum and wiki deal with how to solve this or that query with Overpass - and there are cases where a PostGIS query could to the same thing more efficiently or easier than Overpass. 

The missing link to allow the same &#34;rapid prototyping&#34; and experimenting with PostGIS that we already see with Overpass is a publicly accessible PostGIS instance. The author has been running exactly that for half a year (Github repos https://github.com/woodpeck/postpass and https://github.com/woodpeck/postpass-ops) and this talk explains how to use it, and what its strengths and weaknesses are.

