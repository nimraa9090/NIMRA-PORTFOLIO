import { Project } from "./supabase";

// Shown until real rows exist in Supabase, or if Supabase isn't configured yet.
// Edit these directly, or better — insert rows into the `projects` table
// (see supabase/schema.sql) so you can manage this from Supabase Studio
// without redeploying.
export const fallbackProjects: Project[] = [
  {
    id: "goniaa",
    title: "Goniaa",
    description:
      "AI-powered fashion e-commerce ecosystem — storefront, an AI Brand Manager dashboard, and a companion mobile app. Built solo end-to-end.",
    tags: ["Next.js 15", "TypeScript", "Supabase", "Groq API", "Expo"],
    github_url: null,
    demo_url: null,
    image_url: null,
    featured: true,
    sort_order: 0,
    created_at: new Date().toISOString(),
  },
  {
    id: "medical-imaging",
    title: "Blood Smear Classification",
    description:
      "Medical image classification on the AneRBC dataset — custom CNNs plus transfer learning (MobileNetV2, ResNet18, DenseNet121) with Grad-CAM explainability. Best result: 82.7% (DenseNet121).",
    tags: ["PyTorch", "CNN", "Transfer Learning", "Grad-CAM"],
    github_url: "https://github.com/nimraa9090/ANN-DL-PRJ",
    demo_url: null,
    image_url: null,
    featured: true,
    sort_order: 1,
    created_at: new Date().toISOString(),
  },
  {
    id: "rl-agents",
    title: "Reinforcement Learning Agents",
    description:
      "DQN and Q-learning agents trained on CartPole, Lunar Lander, and FrozenLake — from tabular methods to deep RL.",
    tags: ["Python", "DQN", "Q-Learning", "Gymnasium"],
    github_url: "https://github.com/nimraa9090",
    demo_url: null,
    image_url: null,
    featured: false,
    sort_order: 2,
    created_at: new Date().toISOString(),
  },
  {
    id: "nlp-detection",
    title: "Fake News & Spam Detection",
    description:
      "NLP pipelines for fake news and spam classification, plus a text summarization notebook — classic preprocessing through model comparison.",
    tags: ["NLP", "scikit-learn", "Text Classification"],
    github_url: "https://github.com/nimraa9090",
    demo_url: null,
    image_url: null,
    featured: false,
    sort_order: 3,
    created_at: new Date().toISOString(),
  },
];
