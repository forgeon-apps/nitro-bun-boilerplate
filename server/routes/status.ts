export default defineEventHandler(() => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const bunVersion = ((process as any).versions && (process as any).versions.bun) || null

  return {
    status: 'ok',
    service: 'nitro-bun-playground',
    runtime: bunVersion ? 'bun' : 'node',
    bunVersion,
    timestamp: new Date().toISOString(),
  }
})
