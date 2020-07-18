import React from 'react';
import './App.css';
import Nav from './components/layout/Nav';
import Signin from './components/sign/SignIn';
import Signup from './components/sign/SignUp';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {FormProvider} from './Contexts/Formcontext';
import Personal from './components/forms/Personal';
import Contact from './components/forms/Contact';
import Summary from './components/layout/Summary';
import Alert from './components/layout/Alert';
import {PersonalProvider} from './Contexts/PersonalContext';
import {ProtectedRoute} from './components/layout/protectedRoute';
import {ContactProvider} from './Contexts/ContactContext';
import Info from './components/layout/Information';

function App() {
  return (
    <ContactProvider>
      <PersonalProvider>
        <FormProvider>
          <Router>
            <Nav/>
            <Switch>
              <Route path='/' exact component={Signin}/>
              <Route path='/signup' exact component={Signup}/>
              <ProtectedRoute path='/personal' exact component={Personal}/>
              <ProtectedRoute path='/contact' component={Contact}/>
              <ProtectedRoute path='/summary' component={Summary}/>
              <ProtectedRoute path='/alert'   component={Alert}/>
              <ProtectedRoute path='/info' component={Info}/>
            </Switch>
        </Router>
        </FormProvider>
      </PersonalProvider>
    </ContactProvider>
      
);
}

export default App;
