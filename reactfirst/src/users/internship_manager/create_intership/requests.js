import {SERVER_ADDRESS} from '../../../config'

export const createInternship = (company,internshipName,internshipDescription,demands) => {
    const data = {
        "company": company,
        "internshipName": internshipName,
        "about": internshipDescription,
        "requirements": demands
    }
    const response = fetch(SERVER_ADDRESS+'/programManager/createInternship',
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data)
        }).then(response => console.log(response));
}