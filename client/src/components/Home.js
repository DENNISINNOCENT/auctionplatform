import { useEffect, useState } from "react";


function Home() {
  const [commodities, setCommodities] = useState([]);

  useEffect(() => {
    fetch("/commodities")
      .then((r) => r.json())
      .then(setCommodities);
  }, []);

  return (
    <main>
      {commodities.map((commodity) => {
        
        return (
            
          <li commodity key={commodity.id}> 
            
            <small>
              {commodity.image_url}
              {commodity.name} 
            </small>
            <p>{commodity.description}</p>
          </li>
        );
      })}
    </main>
  );
}

export default Home;