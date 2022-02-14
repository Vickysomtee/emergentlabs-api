

module.exports = {
  HOST: "us-cdbr-east-05.cleardb.net",
  USER: "b4932e7f587b3f",
  PASSWORD: "aaf2f51f",
  DB: "heroku_355e7e4f9852205",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};