const fastifyPlugin = require("fastify-plugin");
const mysqlconnector = require("@fastify/mysql");

async function mysqlConnector(fastify, options) {
  fastify.register(mysqlconnector, {
    connectionString: "mysql://root:pass1234@localhost:3306/coffeeshop",
  });
}

module.exports =fastifyPlugin(mysqlConnector)