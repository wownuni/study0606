import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
// import Box from './components/box' //index.js는 생략 가능함
import SgignupPage from './pages/signup'

import { SignupPage, HomePage, ErrorPage, TodoPage } from './pages'

import GlobalStyles from './components/shared/global-styles'
import Gnb from './components/gnb'

//HOF / HOC

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Gnb />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/todo" component={TodoPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default App
