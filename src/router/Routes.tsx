import React from 'react';
import { Route } from 'react-router-dom';
import { HomeOne as HomeLight } from '../views/all-home-version/HomeLight';

export const Router = () => {
  return (
    <>
      <Route path={'/'} component={HomeLight} />
    </>
  );
};
