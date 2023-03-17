/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Route } from 'react-router-dom'
import { Switch } from '@mui/material'
import App from '../App'
import Write from '../write'
import Login from '../Login'

export default () => (
  <Switch>
    <Route exact path = "/" component={App} />
    <Route exact path = "/write" component={Write} />
    <Route exact path = "/Login" component={Login} />
    
  </Switch>
)