import { useState } from "react";
// import styled from "styled-components";

function CommodityForm() {
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    bid_price: "",
    image_url: "",
    description: "",
    email_of_actioneir:"",
    
    
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
      
    setFormData({
      ...formData,
      [e.target.id]: value,
    });
  }

  return (
    <Wrapper>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={formData.category}
            onChange={handleChange}
          />
        </FormGroup>
        
        <FormGroup>
          <label htmlFor="bid_price">Bid Price</label>
          <input
            type="integer"
            id="bis_price"
            value={formData.bid_price}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="image_url">Poster</label>
          <input
            type="text"
            id="poster_url"
            value={formData.poster_url}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            value={formData.description}
            onChange={handleChange}
          />
        </FormGroup>
        <FormGroup>
          <label htmlFor="email_of_actioneir">Description</label>
          <textarea
            id="email_of_actioneir"
            value={formData.email_of_actioneir}
            onChange={handleChange}
          />
        </FormGroup>
        
        
        <SubmitButton type="submit">Add Commodity</SubmitButton>
      </form>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  max-width: 500px;
  margin: 32px auto;
  padding: 32px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
`;

const SubmitButton = styled.button`
  background: blue;
  color: yellow;
  font-weight: bold;
  font-family: inherit;
  font-size: 1.2rem;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
`;

export default CommodityForm;