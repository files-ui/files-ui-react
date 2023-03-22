export const redirect = (to = "") => {
  console.log("redirectredirect", to);
  if (to.length === 0) return;
  const anchor = document.createElement("a");
  anchor.href = to;
  anchor.target = "_blank";
  anchor.rel = "noopener noreferrer";
  anchor.style.display = "none";
  document.body.appendChild(anchor);
  anchor.click();
  document.body.removeChild(anchor);
};
