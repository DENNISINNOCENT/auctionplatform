import { useState } from "react";


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
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="category">Category</label>
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />
        </div>
        
        <div>
          <label htmlFor="bid_price">Bid Price</label>
          <input
            type="integer"
            name="bid_price"
            value={formData.bid_price}
            onChange={handleChange}
            placeholder="$"
          />
        </div>
        <div>
          <label htmlFor="image_url">Image</label>
          <input
            type="text"
            name="image_url"
            value={formData.image_url}
            onChange={handleChange}
            
          />
        </div>
        <div>
          <label htmlFor="email_of_auctioneir">Your Email</label>
          <input
            type ="text"
            name = "email_of_auctioneir"
            value={formData.email_of_auctioneir}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>
        
        
        
        <button type="submit">Add Commodity</button>
      </form>
   
  );
}


export default CommodityForm;