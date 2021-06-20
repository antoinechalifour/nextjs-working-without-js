const path = require('path')

const DB_PATH = path.join(process.cwd(), "db.sqlite");

require('dotenv').config({ path: '.env.local' })

module.exports = {
  client: "pg",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    ssl: {
      rejectUnauthorized: false
    }
  }
};
