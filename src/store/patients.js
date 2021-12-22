import { createSlice } from "@reduxjs/toolkit";
import { apiCallBegan, detailsPatient } from "./actions";

const slice = createSlice({
    name: "patients",
    initialState: {
        list: [],
        loading: false,
        patient: []
    },

    reducers: {
        patientDetails: (state, action) => {
            state.patient = action.payload
        },

        patientsRequested: (patients, action) => {
            patients.loading = true;
        },

        patientsReceived: (patients, action) => {
            console.log("## patients ")
            console.log(patients)
            patients.list = action.payload
            patients.loading = false;
        },

        patientsRequestFailed: (patients, action) => {
            patients.loading = false;
        },
    },
});

export default slice.reducer;

const { patientsRequested, patientsReceived, patientsRequestFailed, patientDetails } = slice.actions;

// const url = `/?page=1&results=10`;

export const loadpatients = (page, data) => (dispatch) => {
    return dispatch(
        apiCallBegan({
            url: `/?page=${page}&results=10`,
            data,
            onStart: patientsRequested.type,
            onSuccess: patientsReceived.type,
            onError: patientsRequestFailed.type,
        })
    );
};

export const loadDetails = (data) => (dispatch) => {
    return dispatch({ patientDetails, payload: data });  
}
