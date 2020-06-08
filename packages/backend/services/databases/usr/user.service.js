const { DbMixin } = require('../../../mixins/knexdb.mixin')
const { TABLE_USER } = require('../../../constants')


module.exports = {
  name: `db-${TABLE_USER}`,
  mixins: [DbMixin({ schema: 'usr', table: 'User', idField: 'userId'})],

}