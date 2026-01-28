const DEFAULT_UNIT = "px";

/* =========================
   PROPERTY RULES
========================= */
const RULES = {
  // margin
  m: "margin",
  ml: "margin-left",
  mr: "margin-right",
  mt: "margin-top",
  mb: "margin-bottom",

  // padding
  p: "padding",
  pl: "padding-left",
  pr: "padding-right",
  pt: "padding-top",
  pb: "padding-bottom",

  // colors
  bg: "background-color",
  text: "color",

  // misc
  cursor: "cursor",
  gap: "gap",
};

/* =========================
   PRESETS
========================= */
const RADIUS = {
  round: "6px",
  "round-sm": "4px",
  "round-lg": "12px",
};

const SHADOW = {
  shadow: "0 4px 12px rgba(0,0,0,0.15)",
  "shadow-lg": "0 10px 30px rgba(0,0,0,0.25)",
};

/* =========================
   LAYOUT MAPS
========================= */
const DISPLAY = {
  flex: "flex",
  grid: "grid",
  block: "block",
  inline: "inline-block",
  hidden: "none",
};

const FLEX = {
  "flex-row": ["flexDirection", "row"],
  "flex-col": ["flexDirection", "column"],

  "justify-start": ["justifyContent", "flex-start"],
  "justify-center": ["justifyContent", "center"],
  "justify-between": ["justifyContent", "space-between"],

  "items-start": ["alignItems", "flex-start"],
  "items-center": ["alignItems", "center"],
};

/* =========================
   ENGINE
========================= */
document.querySelectorAll("*").forEach(el => {
  for (const cls of el.classList) {

    /* -------- DISPLAY -------- */
    if (DISPLAY[cls]) {
      el.style.display = DISPLAY[cls];
      continue;
    }

    /* -------- FLEX -------- */
    if (FLEX[cls]) {
      const [prop, value] = FLEX[cls];
      el.style[prop] = value;
      continue;
    }

    /* -------- RADIUS -------- */
    if (RADIUS[cls]) {
      el.style.borderRadius = RADIUS[cls];
      continue;
    }

    /* -------- SHADOW -------- */
    if (SHADOW[cls]) {
      el.style.boxShadow = SHADOW[cls];
      continue;
    }

    /* -------- BRACKET SYNTAX -------- */
    if (cls.includes("[") && cls.endsWith("]")) {
      const key = cls.slice(0, cls.indexOf("["));
      const value = cls.slice(cls.indexOf("[") + 1, -1);

      // spacing, colors, cursor, gap
      if (RULES[key]) {
        el.style[RULES[key]] = value;
      }

      // radius[20px]
      if (key === "round") {
        el.style.borderRadius = value;
      }

      // shadow[...]
      if (key === "shadow") {
        el.style.boxShadow = value;
      }

      // grid-cols[repeat(3,1fr)]
      if (key === "grid-cols") {
        el.style.gridTemplateColumns = value;
      }

      // grid-rows[auto 1fr]
      if (key === "grid-rows") {
        el.style.gridTemplateRows = value;
      }

      continue;
    }

    /* -------- DASH SYNTAX -------- */
    if (cls.includes("-")) {
      const [key, raw] = cls.split("-", 2);

      // spacing / colors / cursor / gap
      if (RULES[key]) {
        el.style[RULES[key]] =
          isNaN(raw) ? raw : raw + DEFAULT_UNIT;
        continue;
      }

      // grid-cols-3 → repeat(3,1fr)
      if (key === "grid" && raw.startsWith("cols")) {
        const n = raw.split("cols")[1];
        el.style.gridTemplateColumns = `repeat(${n},1fr)`;
      }

      // grid-rows-2
      if (key === "grid" && raw.startsWith("rows")) {
        const n = raw.split("rows")[1];
        el.style.gridTemplateRows = `repeat(${n},1fr)`;
      }
    }
  }
});
