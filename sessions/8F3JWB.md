---
layout: session
title: "From Maps to Models: Building AI Context Tools for OpenStreetMap"
code: "8F3JWB"
speaker_names: ['Subhash Dulla', 'Ranjith Raj Vasam']
affiliations: None
room: "Guiting-guiting"
length: "60"
time: "Saturday, 09:30"
time_iso: "2025-10-04T01:30:00Z"
resources: []
recording: False
prerecorded: False
---

OpenStreetMap (OSM) is the most comprehensive open-source geospatial database in the world—but as it continues to grow, the tools for understanding and managing this data need to evolve as well. In this workshop, we explore how AI, when thoughtfully integrated with OSM workflows, can offer intelligent, context-aware support to mappers and developers alike.

This session introduces participants to the Model Context Protocol (MCP)—a lightweight, structured format for embedding task-specific context into AI interactions. MCP allows for the creation of prompts and workflows that are reproducible, local-first, and aware of the mapping domain. Using this protocol, we will build a proof-of-concept tool that uses open-source large language models (LLMs) to interpret OSM data and assist with mapping tasks, such as tag validation, feature classification, and geospatial query answering.

Importantly, the workshop focuses on privacy-respecting, open-source solutions. All AI tools used will run locally on participant machines, avoiding any reliance on commercial APIs or user-tracking platforms. This aligns with the ethos of the OSM and open-data communities, ensuring participants can experiment with powerful AI without compromising control or transparency.

Attendees will gain practical skills in working with Overpass API to extract OSM data, creating MCP-compliant prompts, running local LLMs via tools like LM Studio or Ollama, and designing AI agents that enhance mapping workflows. No prior experience with AI is required—just a curiosity for what happens when maps meet models.

<hr>

This 60-minute workshop is designed for mappers, developers, and geospatial enthusiasts who are curious about how artificial intelligence can support the OpenStreetMap ecosystem in a transparent, ethical, and hands-on way. The session focuses on building AI-powered tools that understand and process OSM data using the Model Context Protocol (MCP).

We begin with an introduction to the Model Context Protocol, explaining how it standardizes interactions between users, data, and AI models. MCP is particularly useful for geospatial applications, where prompts must include structured data such as bounding boxes, feature types, tagging standards, and mapping goals. This protocol allows for repeatable, auditable AI interactions—critical for responsible tool-building in the open-data space.

The core of the workshop involves building a proof-of-concept AI assistant for OpenStreetMap. Participants will extract data using Overpass API (e.g., roads tagged as highway=unclassified), structure a mapping task using MCP (e.g., reclassify based on nearby context), and run a local large language model like Mistral or Phi-2 to generate intelligent suggestions.

Key technical activities include:

Writing and executing Overpass queries

Parsing and preparing OSM data for AI consumption

Defining YAML/JSON-based Model Contexts

Running LLMs locally using LM Studio or Ollama

Creating prompt templates and processing AI output

We’ll explore real-world scenarios where AI can help: identifying poorly tagged features, suggesting missing attributes based on context, summarizing mapping challenges, and even answering questions like “Are there untagged amenities in this region?”

Throughout the session, we emphasize ethical AI use, user control, and alignment with OSM community principles. We discuss limitations of LLMs, the risks of automation without human oversight, and the importance of transparency in AI tooling.

Participants will leave with a working prototype, reusable code snippets, and clear next steps to customize and expand their tools. The session is suitable for all skill levels, with guidance provided for both beginners and advanced users.

