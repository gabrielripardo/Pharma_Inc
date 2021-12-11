import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import api from "../services/api"
import SimpleTable from "../components/SimpleTable"
import { Container } from '@mui/material';

export default function Home() {
    const dispatch = useDispatch()
    const [patients, setPatients] = useState<any[]>([]);
    
    const ExtractItemsAction = () => (dispatch: any) => {      
      dispatch ({type: "ITEMS_REQUESTED"});
      const url = 'https://randomuser.me/api/?results=10';
      fetch(url, {
          method: "get"
      })
      .then(res => res.json())
      .then(response => {
          dispatch({type: "ITEMS_RECEIVED", items: response.data.results});
          setPatients(response.data.results)
      });
      // api
      // .get("/?results=10")
      // .then((response) => { 
      //       console.log(response.data.results); 
      //       console.log("Type of: "+typeof(response.data.results))
      //       const data = response.data.results

      //       setPatients(data) 
      //       dispatch({type: "ITEMS_RECEIVED", items: data});
      //     })
      // .catch((err) => {
      //     console.error("ops! ocorreu um erro" + err);
      // });
    }

    useEffect(() => {
      ExtractItemsAction()
    }, []);

    return (
        <Container>
            <h2>Dashboard</h2>
            <SimpleTable />
            {
              patients.map(item => (
                  <div>                    
                    {item.name.first}
                  </div>
                )
              )
            }           

            <button
              onClick={ () =>
                dispatch({type: 'INCREMENT'})
              }
            >
              Adicionar 
            </button> 
        </Container>
    )
}