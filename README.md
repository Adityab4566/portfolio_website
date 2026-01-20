# 🚀 Portfolio Website - Bommidapu Aditya

A modern, high-performance portfolio website built with **Next.js 15**, **TypeScript**, and **Tailwind CSS**. Designed to showcase software engineering projects, skills, and achievements with a sleek dark-themed UI and smooth animations.


## ✨ Features

- **⚡️ Modern Tech Stack**: Built with Next.js (App Router), React 19, and TypeScript.
- **🎨 Responsive Design**: Fully responsive layout using Tailwind CSS v4.
- **✨ Smooth Animations**: Immersive interactions powered by **GSAP** and **AOS** (Animate On Scroll).
- **📧 Functional Contact Form**: Server-side email handling using **Nodemailer**.
- **🌗 Dark Mode UI**: optimized for readability and aesthetics.
- **📱 Mobile Optimized**: Mobile-first approach with custom navigation rails.

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/) & [React Icons](https://react-icons.github.io/react-icons/)
- **Animations**: [GSAP](https://greensock.com/gsap/) & [AOS](https://michalsnik.github.io/aos/)
- **Email**: [Nodemailer](https://nodemailer.com/)

## 🚀 Getting Started

### Prerequisites

Ensure you have **Node.js** (v18+ recommended) installed.

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Adityab4566/next-portfolio.git
   cd next-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Set up Environment Variables:**
   Create a `.env.local` file in the root directory and add your SMTP settings for the contact form:
   ```env
   SMTP_HOST=smtp.example.com
   SMTP_PORT=587
   SMTP_USER=your_email@example.com
   SMTP_PASS=your_password
   # Optional
   CONTACT_TO=your_personal_email@example.com
   ```

4. **Run the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000).

## 🚢 Deployment

The easiest way to deploy is using **Vercel**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAdityab4566%2Fnext-portfolio)

### Manual Deployment

```bash
npm run build
npm start
```

---

Designed & Built by **Bommidapu Aditya**.
