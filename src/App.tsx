import React from 'react'
import { BrowserRouter, Route, Switch } from "react-router-dom"
import './App.css'
import modules from './modules'
import Header from './components/shared/header/header'
import Footer from './components/shared/footer/footer'
import { LangProvider } from './context/langContext'
import { AuthProvider } from './context/authContext'

const App: React.FC = () => {
  return (
      <LangProvider>
        <AuthProvider>
          <BrowserRouter>
            <Header/>
            <Switch>
              {
                modules.map((m: any[]) => {
                  return m.map((subm, idx: number) => {
                    return (<Route exact path={subm.routeProps.path} component={subm.routeProps.component} key={idx}></Route>)
                  })
                })
              }
            </Switch>
            <Footer/>
          </BrowserRouter>
        </AuthProvider>
      </LangProvider>
  );
}

export default App;
