const bcrypt = require('bcrypt')

const { DbMixin } = require('../../mixins/knexdb.mixin')
const { SERVICE_ADMIN, TABLE_ADMIN } = require('../../constants')


module.exports = {
  name: SERVICE_ADMIN,
  mixins: [],
  actions: {
    createAd: {
      params: {
        username:{
          type: 'string',
        } ,
        password:{
          type: 'string',
        } 
      },
      async handler(ctx) {
        // ctx as same req.body - req.params
        const { username, password } = ctx.params
        console.log(ctx.params)
        const pwdHashed = await bcrypt.hash(password,10)
        const entity = {
          adminNm: username,
          adminPwd: pwdHashed
        }
        console.log(entity)
        return ctx.call(`db-${TABLE_ADMIN}.insert`, {
          entity
        })
        return ctx.call(`db-${TABLE_USER}.find`, { 
          where: { actFlg: body == 'true'}
        })
      }
    }
  }
}