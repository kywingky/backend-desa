module.exports = ({ env }) => ({
  app: {
    keys: env("APP_KEYS").split(","),
  },
});
module.exports = ({ env }) => ({
  url: env("PUBLIC_URL", "http://localhost:1337"),
  host: "0.0.0.0",
  port: env.int("PORT", 1337),
  app: {
    keys: env("APP_KEYS").split(","),
  },
});
