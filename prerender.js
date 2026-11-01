import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function runPrerender() {
  const distPath = path.resolve(__dirname, 'dist');
  const indexPath = path.join(distPath, 'index.html');
  const ssrPath = path.resolve(__dirname, 'dist-ssr', 'entry-server.js');

  if (!fs.existsSync(indexPath)) {
    throw new Error(`[PRERENDER] dist/index.html not found at ${indexPath}`);
  }
  if (!fs.existsSync(ssrPath)) {
    throw new Error(`[PRERENDER] dist-ssr/entry-server.js not found at ${ssrPath}`);
  }

  // Dynamic import of the SSR bundle
  const ssrModule = await import(`file://${ssrPath.replace(/\\/g, '/')}`);
  const appHtml = ssrModule.render();

  if (!appHtml || appHtml.length === 0) {
    throw new Error('[PRERENDER] SSR render returned empty HTML');
  }

  let html = fs.readFileSync(indexPath, 'utf-8');

  // Inject fully pre-rendered static HTML directly into #root
  if (html.includes('<div id="root"></div>')) {
    html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);
  } else if (html.includes('<div id="root">')) {
    html = html.replace(/<div id="root">[\s\S]*?<\/div>/, `<div id="root">${appHtml}</div>`);
  } else {
    throw new Error('[PRERENDER] Target container <div id="root"> not found in template');
  }

  fs.writeFileSync(indexPath, html, 'utf-8');
  console.log(`[PRERENDER SUCCESS] Pre-rendered ${appHtml.length} characters of static HTML into dist/index.html`);

  // Clean up temporary dist-ssr directory to keep output pristine
  const ssrDir = path.resolve(__dirname, 'dist-ssr');
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
    console.log('[PRERENDER] Cleaned up temporary dist-ssr directory');
  }
}

runPrerender().catch((err) => {
  console.error('[PRERENDER FATAL ERROR]', err);
  process.exit(1);
});

