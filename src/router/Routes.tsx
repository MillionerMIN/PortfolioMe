import React from "react";
import { Switch, Route } from "react-router-dom";
import { HomeOne as HomeLight } from "../views/all-home-version/HomeLight";


export const Router = () => {
   return (
      <>
            <Switch>
               <Route exact path={'/'} component={HomeLight}/>
            </Switch>
      </>
   );
}