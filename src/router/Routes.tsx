import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { HomeOne as HomeLight } from "../views/all-home-version/HomeLight";


export const Router = () => {
   return (
      <>
         <BrowserRouter>
            <Switch>
               <Route exact path={'/'} component={HomeLight}/>
            </Switch>
         </BrowserRouter>
      </>
   );
}