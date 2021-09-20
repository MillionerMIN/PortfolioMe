import React from "react";
import { Route } from "react-router-dom";
import { HomeOne as HomeLight } from "../views/all-home-version/HomeLight";


export const Router = () => {
   return (
      <>
            <Route exact path={'/'} component={HomeLight}/>
      </>
   );
}