const { DbMixin } = require('../../../mixins/knexdb.mixin')
const { TABLE_ADMIN } = require('../../../constants')


module.exports = {
  name: `db-${TABLE_ADMIN}`,
  mixins: [DbMixin({ schema: `${TABLE_ADMIN}`, table: 'Admin', idField: 'adminId'})],

}