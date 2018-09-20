module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/FireteamFinder'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
}
}
