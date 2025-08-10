---
layout: page
title: Headline Generation
description: Fine-tuned Google's Pegasus LLM for generating concise and accurate headlines from news articles.
img: assets/img/12.jpg
importance: 1
category: Machine Learning
related_publications: true
---

## Overview

I developed a headline generation model by fine-tuning Google's Pegasus LLM to create concise and accurate headlines from news articles. This project was all about exploring how transformer models can be adapted for abstractive text summarization, specifically focusing on the challenging task of distilling entire news articles into compelling, informative headlines.

## Technical Approach

### Model Development

- **Base Model**: Started with Google's Pegasus LLM (568M parameters), which was specifically designed for abstractive summarization tasks
- **Fine-Tuning Strategy**: Used PyTorch and CUDA for efficient training on cloud infrastructure
- **Data Pipeline**: Built a scalable cloud-based pipeline to handle the training data preprocessing and model training

### What I Worked On

- **Model Optimization**: Fine-tuned the massive 568M parameter model while managing computational constraints
- **Training Infrastructure**: Set up cloud-based training with CUDA acceleration to handle the large model efficiently
- **Evaluation Metrics**: Implemented proper evaluation methods to measure headline quality and relevance
- **Pipeline Engineering**: Created an end-to-end system from raw news articles to generated headlines

## Results

The project successfully produced a working headline generation system that:

- Generates concise, informative headlines that capture the essence of news articles
- Demonstrates effective fine-tuning of large language models for specific summarization tasks
- Shows how cloud infrastructure can be leveraged for training computationally intensive models
- Provides insights into the challenges and opportunities in abstractive text summarization

## Why This Matters

Automatic headline generation has practical applications in journalism, content creation, and information processing. This project helped me understand the nuances of working with large language models and the importance of proper evaluation in NLP tasks.

## Links

- [GitHub Repository](https://github.com/kubershahi/headline-generation)
- [Project Presentation](https://github.com/kubershahi/headline-generation/blob/main/project_presentation.pdf)
- [HuggingFace Finetuned Model](https://huggingface.co/kubershahi/pegasus-inshorts)
