import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SimpleTable from "../components/SimpleTable"
import { Container } from '@mui/material';
import Patients from '../components/Patients';
import TextField from '../components/TextField'
import BtnLoadMore from '../components/BtnLoadMore'

export default function Home() {    

    return (
      <Container>
        <h2>Dashboard</h2>
        <TextField />
        <SimpleTable />       
        <BtnLoadMore/>
      </Container>  
    )
}