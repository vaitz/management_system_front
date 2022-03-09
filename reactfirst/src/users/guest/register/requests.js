import {SERVER_ADDRESS} from '../../../config'
import {STUDENT_HEBREW, COMPANY_REPRESENTATIVE_HEBREW, MENTOR_HEBREW, PROGRAM_MANAGER_HEBREW, PROGRAM_COORDINATOR_HEBREW} from "../../../constants"

export async function sendDetailsToServer({userType, username, firstname, lastname, email, password, companyName}){
    // need to hash the password in the server, suppose to return error if username exists (or other)
    var data = null;
    var endpoint_address = null;
    if(userType === STUDENT_HEBREW){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email
        }
        
        endpoint_address = SERVER_ADDRESS+'/users/register/student';
    }
    else if(userType === COMPANY_REPRESENTATIVE_HEBREW){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email,
            "companyName": companyName
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/companyRep';
    }
    else if(userType === MENTOR_HEBREW){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email,
            "companyName": companyName
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/mentor';
    }
    else if(userType === PROGRAM_COORDINATOR_HEBREW){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email,
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/programCoordinator';
    }

    else if(userType === PROGRAM_MANAGER_HEBREW){
        data = {
            "username": username,
            "first_name": firstname,
            "last_name": lastname,
            "password": password,
            "email": email,
        }
        endpoint_address = SERVER_ADDRESS+'/users/register/programManager';
    }

    if(data != null && endpoint_address != null){
        console.log(data);
        const res = await fetch(endpoint_address,
                {
                    method: 'POST',
                    mode: "cors",
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                }).then(response => {
                console.log("post",response);
                return (response.status === 201);
            })
        return res;
    }
    return false;
    //  todo: check if the user exists in the response
};
