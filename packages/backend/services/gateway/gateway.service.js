const ApiGateway = require('moleculer-web')
const { SERVICE_USER,TABLE_USER } = require('../../constants')

module.exports = {
  mixins: [ApiGateway],
  settings: {
    routes: [
      {
        port: 3000,
        path: "/api",
        authentication: false,
        autoAliases: false,
        aliases: {
          'GET /user': `${TABLE_USER}.getAllUsers`
        },

        // Disable to call not-mapped actions
        //mappingPolicy: "restrict",

        // Use bodyparser modules
        bodyParsers: {
          json: { limit: "2MB" },
          urlencoded: { extended: true, limit: "2MB" }
        },
      }
    ]
  }
}