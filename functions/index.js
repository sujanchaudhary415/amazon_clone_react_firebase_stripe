const {onRequest} = require("firebase-functions/v2/https");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
    "sk_test_51PqRP7RvZaLwYAJHQwDyQYauHvzsK1l3nWwDcH4nWnuwakZ2JWTWoEAahXqFaWj73Z703gPdqJFmmLegS33Yp4mQ00EpnPWro7",
);

// API

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get("/", (request, response) => response.status(200).send("Hello World"));

// POST route for Stripe payment
app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "usd",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// Listen command
exports.api = onRequest(app);

// example end point
// http://127.0.0.1:5001/clone-e4efa/us-central1/api
