
import React, { useState} from "react";
import SidePanel from "./users/common/side_panel/side_panel";
import CreateProgram from "./users/system_manager/create_program/create_program";
import styled from "styled-components";
import {Route, Switch, BrowserRouter} from "react-router-dom";
import Register from "./users/guest/register/register";
import Login from "./users/guest/login/login";
import PublicRoute from "./utils/public_route";
import Home from "./users/common/home/home";
import CreateInternship from "./users/common/create_intership/create_internship";
import ReportHours from "./users/intern/report_hours/report_hours";
import {Table} from "./users/internship_manager/assign_internships/assign_internships";
import {INTERNSHIP_MANAGER} from "./constants";


const Container = styled.div`
  background: #F7F8FC;
  display: flex;
  font-family: rubik;
  min-height: 1160px;
`

const ContentWrapper = styled.div`
  padding: 30px 50px;
  width: auto;
`

const App = () => {

    const [userType, setUserType] = useState(INTERNSHIP_MANAGER);

    return (
        <BrowserRouter>
            <Container>
                <SidePanel userType={userType}/>
                <ContentWrapper>
                    <Switch>
                        <Route path="/createProgram" component={CreateProgram}/>
                        <Route path="/assignInternships" component={Table}/>
                        <Route path="/reportHours" component={ReportHours}/>
                        <Route path="/createInternship" component={CreateInternship}/>
                        <Route path="/register" component={Register}/>
                        <PublicRoute path="/login" component={<Login setUserType={setUserType}/>} />
                        <Route path="/" component={Home}/>
                    </Switch>
                </ContentWrapper>
            </Container>
        </BrowserRouter>
    )

}
    export default App;


