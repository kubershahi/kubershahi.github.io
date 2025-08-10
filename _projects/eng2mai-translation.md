---
layout: page
title: Efficient English-Maithili Translation
description: A lightweight translation model for the Maithili language using efficient fine-tuning techniques
img: assets/img/english-maithili.png
importance: 4
category: Machine Learning
---

## Overview

I'm currently working on developing a lightweight translation model for English-Maithili translation. Maithili is spoken by over 34 million people, yet there's a serious lack of good language technology support for it. My goal is to build an efficient model that doesn't compromise on accuracy while being practical enough to integrate into real web applications.

## Technical Approach

### Model Development

- **Base Model**: I started with existing pre-trained multilingual models as my foundation
- **Fine-Tuning Strategy**: I'm experimenting with both LoRA (Low-Rank Adaptation) and traditional whole model fine-tuning to see what works best
- **Optimization**: The main challenge is getting good accuracy when working with limited training data

### What I'm Tackling

- **Limited Training Data**: Finding quality English-Maithili parallel text is tough, so I'm making the most of what's available
- **Computational Constraints**: I need this to be efficient enough to actually deploy, not just a research prototype
- **Language Nuances**: English and Maithili have very different structures, so I'm spending time understanding these linguistic differences

## Progress So Far

I've managed to develop a preliminary model that shows promise:

- It's performing surprisingly well compared to much larger models
- The computational requirements are reasonable for deployment
- LoRA is proving to be a really effective approach for this low-resource language scenario
- This work is laying the groundwork for better Maithili language technology down the road

## Why This Matters

There are millions of Maithili speakers who deserve access to the same language technologies that English speakers take for granted. This project is my small contribution toward making machine translation more inclusive and accessible for underrepresented language communities.

## Links

- [GitHub Repository](https://github.com/kubershahi/eng2mai-translation)

- [Working Report](https://github.com/kubershahi/eng2mai-translation/blob/main/report.pdf)

- **HuggingFace Models:**
  - [Finetuned Model](https://huggingface.co/kubershahi/Helsinki-NLP-opus-mt-eng-mai-epoch5)
  - [LoRA Finetuned Model](https://huggingface.co/kubershahi/Helsinki-NLP-opus-mt-eng-mai-lora-epoch2)
