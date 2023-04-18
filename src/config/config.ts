import dotenv from "dotenv";
dotenv.config();

const config = {
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database: {
    prod:{
        username: process.env.DB_USERNAME_PROD,
        password: process.env.DB_PASSWORD_PROD,
        name: process.env.DB_DATABASE_PROD,
        host: process.env.DB_HOST_PROD,
    },
    dev: {
      username: process.env.DB_USERNAME_DEV,
      password: process.env.DB_PASSWORD_DEV,
      name: process.env.DB_DATABASE_DEV,
      host: process.env.DB_HOST_DEV,
    },
    local: {
      username: process.env.DB_USERNAME_LOCAL,
      password: process.env.DB_PASSWORD_LOCAL,
      name: process.env.DB_DATABASE_LOCAL,
      host: process.env.DB_HOST_LOCAL,
    },
    dialect: process.env.DB_DIALECT,
  },
};

export default config;