import paypal from "@paypal/paypal-server-sdk";


export const paypalClient = paypal.core.Client({
  clientCredentials: {
    clientId: process.env.PAYPAL_CLIENT_ID,
    clientSecret: process.env.PAYPAL_CLIENT_SECRET,
  },
  environment: paypal.core.environments.sandbox,
});
