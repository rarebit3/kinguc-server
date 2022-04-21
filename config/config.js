require('dotenv').config()
module.exports = {
  development: {
    database: "database_castle_development",
    dialect: 'postgres'
  },
  test: {
    database: "database_castle_test",
    dialect: 'postgres'
  },
  production: {
    use_env_variable: 'DATABASE_URL',
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
        require: true
      }
    }
  }
}