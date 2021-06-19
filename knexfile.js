const path = require('path')

const DB_PATH = path.join(process.cwd(), "db.sqlite");

module.exports = {
  client: "sqlite3",
  connection: {
    filename: DB_PATH,
  },
  useNullAsDefault: true
};
