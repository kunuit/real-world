const ApiGateway = require('moleculer-web')
const { SERVICE_USER,TABLE_USER,TABLE_ADMIN } = require('../../constants')

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
          'GET /user/:active': `${TABLE_USER}.getAllUsers`,
          'POST /admin': `${TABLE_ADMIN}.createAd`
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