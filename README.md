<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.1-black?style=for-the-badge&logo=next.js" alt="Next.js">
  <img src="https://img.shields.io/badge/React-19.2.3-61DAFB?style=for-the-badge&logo=react" alt="React">
  <img src="https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript">
  <img src="https://img.shields.io/badge/Tailwind_CSS-4.x-38B2AC?style=for-the-badge&logo=tailwind-css" alt="Tailwind CSS">
  <img src="https://img.shields.io/badge/Google_Gemini-AI-4285F4?style=for-the-badge&logo=google" alt="Gemini AI">
</p>

<h1 align="center">🎨 SchemanticAI</h1>

<p align="center">
  <strong>Transform rough sketches into professional diagrams with AI</strong>
</p>

<p align="center">
  An intelligent whiteboard application that uses Google Gemini to refine hand-drawn sketches into clean, publication-ready diagrams.
</p>

<p align="center">
  <strong>Built by <a href="https://github.com/Abhishek-Sonje"> <a href="https://github.com/shreyas">Shreyas</a></strong>
</p>

---

## 🎥 Demo





https://github.com/user-attachments/assets/69496cf1-7e2d-4a32-bc0d-b29b8c92ade3





---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 🖌️ **Interactive Whiteboard** | Full-featured drawing canvas powered by tldraw with support for freehand drawing, shapes, arrows, and more |
| 🤖 **AI-Powered Refinement** | Leverages Google Gemini 2.5 Flash to transform rough sketches into professional diagrams |
| 🎤 **Voice Input** | Describe your diagram intent using voice commands with automatic idle detection |
| ⚡ **Quick Enhance** | One-click enhancement to instantly improve any sketch |
| 🎯 **Selection-Aware** | Refine specific parts of your canvas by selecting shapes before generating |
| ⌨️ **Keyboard Shortcuts** | Accept suggestions with `Tab`, reject with `Esc` for rapid iteration |
| 🎨 **Glass Morphism UI** | Modern, sleek interface with smooth animations powered by Framer Motion |

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or **Bun** runtime
- **Google Gemini API Key** ([Get one here](https://aistudio.google.com/app/apikey))

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/SchemanticAI.git
cd SchemanticAI/frontend

# Install dependencies
npm install
# or
bun install
```

### Environment Setup

Create a `.env.local` file in the `frontend` directory:

```env
GOOGLE_GENERATIVE_AI_API_KEY=your_api_key_here
```

### Run Development Server

```bash
npm run dev
# or
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📖 How to Use

<table>
<tr>
<td width="60">

**1️⃣**

</td>
<td>

**Draw** — Sketch your diagram idea on the whiteboard

</td>
</tr>
<tr>
<td>

**2️⃣**

</td>
<td>

**Describe** — Type or speak what your diagram represents

</td>
</tr>
<tr>
<td>

**3️⃣**

</td>
<td>

**Generate** — Click the `+` button or use the ✨ Quick Enhance

</td>
</tr>
<tr>
<td>

**4️⃣**

</td>
<td>

**Review** — See the AI-generated diagram in the preview panel

</td>
</tr>
<tr>
<td>

**5️⃣**

</td>
<td>

**Accept** — Press `Tab` to replace your sketch with the refined diagram

</td>
</tr>
</table>

### Voice Input 🎤

1. Click the **microphone button** to start listening
2. Describe your diagram verbally
3. Stop speaking for 4.5 seconds or click the mic again
4. The AI automatically generates based on your voice description

---

## 🏗️ Architecture

```mermaid
graph TD
    A[User Draws Sketch] --> B[tldraw Canvas]
    B --> C[Export to PNG]
    C --> D["/api/complete-diagram"]
    D --> E["Google Gemini 2.5 Flash"]
    E --> F[Generated PNG]
    F --> G[Preview Panel]
    G -->|Tab| H[Accept & Replace]
    G -->|Esc| I[Reject & Keep Original]
```

---

## 📂 Project Structure

```
frontend/
├── app/
│   ├── api/
│   │   └── complete-diagram/
│   │       └── route.ts        # AI processing endpoint
│   ├── page.tsx                # Main application page
│   ├── layout.tsx              # Root layout with metadata
│   └── globals.css             # Global styles & theme
├── components/
│   ├── ui/                     # Reusable UI components
│   │   └── button.tsx          # Button component with variants
│   ├── whiteboard.tsx          # tldraw canvas wrapper
│   └── intent-input.tsx        # Text input for diagram intent
├── lib/
│   └── utils.ts                # Utility functions (cn helper)
└── types/
    └── speech-recognition.d.ts # TypeScript declarations
```

---

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 16 (App Router) |
| **UI Library** | React 19 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Whiteboard** | tldraw v4 |
| **AI Integration** | Vercel AI SDK + Google Gemini |
| **Components** | Custom + shadcn/ui patterns |

---

## 🔌 API Reference

### `POST /api/complete-diagram`

Generates a refined diagram from a sketch and text description.

**Request Body:**

```json
{
  "prompt": "A flowchart showing user authentication process",
  "image_data": "base64_encoded_png_data"
}
```

**Response:**

```json
{
  "image_data": "base64_encoded_generated_png"
}
```

**Error Response:**

```json
{
  "error": "Error message",
  "details": "Additional error details"
}
```

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Tab` | Accept the AI suggestion |
| `Esc` | Reject the AI suggestion |
| *tldraw shortcuts* | All standard tldraw shortcuts work |

---

## 🧩 Key Components

### `<Whiteboard />`
The core canvas component wrapping tldraw. Handles:
- Canvas mounting and export functionality
- Selection-aware image export
- AI suggestion acceptance (Tab key)
- Drawing activity detection for voice input

### `<IntentInput />`
A minimal text input for describing diagram intent with:
- 120 character limit
- Clean, borderless design
- Submit on Enter

---

## 📦 Scripts

```bash
# Development server with hot reload
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Run ESLint
npm run lint
```

---

## 🔧 Troubleshooting

<details>
<summary><strong>❌ API Key Issues</strong></summary>

- Ensure `.env.local` is in the `frontend` directory
- Restart the dev server after modifying environment variables
- Verify your API key is valid at [Google AI Studio](https://aistudio.google.com/)
</details>

<details>
<summary><strong>❌ LightningCSS Binary Error (Windows)</strong></summary>

If you see an error about `lightningcss.win32-x64-msvc.node`:

```powershell
npm install lightningcss-win32-x64-msvc
Copy-Item "node_modules\lightningcss-win32-x64-msvc\lightningcss.win32-x64-msvc.node" "node_modules\lightningcss\lightningcss.win32-x64-msvc.node"
Remove-Item -Recurse -Force .next
npm run dev
```
</details>

<details>
<summary><strong>❌ No Image Generated</strong></summary>

- Make sure you've drawn something on the canvas
- Check that your Gemini API key has access to image generation models
- Look at browser console and terminal for detailed error messages
</details>
---

<p align="center">
  Made with ❤️ using Next.js, tldraw, and Google Gemini
</p>
