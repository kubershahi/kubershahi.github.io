// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-projects",
          title: "projects",
          description: "Engineering solutions in Applied Machine Learning and Software Architecture, featuring task-specific ML models and interactive full-stack web applications.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-research",
          title: "research",
          description: "Graduate and undergraduate research in machine learning and security, spanning medical image analysis at UCSD and privacy-preserving ML, adversarial attacks, and applied cryptography at Ashoka University.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research/";
          },
        },{id: "nav-cv",
          title: "cv",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "news-wrapped-up-my-machine-learning-internship-at-melio-where-i-rebuilt-ml-training-infrastructure-for-blood-diagnostic-time-series-classification",
          title: 'Wrapped up my Machine Learning internship at Melio 🎉, where I rebuilt ML...',
          description: "",
          section: "News",},{id: "news-started-investigating-uncertainty-quantification-for-medical-image-registration-at-ucsd-s-biomedical-image-analysis-group",
          title: 'Started investigating uncertainty quantification for medical image registration 🧬 at UCSD’s Biomedical Image...',
          description: "",
          section: "News",},{id: "news-released-findings-from-our-study-on-llm-agent-planning-under-deception-evaluating-four-agent-architectures-across-deceptive-text-environments",
          title: 'Released findings from our study on LLM agent planning under deception 🤖, evaluating...',
          description: "",
          section: "News",},{id: "projects-age-and-gender-detection",
          title: 'Age and Gender Detection',
          description: "CNN models for age and gender classification in facial images using deep learning optimization techniques.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/age-gender-detection/";
            },},{id: "projects-acert-academic-credential-verification",
          title: 'aCERT - Academic Credential Verification',
          description: "A React-based web application for secure academic credential verification using blockchain technology",
          section: "Projects",handler: () => {
              window.location.href = "/projects/certificate-verification/";
            },},{id: "projects-synthesizing-dfas-using-rnns",
          title: 'Synthesizing DFAs using RNNs',
          description: "RNN-based model to automate the synthesis of Deterministic Finite Automata for formal language representation.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/dfas-rnn/";
            },},{id: "projects-efficient-english-maithili-translation",
          title: 'Efficient English-Maithili Translation',
          description: "A lightweight translation model for the Maithili language using efficient fine-tuning techniques",
          section: "Projects",handler: () => {
              window.location.href = "/projects/eng2mai-translation/";
            },},{id: "projects-gamified-kanban-board",
          title: 'Gamified Kanban Board',
          description: "A collaborative full-stack gamified task management app built with a team of 8, featuring reward-based incentives and CI/CD workflows.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/gamified-kanban/";
            },},{id: "projects-headline-generation",
          title: 'Headline Generation',
          description: "Fine-tuned Google&#39;s Pegasus LLM for generating concise and accurate headlines from news articles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/headline-generation/";
            },},{id: "projects-llm-agent-planning-under-deception",
          title: 'LLM Agent Planning under Deception',
          description: "A collaborative effort to evaluate LLM agent architectures in deceptive text environments to understand the limits of multi-step planning and reasoning.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/llm-agents/";
            },},{id: "research-applied-cryptography",
          title: 'Applied Cryptography',
          description: "Independent study examining security vulnerabilities in OpenPGP and S/MIME email encryption, with analysis of real-world attacks on major email clients and proposed countermeasures.",
          section: "Research",handler: () => {
              window.location.href = "/research/applied-cryptography/";
            },},{id: "research-ppml-protocol-design-and-evaluation",
          title: 'PPML Protocol Design and Evaluation',
          description: "Research internship at Mphasis Lab implementing and evaluating PPML protocols including SecureML and BLAZE, and co-developing an optimized protocol for business-specific applications.",
          section: "Research",handler: () => {
              window.location.href = "/research/mphasis-ppml/";
            },},{id: "research-privacy-preserving-neural-network-training",
          title: 'Privacy-Preserving Neural Network Training',
          description: "Capstone project researching secure multi-party computation techniques to enable privacy-preserving neural network training across distributed systems using SecureNN protocols.",
          section: "Research",handler: () => {
              window.location.href = "/research/ppnn-capstone/";
            },},{id: "research-secure-machine-learning",
          title: 'Secure Machine Learning',
          description: "Independent study investigating the impact of adversarial attacks including data poisoning and model evasion on ML model reliability and performance.",
          section: "Research",handler: () => {
              window.location.href = "/research/secureml/";
            },},{id: "research-uncertainty-quantification-for-medical-image-registration",
          title: 'Uncertainty Quantification for Medical Image Registration',
          description: "Investigating methods to assess medical image registration quality through uncertainty quantification and its relation to registration error.",
          section: "Research",handler: () => {
              window.location.href = "/research/uncertainty-quantification/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%6B%73%68%61%68%69@%75%63%73%64.%65%64%75", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/kubershahi", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/kubershahi", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
