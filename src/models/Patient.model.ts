export default interface Patient {
    id: {
        value: String,
        name: String,
    }
    name: String;
    email: String;
    gender: String;
    picture: {medium: String, large: String};  
    dob: {date: String};
    phone: String;
    location: {
        country: String, 
        state: String, 
        city: String,
        street: {name: String, number: String} 
    };    
}

