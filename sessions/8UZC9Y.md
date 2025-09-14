---
layout: session
title: "Open Mapping for Urban Resilience: A Routing Model to Nearest Safe Spaces in Earthquake-Vulnerable Dhaka"
code: "8UZC9Y"
speaker_names: ['Ramisa Maliha']
affiliations: None
room: "Pulag"
length: "5"
time: "Friday, 16:40"
time_iso: "2025-10-03T08:40:00Z"
resources: []
recording: True
---

Dhaka, one of the most densely populated cities in the world, faces a high risk of catastrophic damage in the event of a major earthquake. The lack of accessible open spaces poses a serious challenge for emergency evacuation and survival. This project utilizes OpenStreetMap (OSM) road and building layers, combined with satellite imagery, to identify existing open spaces across the city. Using ArcGIS, a routing model was developed to guide individuals to their nearest safe zone during an earthquake. This approach demonstrates how open-source geospatial data and GIS tools can be leveraged for disaster preparedness in high-risk areas.

<hr>

1.	Title: Open Mapping for Urban Resilience: A Routing Model to Nearest Safe Spaces in Earthquake-Vulnerable Dhaka

2.	Submission Type: 20-minute talk

3.	Abstract: 

This presentation introduces a GIS-based routing model developed for earthquake preparedness in Dhaka, Bangladesh. By integrating OpenStreetMap data with satellite imagery, the project identifies open spaces and directs urban populations to the nearest safe zones during seismic emergencies.

4.	Description:

Dhaka is one of the most densely populated cities in the world, with over 20 million residents living in an area of approximately 306 square kilometers. Despite its rapid urbanization, the city faces a severe shortage of open spaces, such as parks, playgrounds, and public squares, which are critical in times of disaster. The urban landscape is dominated by high-rise buildings and commercial complexes, with little consideration for creating large, accessible public spaces. This makes it increasingly difficult to accommodate the population in emergency situations, particularly during a major earthquake. According to the World Bank, Dhaka’s vulnerability to earthquakes is exacerbated by the lack of proper urban planning and outdated infrastructure [6]. A study by Rahman et al. (2015) highlights that most of Dhaka’s infrastructure, including residential buildings and roads, was not designed with seismic safety in mind, making the city highly susceptible to catastrophic damage in the event of an earthquake [2].

In addition to the lack of open spaces, the city's rapid urbanization has led to insufficient planning for evacuation routes and safety measures. Public awareness regarding earthquake preparedness is low, and emergency response systems are not adequately equipped to handle large-scale disasters. Without well-documented open spaces and efficient evacuation routes, the challenge of evacuating residents to safety during an earthquake becomes significantly more complex.

The objective of this research is to develop a spatial framework for earthquake emergency evacuation planning by integrating multiple data sources: OpenStreetMap (OSM) road and building layers, satellite-derived open space data, and spatial analysis tools in ArcGIS. The methodology involves three major steps:

1.	Open Space Identification: Open spaces were delineated by classifying high-resolution satellite imagery, verified and cross-referenced with existing land use data and field knowledge. Parks, playgrounds, schoolyards, open fields, and other publicly accessible open areas were identified as potential evacuation zones [2].

2.	Urban Feature Mapping with OSM: OSM was used as the primary source for road networks and building footprints. The completeness and accessibility of OSM data enabled detailed modelling of the urban structure [3], and the data was further cleaned and enriched using local knowledge and field validation.

3.	Routing Model Development: Using ArcGIS Network Analyst, a routing model was developed to calculate the shortest and most accessible path from any given building or cluster of buildings to the nearest open space [4]. This model considers actual street networks and real-world constraints. Future versions of the model could also include blocked roads or damaged areas during earthquakes to make the routes more realistic.

The significance of this work lies in its practical application: in a high-density city like Dhaka, where open spaces are scarce and poorly documented, a pre-disaster preparedness model like this can be integrated into municipal planning, community training, and mobile-based alert systems [1]. By leveraging open-source geospatial data such as OSM and combining it with remote sensing and network analysis, this approach offers a low-cost, scalable, and replicable solution for other vulnerable cities in the Global South [3].

Moreover, this project highlights the power of community mapping and open data in disaster risk reduction. YouthMappers and local GIS volunteers can play a role in validating OSM features and verifying open space locations [3]. Community participation in data validation enhances the credibility of the model and promotes local ownership of the disaster preparedness process.

The proposed presentation will:
•	Demonstrate the technical workflow from satellite image classification to OSM integration and route modelling;
•	Share maps and visualizations showing high-risk areas and evacuation routes in Dhaka;
•	Discuss challenges such as data gaps, building density, and limited public access to open spaces [2];
•	Suggest future enhancements including dynamic routing, mobile application integration, and expansion to other hazard types such as fire or flood response [5].

Future Prospects of the Project: 

Looking ahead, this project has the potential to evolve into a user-friendly mobile application or website that could serve as an accessible tool for the residents of Dhaka, helping them navigate to the nearest open space during an earthquake or other disaster. The app could integrate real-time data, such as building damage reports, blocked roads, or infrastructure collapse, to provide dynamic evacuation routes based on the current situation. As part of future iterations, the app could include features like push notifications for earthquake warnings, location tracking, and an interactive map with various evacuation routes displayed in real time. The mobile app could also support crowd-sourced data, where locals can report new open spaces or hazards, continuously improving the accuracy of the evacuation model.

This work not only contributes to urban resilience but also aligns with the mission of the OpenStreetMap community to use freely accessible geospatial data for humanitarian and civic purposes [3]. It underscores how locally driven mapping efforts, when supported by global tools and platforms, can lead to impactful and life-saving innovations.

Bibliography
1.	Islam, M. S., &amp; Adri, N. (2023). Earthquake preparedness in an urban area: the case of Dhaka city. Geoscience Letters, 10(1), 1-12. https://doi.org/10.1186/s40562-023-00281-y
2.	Rahman, M. M., &amp; Saha, S. K. (2015). GIS based mapping of vulnerability to earthquake and fire hazard in Dhaka city, Bangladesh. International Journal of Disaster Risk Reduction, 13, 291-300. https://doi.org/10.1016/j.ijdrr.2015.06.002
3.	OpenStreetMap Bangladesh Community. (2014). OpenStreetMap for disaster management in Bangladesh. ResearchGate. https://www.researchgate.net/publication/261240182_OpenStreetMap_for_the_disaster_management_in_Bangladesh
4.	Esri. (2012). Out of Harm's Way: A custom Network Analyst tool for evacuation routing. ArcUser. https://www.esri.com/news/arcuser/0612/out-of-harms-way.html
5.	Red Cross EU. (n.d.). Dhaka earthquake and emergency preparedness – Activities. https://redcross.eu/projects/dhaka-earthquake-and-emergency-preparedness
6.	World Bank. (2022). Urban resilience in Dhaka: Addressing seismic vulnerability and disaster risks. Retrieved from https://www.worldbank.org

