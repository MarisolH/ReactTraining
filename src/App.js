import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import logo from './logo.svg';
// import './App.css';
// import FirstScreen from './screens/FirstScreen'
import ConnectedScreen from './screens/ConnectedScreen'
// import Clock from '../src/components/component/ClassComponent';
// import HookScreen from './screens/HookScreen'


export default ()=> {
  return (
    <HashRouter>
        <Switch>
          <Route path={'/'} component={ConnectedScreen}></Route>
          <Route path={'/connected'} component={ConnectedScreen}></Route>
        </Switch>
    </HashRouter>
  )
}

            // <Route path={'/HookScreen'} component={Clock} />
            // <Route path={'/'} component={ConnectedScreen} />
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
