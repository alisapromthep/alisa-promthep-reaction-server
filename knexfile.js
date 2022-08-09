// Update with your config settings.
require('dotenv').config();

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const connections = {

  development: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'reaction',
      charset: 'utf8'
    }
  },
  production: {
    client: 'mysql',
    connection: process.env.JAWSDB_URL,
  }
}

module.exports = process.env.NODE_ENV === 'production' 
  ? connections.production
  : connections.development;
