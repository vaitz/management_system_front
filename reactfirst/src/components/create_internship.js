import React, {useEffect, useState} from "react";
import styled from "styled-components";
import Select from 'react-select';
import axios from "axios";
import MockAdapter from 'axios-mock-adapter';

const Label =  styled.text`
  font-size: 18px;
  color: #666666;
  margin-top: 20px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Arial, Helvetica, sans-serif;
`

const Input = styled.input`
  width:  500px;
  height: 20px;
`

const Dropdown = styled(Select)`
  width: 300px;
`

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin: 150px 300px 200px;
  background: #7A5CFA;
  color: #FFFFFF
`

const customStyles = {
    option: (provided, state) => ({
        color: "black"
    })
}

const CreateInternship = () => {
    const [options, setOptions] = useState([{value: 1, label: "מאי וייץ"}, { value: 2, label: "חי מתתיהו" }]);
    const [programManager, setProgramManager] = useState();
    const [internshipName, setInternshipName] = useState("");
    const [department, setDepartment] = useState("");
    const [year, setYear] = useState("");
    const [semester, setSemester] = useState("");
    const [hoursRequired, setHoursRequired] = useState("");

    useEffect( () => {
         axios.get('http://localhost:3000/programManagers')
            .then((response) => {
                setOptions(response.data);
                console.log("get")
            });
    }, [])

    const mock = new MockAdapter(axios);
    const data = [{value: 1, label: "מאי וייץ"}, { value: 2, label: "חי מתתיהו" }] ;
    mock.onGet('http://localhost:3000/programManagers').reply(200, data);


    const onSubmit = () => {
        axios.post('http://localhost:3000/admin/openProgram',
            {
                "program name": internshipName,
                "year": year, "semester": semester,
                "program manager": programManager,
                "hours required": hoursRequired,
                "department": department
            }).then(response => console.log("post",response))
     }

    mock.onPost('http://localhost:3000/admin/openProgram').reply(200, true);

    return (
        <Container>
            <Label>שם התמחות</Label>
            <Input type="text" value={internshipName} onChange={e => setInternshipName(e.target.value)}/>
            <Label>מחלקה</Label>
            <Input type="text" value={department} onChange={e => setDepartment(e.target.value)}/>
            <Label>שנה</Label>
            <Input type="text" value={year} onChange={(year) => setYear(year.target.value)}/>
            <Label>סמסטר</Label>
            <Input type="text" value={semester} onChange={e => setSemester(e.target.value)}/>
            <Label>שעות התמחות</Label>
            <Input type="text" value={hoursRequired} onChange={e => setHoursRequired(e.target.value)}/>
            <Label>מנהל התמחות</Label>
            <Dropdown styles={customStyles} onChange={setProgramManager} options={options} placeholder={"בחר מנהל"}/>
            <Button onClick={() => onSubmit()}>צור התמחות</Button>
        </Container>
)
}
export default CreateInternship;