const { Client, Environment } = require("@paypal/paypal-server-sdk");

const paypalClient = new Client({
  clientCredentialsAuthCredentials: {
    oAuthClientId: process.env.PAYPAL_CLIENT_ID,
    oAuthClientSecret: process.env.PAYPAL_CLIENT_SECRET,
  },
  environment: Environment.Sandbox,
  timeout: 0,
});

module.exports = { paypalClient };
