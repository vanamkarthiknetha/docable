# Docable

A modern document editor built with Next.js and TipTap, featuring a clean and intuitive interface.

## 🚀 Features

### Text Formatting
- **Basic Formatting**: Bold, italic, and code formatting
- **Headings**: Support for H1 and H2 headings
- **Lists**: Bullet list support for organized content

### Block Support
- **Paragraphs**: Standard text blocks
- **Headings**: Hierarchical heading structure (H1, H2)
- **Lists**: Bullet point lists for better content organization

### Smart Features
- **Slash Commands**: Quick access menu (/) for inserting blocks and formatting
- **Markdown Export**: Export your documents to Markdown format (Optional)

### Technical Features
- Modern UI with Tailwind CSS
- Real-time editing capabilities
- Responsive design for all devices

## 🛠️ Setup Instructions

1. Clone the repository:
```bash
git clone https://github.com/vanamkarthiknetha/docable.git
cd docable
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## 🏗️ Project Structure

- `/app` - Next.js app directory containing pages and layouts
- `/components` - Reusable React components
- `/constants` - Application constants and configuration
- `/public` - Static assets

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.2
- **Editor**: TipTap with Markdown support
- **Styling**: Tailwind CSS
- **Language**: JavaScript/React

## 🧠 Approach & Decisions

I used Tiptap v2 with React to build a minimal, Notion-style editor that supports basic formatting and block-level editing. My goal was to implement core writing features in a clean and modular way.

### ✅ Features Implemented
- **Basic text formatting**: bold, italic, code, and headings
- **Block support**: paragraphs, headings (H1, H2), and bullet lists
- **Slash command menu**: triggered by /, allowing users to insert blocks easily
- **Markdown export**: implemented as an optional feature for exporting editor content

### 🔧 Key Decisions
- **Tiptap + StarterKit**: Used Tiptap's StarterKit to quickly integrate common editing functionality and ensure stability
- **Slash Menu with 3rd-party Package**: Integrated a third-party Tiptap-compatible package to simplify the implementation and provide a clean dropdown UI
- **Modular Design**: Components were separated for better code organization, making it easier to extend functionality in the future
- **Minimal Styling**: Focused on functionality over visual design, keeping the interface simple and distraction-free, as per the task instructions

This approach allowed me to meet all the core requirements while also adding markdown export support as a bonus feature.

