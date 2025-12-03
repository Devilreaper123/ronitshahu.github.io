---
date: '2025-12-05'
title: 'Paysim Fraud Analytics Agent (Multi-Model + RAG + Gemini)'
github: 'https://github.com/Devilreaper123/paysim-fraud-analytics-agent'
tech:
  - Python
  - FastAPI (coming next)
  - Docker
  - scikit-learn
  - LightGBM
  - PyTorch
  - LangChain (Agents + Tools)
  - Gemini 2.5 Flash
  - TF-IDF RAG
  - Logging (Structured)
company: 'Personal Project'
showInProjects: True
---

An **end-to-end fraud analytics intelligence system** built on the Paysim dataset that combines  
multi-model fraud scoring, retrieval-augmented context, and an **agentic decision engine** powered by Gemini 2.5 Flash.

Four independently-trained models — **Logistic Regression, Random Forest, LightGBM, and a PyTorch MLP** — each score incoming transactions (amount, balances, transaction type).  
A TF-IDF RAG index retrieves **similar historical fraud patterns** to ground model predictions.

A Gemini-powered LangChain agent compares the models’ probabilities, evaluates agreement/disagreement, inspects retrieved history clusters, and produces a **unified risk recommendation**:

- **APPROVE**
- **MANUAL REVIEW**
- **DECLINE**

The pipeline is designed in modular layers so that every component can be swapped or retrained:

- `ml/` — classical + deep learning model training
- `rag/` — TF-IDF index builder for 6M+ synthetic transactions
- `agents/` — Gemini tool-calling agent with model-comparison logic
- `core/` — CLI runner and configuration
- `artifacts/` — serialized models, preprocessors, and RAG index

A **FastAPI service layer will be added next**, exposing `/predict`, `/rag`, and `/agent` endpoints to fully operationalize real-time fraud intelligence.

---
