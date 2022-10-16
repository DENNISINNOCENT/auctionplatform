import { useState } from "react";
import React from 'react'
import { Button,  Input, FormField, Label} from "../styles";

function CommodityForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    bid_price: "",
    image_url: "",
    description: "",
    email_of_auctioneir: "",
    
    
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("/commodities", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
      });
  }

  function handleChange(e) {
    const name =e.target.name
    const value =e.target.value
      
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  return (
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormField>
        <FormField>
          <Label htmlFor="category">Category</Label>
          <Input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </FormField>
        
        <FormField>
          <Label htmlFor="bid_price">Bid Price</Label>
          <Input
            type="integer"
            name="bid_price"
            value={formData.bid_price}
            onChange={handleChange}
            placeholder="$"
          />
        </FormField>
        <div>
          <Label htmlFor="image_url">Image</Label>
          <Input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            
          />
        </div>
        <FormField>
          <Label htmlFor="email_of_auctioneir">Your Email</Label>
          <Input
            type ="text"
            name = "email_of_auctioneir"
            value={formData.email_of_auctioneir}
            onChange={handleChange}
          />
        </FormField>
        <FormField>

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormField>
        
        
        
        <Button type="submit">Add Commodity</Button>
      </form>
   
  );
}


export default CommodityForm;