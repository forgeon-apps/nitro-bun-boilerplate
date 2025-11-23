import { htmlShell } from '../utils/htmlShell'

export default defineEventHandler((event) => {
  const bunVersion =
    // Bun when running on Bun, undefined on Node
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ((process as any).versions && (process as any).versions.bun) || 'node'

  const body = `
    <div class="grid">
      <div>
        <div class="eyebrow">Forgeon · Nitro + Bun playground</div>
        <h1>Nitro boilerplate, ready for deploy tests.</h1>
        <p>
          This service is a small <strong>Nitro</strong> app you can use to test routing,
          health checks, JSON APIs, and HTML responses inside Forgeon or on your
          local machine. In some environments it runs on <strong>Bun</strong> instead of Node.
        </p>

        <div class="pill-row">
          <div class="pill"><strong>GET</strong> /</div>
          <div class="pill">Nitro · Node/Bun</div>
          <div class="pill">Playground mode (no DB required)</div>
        </div>
      </div>

      <div>
        <div class="links">
          <a href="/info">
            /info
            <span>– service overview & Forgeon context</span>
          </a>
          <a href="/about">
            /about
            <span>– what this boilerplate is for</span>
          </a>
          <a href="/framework">
            /framework
            <span>– stack: Nitro, TypeScript, Bun</span>
          </a>
          <a href="/status">
            /status
            <span>– JSON health endpoint</span>
          </a>
          <a href="/v1">
            /v1
            <span>– JSON API index</span>
          </a>
        </div>
      </div>
    </div>

    <div class="meta">
      <span>Try deploying this to Forgeon as a simple Nitro + Bun playground.</span>
      <span class="badge">runtime: ${bunVersion}</span>
    </div>
  `

  setHeader(event, 'content-type', 'text/html; charset=utf-8')
  return htmlShell('Forgeon Nitro + Bun playground', body)
})
