import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";
import CommodityCard from "./CommodityCard";

function CommodityList( props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [commodities, setCommodities] = useState([]);

  useEffect(() => {
    fetch("/commodities")
      .then((r) => r.json())
      .then((commodities) => {
        setCommodities(commodities);
         console.log(commodities)
      });
  }, []);
  console.log(commodities)

  const categories = commodities
    .map((commodity) => commodity.category)
    .filter(
      (category, index, categories) => categories.indexOf(category) === index
    )
    .sort();

  const displayedMovies = commodities.filter(
    (commodity) => selectedCategory === "All" || commodity.category === selectedCategory
  );

  return (
    <Wrapper>
      <Sidebar>
        <CategoryFilter
          categories={["All", ...categories]}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </Sidebar>
      <section>
        {displayedMovies.map((commodity) => (
          <CommodityCard key={commodity.id} name={commodity.name} image_url ={commodity.image_url} category ={commodity.category} bid_price ={commodity.bid_price} description ={commodity.description}/>
        ))}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  display: flex;
  gap: 16px;
  grid-template-columns: 200px 1fr;
`;

const Sidebar = styled.nav`
  position: sticky;
  display: flex;
  top: 32px;
  height: 5vh;
`;

export default CommodityList;