import { useEffect, useState } from "react";
// import styled from "styled-components";
import CategoryFilter from "./CategoryFilter";
import CommodityCard from './CommodityCard'

function CommodityList(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [commodities, setCommodities] = useState([]);

  useEffect(() => {
    fetch("/commodities")
      .then((r) => r.json())
      .then((commodities) => {
        setCommodities(commodities);
      });
  }, []);

  const categories = commodities
    .map((commodity) => commodity.category)
    .filter(
      (category, index, categories) => categories.indexOf(category) === index
    )
    .sort();

  const displayedCommodities = commodities.filter(
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
        {displayedCommodities.map((commodity) => (
          <CommodityCard key={commodity.id} commodity={commodity} />
        ))}
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  max-width: 1000px;
  margin: 0 auto;
  padding: 32px 16px;
  display: grid;
  gap: 16px;
  grid-template-columns: 200px 1fr;
`;

const Sidebar = styled.nav`
  position: sticky;
  top: 32px;
  height: 25vh;
`;

export default CommodityList;
