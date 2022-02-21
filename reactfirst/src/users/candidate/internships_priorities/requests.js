import fetchMock from 'fetch-mock';
import {SERVER_ADDRESS} from '../../../config'

fetchMock.mock(SERVER_ADDRESS+'/internships/program1', [
    {'companyName': 'אלביט','internshipName':'מפתח/ת צד לקוח', 'about':'bla', 'requirments':'askdnaskn'},
    {'companyName': 'דל','internshipName':'מפתח/ת פול סטאק', 'about':'bla', 'requirments':'askdnaskn'},
    {'companyName': 'מיקרוסופט','internshipName':'מפתח/ת צד שרת', 'about':'bla', 'requirments':'askdnaskn'},
]);
fetchMock.mock(SERVER_ADDRESS+'/prioritiesAmount/program1', JSON.stringify(3));
fetchMock.mock(SERVER_ADDRESS+'/candidate/internshipsPriorities', 200);

export const getPrioritiesAmount = (program, setPrioritiesAmount) => {
    fetch(SERVER_ADDRESS+'/prioritiesAmount/'+program,
        {
            method: 'Get',
            mode: "cors",
        }).then(response => response.json().then(data => {
            console.log(data);
            setPrioritiesAmount(data);
        }
    ).catch(error => {
        console.log("error");
    }));
}

export const getInternships = (program, setOptions) => {
    fetch(SERVER_ADDRESS+'/internships/'+program,
        {
            method: 'Get',
            mode: "cors",
        }).then((response) => {
            response.json().then(data => {
                var tempData = data.map((obj)=>{return obj.companyName + "- " + obj.internshipName});
                tempData.push("");
                // todo: add empty label
                setOptions(tempData);
            });
        }).catch(error => {
            console.log("error");
        });
}
        

export function sendInternshipsToServer(username, prioritiesArr){
    // prioritiesArr- suppose to be array of string order by the priorities of the user
    const data = {
        "username": username,
        "priorities": prioritiesArr,
    };
    fetch(SERVER_ADDRESS+'/candidate/internshipsPriorities',
        {
            method: 'POST',
            mode: "cors",
            body: JSON.stringify(data)
        }).then(response => response.json().then(data => {console.log(data)}));

}