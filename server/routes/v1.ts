export default defineEventHandler(() => {
  return {
    message: 'Nitro + Bun API v1 index',
    service: 'nitro-bun-playground',
    routes: {
      html: ['/', '/info', '/about', '/framework'],
      health: ['/status'],
      api: ['/v1'],
    },
  }
})
