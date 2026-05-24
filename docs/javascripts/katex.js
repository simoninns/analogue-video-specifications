function renderKatex(root) {
  if (typeof katex === "undefined") {
    return;
  }

  const elements = root.querySelectorAll(".arithmatex");

  for (const element of elements) {
    if (element.dataset.katexRendered === "true") {
      continue;
    }

    const source = element.textContent.trim();
    let displayMode = false;
    let expression = source;

    if (source.startsWith("\\[") && source.endsWith("\\]")) {
      displayMode = true;
      expression = source.slice(2, -2);
    } else if (source.startsWith("\\(") && source.endsWith("\\)")) {
      expression = source.slice(2, -2);
    }

    try {
      katex.render(expression, element, {
        displayMode,
        throwOnError: true,
        strict: "error",
      });
      element.dataset.katexRendered = "true";
    } catch (error) {
      console.error("KaTeX render failed:", expression, error);
      element.dataset.katexRendered = "error";
      element.title = String(error);
    }
  }
}

function initializeKatex() {
  renderKatex(document.body);
}

if (typeof document$ !== "undefined") {
  document$.subscribe(() => {
    initializeKatex();
  });
} else {
  document.addEventListener("DOMContentLoaded", initializeKatex);
}