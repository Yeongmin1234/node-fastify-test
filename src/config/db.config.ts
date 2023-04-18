import config from "./config"; // this is important!

module.exports = {
  prod: {
    username: config.database.prod.username,
    password: config.database.prod.password,
    database: config.database.prod.name,
    host: config.database.prod.host,
    dialect: config.database.dialect,
  },
  dev: {
    username: config.database.dev.username,
    password: config.database.dev.password,
    database: config.database.dev.name,
    host: config.database.dev.host,
    dialect: config.database.dialect,
  },
  local: {
    username: config.database.local.username,
    password: config.database.local.password,
    database: config.database.local.name,
    host: config.database.local.host,
    dialect: config.database.dialect,
    sync: { alter: false }
  },
};