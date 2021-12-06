import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51K3fbBIul4fLo1RzHee0S3tXI5Y8gY6VGcypcfmCvTq5oqGNX16HTtsxuxI1W5QUwX2tkI6hRoDFA6cZBdMH0uqf00z5QWrA7W";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Succesful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="ARTcodeSH Shop Ltd."
      billingAddress
      shippingAddress
      image='../../assets/artcodesh.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton 
