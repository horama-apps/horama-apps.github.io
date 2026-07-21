import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);
  return worker.fetch(new Request(`http://localhost${pathname}`, { headers: { accept: "text/html" } }), {
    ASSETS: { fetch: async () => new Response("Not found", { status: 404 }) },
  }, { waitUntil() {}, passThroughOnException() {} });
}

test("renders the Horama portfolio from YAML", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Software con futuro/);
  assert.match(html, /Framewise/);
  assert.match(html, /Horama 3D/);
  assert.match(html, /No buscamos solo inversión/);
  assert.match(html, /formsubmit\.co\/horama\.3d@gmail\.com/);
  assert.match(html, /name="collaboration_type"/);
  assert.doesNotMatch(html, /codex-preview|SkeletonPreview/);
});

test("renders product routes with roadmap and version", async () => {
  const response = await render("/horama-3d/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Configura, visualiza y fabrica/);
  assert.match(html, /1\.0\.0/);
  assert.match(html, /ROADMAP/);
  assert.match(html, /Image to STL con ITP/);
  assert.match(html, /servicio STP/);
  assert.match(html, /Ver Configurador ↓/);
  assert.match(html, /href="#configurator"/);
  assert.match(html, /id="configurator"/);
  assert.match(html, /Horama3D\/\?demo=true/);
  assert.match(html, /<iframe/);
});

test("renders cross-product references for STP and ITP", async () => {
  const stpHtml = await (await render("/stp/")).text();
  assert.match(stpHtml, /PRODUCTOS CONECTADOS/);
  assert.match(stpHtml, /href="\/horama-3d"/);

  const itpHtml = await (await render("/itp/")).text();
  assert.match(itpHtml, /href="\/horama-3d"/);
  assert.match(itpHtml, /href="\/stp"/);
  assert.match(itpHtml, /href="\/framewise"/);
  assert.doesNotMatch(itpHtml, /class="support-arrow"/);
});

test("renders English routes and real app versions", async () => {
  const response = await render("/en/stp/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /3D transformations ready for production/);
  assert.match(html, /1\.0\.1/);
  assert.match(html, /Back to portfolio/);
  assert.match(html, /href="\/stp"/);
});

test("renders Framewise with its real brand and privacy-first product data", async () => {
  const response = await render("/framewise/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /\/apps\/framewise\/logo\.svg/);
  assert.match(html, /product-theme-dark/);
  assert.match(html, /Horama no recibe, almacena/);
  assert.match(html, /v1\.0\.0/);
  assert.match(html, /Edición fiel y no destructiva/);
  assert.match(html, /framewise-demo\.gif/);
  assert.match(html, /Una sesión completa/);
  assert.match(html, /Privacidad local\. Criterio editorial\./);
  assert.match(html, /Cero uploads/);
  assert.match(html, /href="\/itp"/);
  assert.doesNotMatch(html, /ComfyUI/);
});
