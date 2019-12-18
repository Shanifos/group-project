module.exports = {
  development: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dialect: 'mysql'
  },
  test: {
    host: process.env.RDS_HOST,
    database: process.env.RDS_NAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    dialect: 'mysql'
  },
  production: {
    host: process.env.RDS_HOST,
    database: process.env.RDS_NAME,
    username: process.env.RDS_USERNAME,
    password: process.env.RDS_PASSWORD,
    dialect: 'mysql'
  }
}
