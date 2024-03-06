const routes = require('./plugins/route')
const mysqlConnector = require('./plugins/mysql')
// CommonJs
const fastify = require('fastify')({
  logger: true
})

fastify.register(mysqlConnector)
fastify.register(routes)


// Run the server!
fastify.listen({ port: 3000 }, function (err, address) {
  if (err) {
    fastify.log.error(err)
    process.exit(1)
  }
  // Server is now listening on ${address}
})