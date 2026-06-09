---
title: "Toward a Bangla RAG System for Public Health: Motivation, Architecture, and Early Findings"
date: 2026-06-09T00:00:00Z
description: "Why Bangladesh needs a Bangla-first retrieval-augmented generation system for public health communication, and what early design and evaluation reveals about its feasibility in resource-constrained environments."
tags: [
  "Digital Health",
  "Bangladesh",
  "Health Information Systems",
  "Health Informatics"
]
slug: "bangla-rag-public-health-bangladesh"
draft: false
---

Public health communication in Bangladesh faces a structural problem that technology alone has not yet solved.

Decades of investment in health education, community health workers, and behaviour change communication have produced real gains. Yet significant gaps remain — not because the content is unavailable, but because the delivery mechanisms no longer match how people live and consume information.

This article describes the motivation behind a Bangla-first retrieval-augmented generation (RAG) system for public health, summarises the architecture and early findings from an independent technical report, and outlines what this approach could mean for health information delivery in Bangladesh.

---

## Why Existing Channels Are No Longer Sufficient

Three structural shifts have quietly undermined traditional health communication in Bangladesh.

**The household is empty during working hours.**

Both parents in urban and peri-urban households increasingly work outside the home during the hours when community health workers make their visits. Domiciliary services — once a reliable channel for health education — now frequently fail to reach the actual decision-makers of the family. Health messages are delivered to whoever is home, or not delivered at all.

**Urban primary health coverage operates on a false assumption.**

Urban populations are often assumed to be sufficiently educated to seek health information independently. In practice, this assumption does not hold. Primary health education coverage in urban areas remains low, and the informal sources people turn to — social media, word of mouth, unverified online content — are unreliable. The gap is real but largely invisible in conventional coverage metrics.

**The media landscape has fragmented beyond the reach of broadcast.**

Bangladesh once had a single television channel, making it straightforward to reach a national audience with health messaging. Today, with over fifty television channels and a population that increasingly consumes content through mobile internet rather than broadcast media, no single channel reaches everyone. The internet, however, is where attention has consolidated — and it remains largely untapped for structured, accurate health communication in Bangla.

These three shifts point toward the same conclusion: a conversational, always-available, Bangla-language health information system could reach people that existing channels cannot.

---

## Why RAG, and Why Not a Large Language Model

The instinctive response to this problem might be to deploy an existing large language model — ChatGPT, Gemini, or Claude — with a Bangla interface. This approach has significant limitations in the public health context.

Bangla is a low-resource language in the context of large language models. Most frontier models are trained predominantly on English and a small number of high-resource languages. Their Bangla performance, particularly for health-specific queries requiring factual precision, is unreliable.

More importantly, a public health information system requires:

- Responses grounded in verified, authoritative sources
- Auditability — knowing exactly where an answer came from
- Data sovereignty — health queries from Bangladeshi citizens should not be processed on foreign commercial infrastructure
- Feasibility on modest hardware without recurring API costs

Retrieval-augmented generation addresses all of these. Rather than relying on a model's parametric memory, RAG retrieves relevant passages from a curated, verified corpus before generating a response. The answer is grounded in the retrieved content, making it auditable and controllable.

For a public health use case, this is not just a technical preference — it is an ethical requirement.

---

## Architecture Overview

The framework described in the full technical report consists of five components:

**Document preprocessing and semantic chunking** — source documents from MOHFW guidelines, WHO materials, national newspapers, and translated educational content are segmented into meaningful retrieval units.

**Dense retrieval** — multilingual sentence embeddings (BGE-M3) compute semantic similarity between a user query and the document corpus, retrieving the most relevant passages.

**Reranking** — a cross-encoder reranker (BAAI bge-reranker-v2-m3) re-scores the retrieved passages for contextual relevance, substantially improving precision over baseline retrieval.

**Response generation** — TituLLM 3B, a LLaMA 3.2 derivative pretrained on a large Bangla corpus, generates a fluent, context-grounded response in Bangla.

**Domain grounding and safety filtering** — adversarial, unanswerable, and off-topic query handling prevents hallucination and maintains domain boundaries.

The model runs on self-hosted infrastructure — an RTX 3060 12GB GPU with 64GB RAM, virtualised with Proxmox — demonstrating that real-time inference is achievable without cloud dependency or significant hardware investment.

---

## Early Findings

Evaluation on 100 annotated queries produced the following results:

- **Reranker Top-1 accuracy: 86%** — the correct passage ranked first in 86 of 100 cases
- **BM25 baseline: 71%** — the 15-point improvement confirms meaningful retrieval enhancement from dense reranking
- **End-to-end latency: approximately 2.8 seconds** — including retrieval (~0.8s) and generation (~2s) for 512-token context

These are preliminary findings from a small evaluation set and should be interpreted cautiously. The evaluation used single-annotator judgments and mixed-domain Bangla text. Future evaluation will expand to Top-3 and Top-5 metrics with multi-annotator validation.

What the findings do establish is feasibility: a self-hosted, Bangla-first RAG system can operate at practical latency on modest hardware, with retrieval precision substantially above baseline.

---

## The Dataset Challenge

The most significant ongoing challenge is not the model architecture — it is the corpus.

Building a retrieval corpus for Bangladeshi public health requires:

- Content in authentic Bangladeshi Bangla, including regional variation
- Domain-specific health content beyond general linguistic material
- Balanced sourcing across government, journalistic, and neutral educational material
- Careful handling of adversarial and unanswerable queries to prevent misinformation

The current dataset development targets approximately 24,000 retrieval-grounded question-answer pairs across eight subsets — single-context QA, multi-context QA, clarification dialogues, adversarial queries, off-topic queries, unanswerable queries, and multi-turn dialogues.

This is a costly and labour-intensive process. It is also unavoidable. A RAG system is only as reliable as its retrieval corpus, and a corpus built from unverified or unrepresentative sources will produce untrustworthy outputs regardless of model quality.

---

## Beyond Citizen Access: A Knowledge Assistant for Health Workers

The system is not only a citizen-facing tool. Frontline health workers — community health workers, medical assistants, physicians in resource-constrained settings — frequently need quick access to clinical guidelines, referral criteria, and protocol summaries that are not always readily available during patient encounters.

A RAG-backed knowledge assistant grounded in verified DGHS and WHO materials could serve this population directly, reducing dependence on internet searches that return unreliable results and supporting more consistent clinical decision-making at the point of care.

---

## What Comes Next

The next phase of development includes:

- Finalising the RAG dataset (~24,000 samples)
- Fine-tuning the conversational model on the complete dataset
- Evaluating factual accuracy, faithfulness, and hallucination rate
- Releasing the dataset under CC BY 4.0 for academic use
- Integrating privacy-preserving filters for health information safety

The full technical design report, including methodology, dataset structure, reranker evaluation, and infrastructure specifications, is available as a DOI-indexed publication:

**[Toward a Bangla Retrieval-Augmented Generation Framework for Public Health: Design and Preliminary Evaluation](https://doi.org/10.5281/zenodo.17445739)**
DOI: 10.5281/zenodo.17445739

---

## Related Insights

- [Building Digital Health Infrastructure in Bangladesh: Standards, Architecture, and Digital Public Goods](/insights/digital-health-architecture-bangladesh/)
- [Health Data Quality: Beyond Systems, Toward Ownership](/insights/health-data-quality-ownership/)
- [Ensuring Data Quality in Interoperable Health Systems: Validation and ICD-11 Postcoordination in Practice](/insights/health-data-validation-icd11-postcoordination/)
