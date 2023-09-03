
import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Routes from './Routes';


function App() {
  return (
    <div>
      {/* 로그인 정보에 따라 header가 달라짐 + Route 추가 */}
      <Router>
        <Switch>
          {
            Routes.map((route)=>{
              return <Route key={route.path} exact path={route.path} component={route.component}/>
            })
          }
        </Switch>
      </Router>
    </div>
  );
}

export default App;
