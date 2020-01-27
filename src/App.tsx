import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'
import modules from './modules'
import Header from './components/shared/header/header'
import Footer from './components/shared/footer/footer'
import { UserProvider } from './context/context'

const App: React.FC = () => {
  const user = {username: 'user1', loggedIn: true}
  return (
    <UserProvider value={user}>
      <BrowserRouter>
        <Header/>
        <Switch>
          {
            modules.map((m, idx) =>
              (<Route exact path={m.routeProps.path} component={m.routeProps.component} key={idx}></Route>)
            )
          }
        </Switch>
        <Footer/>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
