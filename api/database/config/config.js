module.exports = {
  // Local
  //HOST: "44.210.14.76",
  // Docker
  HOST: "postgresql-server",
  USER: "dbuser",
  PASSWORD: "iab3302022",
  DB: "iab330nodered",
  dialect: "postgres",
  PORT: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};