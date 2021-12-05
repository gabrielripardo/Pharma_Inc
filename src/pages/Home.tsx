import { useState, useEffect } from 'react';
import api from "../services/api"
<<<<<<< Updated upstream
=======
import SimpleTable from "../components/SimpleTable"
>>>>>>> Stashed changes

export default function Home() {

    const [patients, setPatients] = useState<any[]>([]);
    
    useEffect(() => {
        api
            .get("/?results=10")
            .then((response) => { 
                  console.log(response.data.results); 
                  console.log("Type of: "+typeof(response.data.results))
                  const data = response.data.results

                  setPatients(data)
                })
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    return (
        <>
            <h2>Dashboard</h2>
<<<<<<< Updated upstream
       
=======
            <SimpleTable />
>>>>>>> Stashed changes
            {
              patients.map(item => (
                  <div>                    
                    {item.name.first}
                  </div>
                )
              )
            }
        </>
    )
}