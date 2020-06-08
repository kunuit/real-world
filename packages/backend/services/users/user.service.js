const { DbMixin } = require('../../mixins/knexdb.mixin')
const { SERVICE_USER, TABLE_USER } = require('../../constants')


module.exports = {
  name: SERVICE_USER,
  mixins: [],
  actions: {
    getAllUsersByActive: {
      cache: {
        keys: ['active']
      },
      params: {
        active: {
          type: 'string',
          optional: true
        }
      },
      handler(ctx) {
        // ctx as same req.body - req.params
        const { active } = ctx.params
        console.log(active)
        return ctx.call(`db-${TABLE_USER}.find`, { 
          where: { actFlg: active == 'true'}
        })
      }
    }
  }

}