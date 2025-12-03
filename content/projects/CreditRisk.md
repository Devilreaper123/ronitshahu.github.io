---
date: '2025-11-25'
title: 'Credit Risk + SEC RAG Analysis Platform'
github: 'https://github.com/Devilreaper123/llm-predictive-risk-platform'
tech:
  - Python
  - FastAPI
  - Docker
  - scikit-learn
  - LangChain / RAG
  - Gemini 2.5 Pro (LLM)
  - FAISS
  - HuggingFace Embeddings
  - SEC-Edgar-Downloader
company: 'Personal Project'
showInProjects: True
---

An **enterprise-style credit risk and disclosure analysis platform** that combines classical ML with LLM-based RAG.  
A structured model (LogReg / RF / GBDT) predicts **bankruptcy probability** from the Taiwan bankruptcy dataset, while a RAG pipeline indexes **SEC 10-K risk and MD&A sections** to explain _why_ a firm appears risky.

The system exposes **FastAPI endpoints** for both prediction and analysis, retrieves relevant SEC passages via FAISS + embeddings, and uses **Gemini 2.5 pro** to generate grounded risk narratives that tie together model outputs, liquidity concerns, and disclosed risk factors.  
Everything is designed to be **production-ready** with Docker, logging, and evaluation scripts so the full pipeline can be rebuilt locally (download filings → extract sections → build index → serve API).
