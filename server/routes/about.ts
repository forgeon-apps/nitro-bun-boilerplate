import { htmlShell } from '../utils/htmlShell'

export default defineEventHandler((event) => {
  const body = `
    <div class="back">
      <a href="/">← Back to home</a>
    </div>

    <div>
      <div class="eyebrow">About this playground</div>
      <h1>Nitro app wired for Forgeon.</h1>
      <p>
        This tiny service is a <strong>Nitro</strong> playground, which can be run on
        <strong>Node</strong> or <strong>Bun</strong>, used to test how Forgeon talks to
        functions: health checks, routes, timeouts, and log streaming.
      </p>
      <p>
        It's not a production app – just a safe sandbox you can deploy, poke, and
        then replace with your real service once everything feels right.
      </p>

      <ul>
        <li>Boots fast with no database configured.</li>
        <li>Has HTML endpoints for visual checks.</li>
        <li>Has JSON endpoints for programmatic checks.</li>
      </ul>
    </div>
  `

  setHeader(event, 'content-type', 'text/html; charset=utf-8')
  return htmlShell('Forgeon · About this Nitro + Bun demo', body)
})
