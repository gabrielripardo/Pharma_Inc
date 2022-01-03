import {useLocation, useParams} from 'react-router-dom'

export default function Details(props: any){
    const {id} = useParams()    
    console.log(id)        
   

    return(
        <>
            <h1>Página de detalhes</h1>
            UID: {id}
        </>
    )
}