module.exports = ({ env }) => ({
  app: {
    keys: env("APP_KEYS").split(","),
  },
});
