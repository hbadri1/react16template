import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'
import modules from './modules'
import Header from './components/shared/header/header'
import Footer from './components/shared/footer/footer'
import { UserProvider } from './context/userContext'
import { ThemeProvider } from './context/themeContext'
import { LangProvider } from './context/langContext'

const App: React.FC = () => {
  const user = {username: 'user1', loggedIn: true}
  return (
      <LangProvider>
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
      </LangProvider>
  );
}

export default App;
