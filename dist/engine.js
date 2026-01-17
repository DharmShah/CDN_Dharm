const COLORS = new Map([
  ["red", "red"],
  ["green", "green"],
  ["blue", "blue"],
  ["black", "black"],
  ["white", "white"]
]);

document.querySelectorAll("*").forEach(el => {
  [...el.classList].forEach(cls => {

    cls.startsWith("bg-") &&
      el.style.setProperty("--bg", COLORS.get(cls.slice(3)) || cls.slice(3)) &&
      el.classList.add("bg");

    cls.startsWith("text-") &&
      el.style.setProperty("--text", COLORS.get(cls.slice(5)) || cls.slice(5)) &&
      el.classList.add("text");

    cls.startsWith("m-") &&
      el.style.setProperty("--m", cls.slice(2)) &&
      el.classList.add("m");

    cls.startsWith("p-") &&
      el.style.setProperty("--p", cls.slice(2)) &&
      el.classList.add("p");

    cls.startsWith("fs-") &&
      el.style.setProperty("--fs", cls.slice(3)) &&
      el.classList.add("fs");

  });
});
