import {
  Layers3,
  ArrowUpCircle,
  Workflow,
  CloudCog,
  LifeBuoy,
  ShieldCheck,
  Code2,
} from "lucide-react";

export const CONTACT = {
  email: "hello@sphereitsolution.com",
  phone: "+1 (555) 018-2400",
  calendlyUrl: "#", // Placeholder — replace with real Calendly link
  offices: [
    {
      city: "London",
      lines: ["1 Finsbury Avenue", "London EC2M 2PF", "United Kingdom"],
    },
    {
      city: "Singapore",
      lines: ["80 Robinson Road", "Singapore 068898", "Singapore"],
    },
  ],
};

export const SERVICES = [
  {
    slug: "architecture",
    icon: Layers3,
    title: "T24 / Transact Architecture",
    short:
      "Target-state architecture and solution design that scales with your bank.",
    description:
      "We design resilient, future-ready Temenos T24 / Transact architectures — from solution blueprints and environment strategy to performance engineering and high-availability design.",
    outcomes: [
      "Reference architecture aligned to Temenos best practice",
      "Scalable, resilient and audit-ready core",
      "Clear roadmap from current to target state",
    ],
  },
  {
    slug: "development",
    icon: Code2,
    title: "T24 / Temenos Development",
    short:
      "Local development to extend your core with new functionality and customisations.",
    description:
      "We build local Temenos developments on top of your out-of-the-box core — new functionality, bespoke customisations, product and API extensions using L3 development, the Temenos Extensibility Framework and Design Studio, all delivered in an upgrade-safe way.",
    outcomes: [
      "New capabilities beyond out-of-the-box functionality",
      "Upgrade-safe, standards-aligned customisations",
      "Faster delivery of bank-specific requirements",
    ],
  },
  {
    slug: "migration",
    icon: ArrowUpCircle,
    title: "Migration / Upgrade",
    short: "De-risked release upgrades and data migrations, delivered on time.",
    description:
      "Move to the latest Transact releases and migrate data with confidence. Our proven upgrade factory minimises downtime, protects data integrity and keeps regulators comfortable.",
    outcomes: [
      "Predictable, low-risk upgrade path",
      "Automated data validation and reconciliation",
      "Minimal business disruption",
    ],
  },
  {
    slug: "integration",
    icon: Workflow,
    title: "Integration / API",
    short: "Connect Temenos to your ecosystem with clean, governed APIs.",
    description:
      "We build robust integrations between Temenos and payments, channels, CRM and third-party fintech using event-driven design, the Temenos Integration Framework and modern API gateways.",
    outcomes: [
      "Real-time, event-driven integration",
      "Reusable, well-governed API layer",
      "Faster time-to-market for new products",
    ],
  },
  {
    slug: "cloud",
    icon: CloudCog,
    title: "Cloud Modernization",
    short: "Take Temenos to the cloud — securely and cost-effectively.",
    description:
      "Modernize your core on AWS, Azure or GCP with containerisation, infrastructure-as-code and automated pipelines, while meeting the security and compliance demands of financial services.",
    outcomes: [
      "Elastic, cloud-native core banking",
      "Lower total cost of ownership",
      "Automated, compliant deployments",
    ],
  },
  {
    slug: "support",
    icon: LifeBuoy,
    title: "Managed Support",
    short: "24/7 application support and continuous improvement.",
    description:
      "Keep your core running with SLA-backed managed services — incident management, release management, monitoring and proactive optimisation handled by Temenos specialists.",
    outcomes: [
      "SLA-backed L2 / L3 support",
      "Proactive monitoring and tuning",
      "Continuous, predictable improvement",
    ],
  },
  {
    slug: "qa",
    icon: ShieldCheck,
    title: "Testing / QA",
    short: "Automated, regulatory-grade quality assurance.",
    description:
      "Protect every release with a comprehensive QA practice — functional, regression, performance and security testing, backed by Temenos test automation accelerators.",
    outcomes: [
      "Automated regression coverage",
      "Performance validated at scale",
      "Confident, defect-free go-lives",
    ],
  },
];

export const STATS = [
  { value: "15+", label: "Years in core banking" },
  { value: "40+", label: "Temenos programmes delivered" },
  { value: "12", label: "Countries served" },
  { value: "99.9%", label: "Support SLA attainment" },
];

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1653299832314-5d3dc1e5a83c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzMzV8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwc3BoZXJlJTIwYmx1ZXxlbnwwfHx8fDE3ODE0NjQyNjd8MA&ixlib=rb-4.1.0&q=85",
  team: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NTYxODd8MHwxfHNlYXJjaHwyfHxidXNpbmVzcyUyMHRlYW0lMjBjb3Jwb3JhdGUlMjBtZWV0aW5nfGVufDB8fHx8MTc4MTQ2NDI2N3ww&ixlib=rb-4.1.0&q=85",
  architecture:
    "https://images.unsplash.com/photo-1617761141732-d481912af1a9?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGFyY2hpdGVjdHVyZSUyMGJsdWUlMjBtb2Rlcm58ZW58MHx8fHwxNzgxNDY0MjY3fDA&ixlib=rb-4.1.0&q=85",
  data: "https://images.unsplash.com/photo-1644088379091-d574269d422f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGRhdGElMjBuZXR3b3JrJTIwYmx1ZXxlbnwwfHx8fDE3ODE0NjQyODF8MA&ixlib=rb-4.1.0&q=85",
  security:
    "https://images.unsplash.com/photo-1728756666032-d0b5552b6384?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxzZWN1cml0eSUyMHNoaWVsZCUyMHRlY2hub2xvZ3klMjBibHVlfGVufDB8fHx8MTc4MTQ2NDI4MXww&ixlib=rb-4.1.0&q=85",
};
