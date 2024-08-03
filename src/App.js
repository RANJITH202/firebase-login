import { useState } from 'react';
import './App.css';
import AuthProvider from './contexts/AuthContext';
import SignIn from './Pages/Auth/Sign-in';
import SignUp from './Pages/Auth/Sign-up';
import Home from './Pages/Home/home';

function App() {
  const [route, setRoute] = useState('sign-in')
  const handleRoute = (route) => {
    setRoute(route);
  } 
  return (
    <AuthProvider>
      <div className="position-fixed">
        {route === 'sign-in' ?
          <SignIn handleRoute={handleRoute} /> : route === 'sign-up' ?
            <SignUp handleRoute={handleRoute} /> : route === 'home' ? <Home handleRoute={handleRoute} /> : ''}
      </div>
    </AuthProvider>
  );
}

export default App;
