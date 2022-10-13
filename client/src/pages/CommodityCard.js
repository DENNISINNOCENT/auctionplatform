import styled from "styled-components";
function CommodityCard({image_url,name,category,description,bid_price}) {
 
  
  return (
  <Wrapper>
      <Poster>
        <img src={image_url} alt={name } />
      </Poster>
      
      <Detail>
        <h2>{name}</h2>
        <p>
          {category}  
        </p>
        
        <p>{description}</p>
        <h1>Bidding Price ${bid_price}</h1>
      </Detail>
    </Wrapper>
  );
}




export default CommodityCard;
const Detail = styled.div`
  flex: 1 1 250px;

  h2 {
    margin-top: 0;
    margin-bottom: 12px;
  }

  p {
    margin: 8px 0;
    line-height: 1.4;
  }
`;
const Wrapper = styled.article`
  display: flex;
  gap: 16px;
  margin-bottom: 16px;
  position: relative;
  overflow: hidden;
  flex-wrap: wrap;
`;

const Poster = styled.div`
  flex: 0 0 200px;

  img {
    width: 100%;
  }
`;