import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SimpleTable from "../components/SimpleTable"
import { Container } from '@mui/material';
import Patients from '../components/Patients';

export default function Home() {    

    return (
      <Container>
        <h2>Dashboard</h2>
        <SimpleTable />            
        <Patients/>       
      </Container>  
    )
}