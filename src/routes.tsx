import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import TeacherList from "./Pages/TeacherList";
import TeacherForm from "./Pages/TeacherForm";

function Routes(){
    return (
        <BrowserRouter>
            <Route path="/" exact component={Landing} />
            <Route path="/estudar" component={TeacherList} />
            <Route path="/dar-aulas" component={TeacherForm} />
        </BrowserRouter>
    );
}

export default Routes;