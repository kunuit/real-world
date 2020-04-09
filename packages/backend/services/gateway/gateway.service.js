const ApiGateway = require('moleculer-web')
const { SERVICE_USER } = require('../../constants')

module.exports = {
  mixins: [ApiGateway],
  settings: {
    routes: [
      {
        port: 3000,
        path: "/api",
        authentication: true,
        autoAliases: true,
        aliases: {
          'GET /sum': `${SERVICE_USER}.sum`,
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