export type Project = {
  id: string;
  title: string;
  description: string;
  tags: string[];
  github_url: string | null;
  demo_url: string | null;
  featured: boolean;
};

// Edit this list directly to add, remove, or reorder projects.
export const projects: Project[] = [
  {
    id: "goniaa",
    title: "Goniaa",
    description:
      "AI-powered fashion e-commerce ecosystem — storefront, an AI Brand Manager dashboard, and a companion mobile app. Built solo end-to-end.",
    tags: ["Next.js 15", "TypeScript", "Supabase", "Groq API", "Expo"],
    github_url: null,
    demo_url: null,
    featured: true,
  },
  {
    id: "medical-imaging",
    title: "Blood Smear Classification",
    description:
      "Medical image classification on the AneRBC dataset — custom CNNs plus transfer learning (MobileNetV2, ResNet18, DenseNet121) with Grad-CAM explainability. Best result: 82.7% (DenseNet121).",
    tags: ["PyTorch", "CNN", "Transfer Learning", "Grad-CAM"],
    github_url: "https://github.com/nimraa9090/ANN-DL-PRJ",
    demo_url: null,
    featured: true,
  },
  {
    id: "rl-agents",
    title: "Reinforcement Learning Agents",
    description:
      "DQN and Q-learning agents trained on CartPole, Lunar Lander, and FrozenLake — from tabular methods to deep RL.",
    tags: ["Python", "DQN", "Q-Learning", "Gymnasium"],
    github_url: "https://github.com/nimraa9090",
    demo_url: null,
    featured: false,
  },
  {
    id: "nlp-detection",
    title: "Fake News & Spam Detection",
    description:
      "NLP pipelines for fake news and spam classification, plus a text summarization notebook — classic preprocessing through model comparison.",
    tags: ["NLP", "scikit-learn", "Text Classification"],
    github_url: "https://github.com/nimraa9090",
    demo_url: null,
    featured: false,
  },
];
