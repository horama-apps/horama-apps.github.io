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
  assert.match(html, /GenAI Studio/);
  assert.match(html, /Tres apuestas/);
  assert.doesNotMatch(html, />ITP</);
  assert.doesNotMatch(html, />MED</);
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
  assert.match(html, /<svg viewBox="0 0 400 400"/);
  assert.match(html, /M200 150 244 176 200 202 156 176Z/);
  assert.match(html, /ROADMAP/);
  assert.match(html, /Image Layers multicolor/);
  assert.match(html, /Catálogo modular/);
  assert.match(html, /Ver Configurador ↓/);
  assert.match(html, /href="#configurator"/);
  assert.match(html, /id="configurator"/);
  assert.match(html, /Horama3D\/\?demo=true/);
  assert.match(html, /<iframe/);
});

test("renders GenAI Studio for businesses and content creators", async () => {
  const html = await (await render("/genai-studio/")).text();
  assert.match(html, /Tu estudio de contenido con IA/);
  assert.match(html, /Negocios y marcas/);
  assert.match(html, /Influencers/);
  assert.match(html, /Creadores de contenido/);
  assert.match(html, /Producción multiformato/);
  assert.match(html, /href="\/framewise"/);
  assert.match(html, /href="\/horama-3d"/);
});

test("renders English routes and real app versions", async () => {
  const response = await render("/en/horama-3d/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /Configure, visualize, and manufacture/);
  assert.match(html, /1\.0\.0/);
  assert.match(html, /Multicolor Image Layers/);
  assert.match(html, /Back to portfolio/);
});

test("renders Framewise with its desktop and iPhone product data", async () => {
  const response = await render("/framewise/");
  assert.equal(response.status, 200);
  const html = await response.text();
  assert.match(html, /\/apps\/framewise\/logo\.svg/);
  assert.match(html, /product-theme-dark/);
  assert.match(html, /app companion para iPhone/);
  assert.match(html, /v1\.0\.0/);
  assert.match(html, /Companion para iPhone/);
  assert.match(html, /framewise-demo\.gif/);
  assert.match(html, /Una sesión completa/);
  assert.match(html, /Criterio editorial, también desde tu iPhone\./);
  assert.match(html, /App companion para iPhone/);
  assert.match(html, /href="\/genai-studio"/);
});
