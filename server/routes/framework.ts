import { htmlShell } from '../utils/htmlShell'

export default defineEventHandler((event) => {
  const body = `
    <div class="back">
      <a href="/">← Back to home</a>
    </div>

    <div class="grid">
      <div>
        <div class="eyebrow">Stack</div>
        <h1>Built with Nitro & TypeScript.</h1>
        <p>
          The service uses <strong>Nitro</strong> as a lightweight server framework and
          can be deployed on Node or Bun-powered environments (like edge/serverless
          platforms). In playground mode it runs without any database or extra dependencies.
        </p>
      </div>

      <div>
        <div class="links">
          <a href="/status">
            /status <span>– health JSON</span>
          </a>
          <a href="/info">
            /info <span>– service overview</span>
          </a>
          <a href="/v1">
            /v1 <span>– API index</span>
          </a>
        </div>
      </div>
    </div>
  `

  setHeader(event, 'content-type', 'text/html; charset=utf-8')
  return htmlShell('Forgeon · Nitro + Bun stack', body)
})
