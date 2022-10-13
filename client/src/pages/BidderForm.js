import React, { useState } from "react";
import { Button, Error, Input, FormField, Label} from "../styles";

function BidderForm({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] =useState(""); 
  const [bidding_price, setBiddingPrice] = useState("");
  
  
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/bidders", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        bidding_price,
        
        
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
         
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
    <>
        <h2>Place Bid</h2>
        <form onSubmit={handleSubmit}>
          <FormField>
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="email">Email</Label>
            <Input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormField>
          <FormField>
            <Label htmlFor="bidding_price">Your Bid Price</Label>
            <Input
              type="text"
              id="biddig_price"
              value={bidding_price}
              onChange={(e) => setBiddingPrice(e.target.value)}
              placeholder ="$"
            />
          </FormField>
          <FormField>
            <Button color="primary" type="submit">
              {isLoading ? "Loading..." : "Submit Bid"}
            </Button>
          </FormField>
          <FormField>
            {errors.map((err) => (
              <Error key={err}>{err}</Error>
            ))}
          </FormField>
        </form>
      </>
  );
}


export default BidderForm;

