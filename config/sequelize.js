module.exports = {
  development: {
    host: 'localhost',
    database: 'backpack',
    username: 'user',
    password: 'password',
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
