const router = require('koa-router')()


router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string123'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})

module.exports = router
