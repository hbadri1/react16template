import React, {useState} from 'react'
import { BrowserRouter, Route, Link } from "react-router-dom"
import './App.css'
import modules from './modules'

const App: React.FC = () => {
  const [currentTab, setCurrentTab] = useState('dashboard');
  return (
    <BrowserRouter>
      <div className="App">
          <header className="App-headser">
            <ul className="App-nav">
              {modules.map(module => ( // with a name, and routes
                  <li key={module.name} className={currentTab === module.name ? 'active' : ''}>
                    <Link to={module.routeProps.path} onClick={() => setCurrentTab(module.name)}>{module.name}</Link>
                  </li>
              ))}
            </ul>
          </header>
          <div className="App-content">
              {modules.map(module => (
                <Route {...module.routeProps} key={module.name} />
              ))}
          </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
