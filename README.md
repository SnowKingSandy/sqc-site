# ⚛️ Symbiosis Quantum Club (SQC) - V2 Website Revamp

Welcome to the frontend redesign repository for the Symbiosis Quantum Club! We are completely overhauling the user interface and user experience to reflect a modern, dynamic, and cutting-edge aesthetic. 

This repository serves as our centralized workspace to build, track, and deploy the new design system.

---

## 🚀 Getting Started Locally

This is a [Next.js](https://nextjs.org) project bootstrapped with `create-next-app` and uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load the Geist font family.

**1. Clone the repository and install dependencies:**
\`\`\`bash
git clone https://github.com/SnowKingSandy/sqc-site.git
cd sqc-site
npm install
\`\`\`

**2. Run the development server:**
\`\`\`bash
npm run dev
# or: yarn dev / pnpm dev / bun dev
\`\`\`
Open [http://localhost:3000](http://localhost:3000) in your browser. The page auto-updates as you edit `app/page.tsx`.

---

## 🗺️ New Site Architecture & Design Spec
*Reference this section to understand the new layout and required UI/UX inspirations.*

### 1. Home / Intro Page
* **Hero Section:** "Welcome to Quantum Club" featuring a dynamic typing effect (Inspiration: [edwinle.com](https://edwinle.com/)).
* **About Us:** "How we help succeed" layout (Inspiration: [dhero.studio](https://dhero.studio/)).
* **Mission & Vision:** Intersected smoothly between "About Us" and "Explore Quantum".
* **Explore Quantum:** 3-card layout (Inspiration: [lorisbukvic.graphics](https://www.lorisbukvic.graphics/works)).
* **Join Our Community:** Consolidated from the old Contact/Join Us pages. "Ready to get started" layout (Inspiration: [dhero.studio](https://dhero.studio/)).

### 2. Team Directory
* **Main Hub:** An interactive "quantum element" visual. Hovering over a team name highlights it; clicking routes to the specific team's page.
* **Team Layouts:**
  * **Head:** Full-screen feature profile.
  * **Co-Heads:** 50/50 side-by-side split layout.
  * **Members:** Custom card components (Inspiration: [Uiverse odd-fly-66](https://uiverse.io/Pravins01/odd-fly-66)).

### 3. Spotlight / Club Life (NEW)
* **Events:** "How we helped others succeed" style block (Inspiration: [dhero.studio](https://dhero.studio/)).
* **Articles:** "Transforming ideas into reality" style block (Inspiration: [dhero.studio](https://dhero.studio/)).

### 4. Global Components
* **Header:** Unchanged from V1.
* **Footer:** Modernized layout (Inspiration: [dhero.studio](https://dhero.studio/)) integrated with existing SQC links and info.
* **Chatbot:** Retained with minimal UX refinements.

---

## 🎨 UI Component Libraries & References
*We are using these libraries to build out our high-end UI components. Reference these when grabbing pre-built, type-safe code snippets:*

* **[shadcn/ui](https://ui.shadcn.com/)** – The gold standard for modern TypeScript apps. It provides copy-paste components built with Tailwind CSS and Radix UI, giving you full control over the source code.
* **[Mantine](https://mantine.dev/)** – A massive library of 100+ components and 50+ hooks. It is written in TypeScript and handles complex logic like date picking and notifications natively.
* **[Magic UI](https://magicui.design/)** – Specifically for "Design Engineers," this site offers animated components (like shiny buttons and dock bars) that are fully type-safe and built with Framer Motion.
* **[Aceternity UI](https://ui.aceternity.com/)** – Provides high-end visual effects (like background grids and aurora effects) as copy-paste TypeScript/Tailwind code snippets.
* **[Chakra UI](https://chakra-ui.com/)** – A popular choice for developers who love style props. It offers a seamless TypeScript experience with an intuitive API for building accessible layouts.
* **[Ant Design](https://ant.design/)** – The best choice for enterprise-grade dashboards. It has strict TypeScript types for complex elements like nested tables, forms, and tree structures.
* **[Headless UI](https://headlessui.com/)** – Developed by the Tailwind CSS team, these are completely unstyled components that handle all the difficult ARIA and logic requirements in TypeScript.
* **[NextUI](https://nextui.org/)** – A library that looks incredibly polished out of the box. It uses Tailwind Variants to provide a fast, type-safe development experience.
* **[Flowbite](https://flowbite.com/)** – An extensive ecosystem of components built on Tailwind CSS. It includes a specific TypeScript/React library for easy integration.
* **[HyperUI](https://www.hyperui.dev/)** – A collection of free open-source components. While it is CSS-focused, it provides the HTML/Tailwind structures that are easy to drop into your TypeScript components.

---

## 📋 Task Tracker & Roadmap
*Claim a task by opening a corresponding GitHub Issue or assigning it to yourself on our Project Board.*

### Phase 1: Global & Foundation
- [ ] Setup global CSS, Tailwind theme, and custom fonts.
- [ ] Build the new global Footer component.
- [ ] Refine Chatbot UX/UI.

### Phase 2: Home Page Revamp
- [ ] Build typing effect Hero Section.
- [ ] Build "About Us" section.
- [ ] Migrate and redesign Mission & Vision section.
- [ ] Build "Explore Quantum" 3-card grid.
- [ ] Build "Join Our Community" footer/form section (replacing old Contact/Join pages).

### Phase 3: Team Architecture
- [ ] Design interactive "quantum element" hub map.
- [ ] Build Head (Full-screen) and Co-Head (50/50) layout templates.
- [ ] Build Member Card component (Uiverse style).

### Phase 4: Spotlight / Club Life
- [ ] Setup routing for new Spotlight page.
- [ ] Build Events UI block.
- [ ] Build Articles UI block.

### Pending Review
- [ ] **FallFest Page:** Evaluate whether to keep, update, or archive.

---

## 🤝 Contribution Guidelines
1. **Find a Task:** Pick an unchecked item from the Task Tracker above.
2. **Branch Out:** Create a new branch for your feature (`git checkout -b feature/typing-hero`).
3. **Commit & Push:** Keep your commits descriptive.
4. **Pull Request:** Open a PR against the `main` branch. Request a review from a teammate before merging.

---

## 🌐 Deployment
The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new). Check out the [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.