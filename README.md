Dharm Utility CSS

A lightweight **CDN-based utility CSS framework** that lets you style any website using simple utility classes powered by **CSS variables**.  
No build tools. No configuration. Just link and start styling.

---

## 🚀 Quick Start (Boilerplate)

Copy and paste this into any HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8" />
  <title>Dharm Utility CSS</title>

  <!-- Utility CSS -->
  <link
    rel="stylesheet"
    href="https://cdn.jsdelivr.net/gh/DharmShah/CDN_Dharm@main/dist/test.css"
  />
</head>

<body>

  <div
    class="bg text p fs"
    style="
      --bg: black;
      --text: white;
      --p: 20px;
      --fs: 18px;
    "
  >
    Dharm Utility CSS is working 🚀
  </div>

  <!-- Utility Engine -->
  <script
    src="https://cdn.jsdelivr.net/gh/DharmShah/CDN_Dharm@v1.0.4/dist/engine.js"
    defer
  ></script>

</body>
</html>
```

---

## ✨ What This Gives You

- Utility-first CSS via CDN  
- Runtime styling using CSS variables  
- No build step (unlike Tailwind)  
- Works with plain HTML  
- Easy to learn and flexible  

---

## 📦 CDN Links

### CSS
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/DharmShah/CDN_Dharm@main/dist/test.css">
```

### JavaScript Engine
```html
<script src="https://cdn.jsdelivr.net/gh/DharmShah/CDN_Dharm@v1.0.4/dist/engine.js" defer></script>
```

---

## 🧠 Basic Syntax

```html
<div
  class="bg text p fs"
  style="
    --bg: red;
    --text: white;
    --p: 16px;
    --fs: 20px;
  "
>
  Styled using utilities
</div>
```

- Classes define **what**
- CSS variables define **how much**

---

## 🧪 Best Use Cases

- Learning utility-based CSS
- Rapid prototyping
- Documentation websites
- Internal tools
- UI/UX experiments

---

## 📘 Documentation

Check the documentation page in this repository to explore:
- Colors
- Margin
- Padding
- Font sizes
- Flex layouts

---

## 🔒 Production Tip

For production usage, prefer **versioned tags** instead of `@main`:

```html
@v1.0.4
```

---

## ❤️ Philosophy

> Simple utilities  
> Real CSS  
> Zero build tools
