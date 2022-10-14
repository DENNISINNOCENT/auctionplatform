import styled from "styled-components";
import React from "react";
function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {
  return (
    <CategoryList role="menu">
      {categories.map((category) => (
        <CategoryItem key={category} active={category === selectedCategory}>
          <CategoryLink
            onClick={() => setSelectedCategory(category)}
            role="menuitem"
          >
            {category}
          </CategoryLink>
        </CategoryItem>
      ))}
    </CategoryList>
  );
}

const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;

const CategoryItem = styled.li`
  border-bottom: 1px solid gray;
  padding: 5px;
  ${(p) =>
    p.active &&
    `
  background-color: lemonchiffon;
  `}

  &:last-of-type {
    border: none;
  }
`;

const CategoryLink = styled.button`
  cursor: pointer;
  padding: 0 8px;
  width: 100%;
  background-color: transparent;
  border: none;
  font: inherit;
  font-size: 1.2rem;
  color: inherit;
`;

export default CategoryFilter;