# Ajay Kumar Yadav — Portfolio

Built with **React + Vite + Tailwind CSS**

## 🚀 Getting Started

```bash
npm install
npm run dev
```
Then open http://localhost:5173

## 🔧 Build for Production
```bash
npm run build
npm run preview
```

## 🌓 Dark / Light Theme
Click the Sun/Moon toggle in the navbar. Theme preference is saved to localStorage.

## 🖼 Adding Certificate Images & Links
Open `src/components/Certifications.jsx` and fill in the `certs` array:
```js
{
  title: 'SQL — Beginner to Advanced...',
  image: 'https://i.ibb.co/xxx/your-cert-image.jpg',  // ← paste image URL
  link:  'https://codebasics.io/certificate/xxx',       // ← paste cert link
}
```
**Free image hosting:** https://imgbb.com (upload → get direct link)

## 📁 Project Structure
```
src/
  App.jsx               ← root component
  context/ThemeContext  ← dark/light theme logic
  hooks/useScrollReveal ← scroll animation hook
  components/
    Navbar, Hero, About, Skills,
    Experience, Projects, Certifications,
    Achievements, Contact, Footer
```

## 🎨 Fonts
- Headings: **Sora** (Google Fonts)
- Body: **Manrope** (Google Fonts)
