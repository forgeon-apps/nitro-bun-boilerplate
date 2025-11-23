import { htmlShell } from '../utils/htmlShell'

export default defineEventHandler((event) => {
  const body = `
    <div class="back">
      <a href="/">← Back to home</a>
    </div>

    <div class="grid">
      <div>
        <div class="eyebrow">Service info</div>
        <h1>nitro-bun-playground · Forgeon-ready microservice</h1>
        <p>
          This instance exposes a couple of HTML & JSON endpoints so you can
          quickly verify that traffic is reaching the runtime correctly.
        </p>

        <ul>
          <li>Check that the function boots and responds.</li>
          <li>Wire health checks to <code>/status</code>.</li>
          <li>Inspect logs and latency from Forgeon.</li>
        </ul>
      </div>

      <div>
        <div class="links">
          <a href="/">
            / <span>– landing page</span>
          </a>
          <a href="/v1">
            /v1 <span>– JSON index for API v1</span>
          </a>
          <a href="https://forgeon.io" target="_blank" rel="noreferrer">
            forgeon.io <span>– learn more about the platform</span>
          </a>
        </div>
      </div>
    </div>
  `

  setHeader(event, 'content-type', 'text/html; charset=utf-8')
  return htmlShell('Forgeon · Nitro + Bun · Info', body)
})
