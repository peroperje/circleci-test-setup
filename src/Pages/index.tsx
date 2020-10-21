import React from 'react';
import {Switch,Route} from "react-router-dom";

const Pages: React.FC = (): JSX.Element=> <Switch>
    <Route path="/" exact>Home - Update</Route>
    <Route path="/goal" exact>Goal</Route>
    <Route >Not Found</Route>
</Switch>

export default Pages;
