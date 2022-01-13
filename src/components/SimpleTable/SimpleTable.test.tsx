import { render, screen } from "@testing-library/react"
import SimpleTable from "./SimpleTable";

describe("SimpleTable Component", () => {
    const row = [{
        login: {uuid: "234234asfba0-asdfa-32332"},
        name: {title: "Mr.", first: "Gabriel", last: "Ripardo"},
        gender: "male",
        registered: { age: 24 }
    }]    

    test("Deve conter um component TableContainer", () => {
        const { queryByTestId } = render(
            <SimpleTable rows={row}/>
        );
        expect(queryByTestId(/table_container/i)).toBeTruthy();        
    })
    test("Deve conter um button", () => {        
        const { queryByTestId } = render(
            <SimpleTable rows={row}/>
        );
        expect(queryByTestId(/button_view/i)).toBeTruthy();   
    })      
    test("Deve conter o nome do paciente", () => {        
        render(
            <SimpleTable rows={row}/>
        );

        expect(
            screen.getByRole('patient_name')
        ).toBeInTheDocument()        
    })         
})
