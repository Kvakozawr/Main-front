async function include(selector, url) {
  const el = document.querySelector(selector);
  if (!el) return;

  const res = await fetch(url);
  el.innerHTML = await res.text();
}

include('#header', '/pages/components/header.html');
include('#footer', '/pages/components/footer.html');