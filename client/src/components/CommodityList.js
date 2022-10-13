import { useEffect, useState } from "react";
import CommodityCard from './CommodityCard'

function CommodityList(props) {
  const [commodities, setCommodities] = useState([]);

  useEffect(() => {
    fetch("/commodities")
      .then((r) => r.json())
      .then((commodities) => {
        setCommodities(console.log(commodities));
      });
  }, []);
 
  

  return (
    
      
      <div >
      {commodities.map((commodity)=>(

      <CommodityCard key={commodity.id}  name={commodity.name} description ={commodity.description} commodity={crime.image_url} />

      ))}
           
     
    </div>
  );
}





export default CommodityList;
