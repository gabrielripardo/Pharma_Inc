import axios from "axios";
import * as actions from "../actions";

const api =
    ({ dispatch }) =>
    (next) =>
    async (action) => {              
        if (action.type !== actions.apiCallBegan.type) return next(action);

        const { url, method, data, onStart, onSuccess, onError } =
            action.payload;

        if (onStart) dispatch({ type: onStart });

        next(action);

        try {
            const response = await axios.request({
                baseURL: "https://randomuser.me/api",
                url,
                method,
                data,
            });
         
            // General
            dispatch(actions.apiCallSucess(response.data.results));
            console.log(`##`)
            console.log(response.data.results)
            // Specific
            if (onSuccess)
                dispatch({ type: onSuccess, payload: [...data, ...response.data.results] });
        } catch (error) {
            // General
            dispatch(actions.apiCallFailed(error.message));
            // Specific
            if (onError) dispatch({ type: onError, payload: error.message });
        }
    };

export default api;