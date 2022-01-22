import {setUserSession} from "../../../utils/common";

export const loginRequest = (setLoading, setError, username, password, setUserType) => {
    const data = {
        username: username.value,
        password: password.value
    }
    fetch('http://localhost:3000/users/login',
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors",
        body: JSON.stringify(data)
    }).then(response => response.json().then(data => {
        setLoading(false);
        setUserType(data.userType);
        setUserSession(data.token, data.user);
    }
).catch(error => {
    setLoading(false);
    if (error.response.status === 401) setError(error.response.data.message);
    else setError("משהו השתבש, אנא נסה שנית מאוחר יותר");
}));
}

const data =  { token: 2, user: "user" } ;
// fetchMock.mock('http://localhost:3000/users/login', data);