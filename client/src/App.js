import './App.css';
import { BrowserRouter, data } from 'react-router-dom';
import AppRouter from './components/AppRouter';
import Header from './components/header'
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '.';
import { check } from './http/userAPI';
import { Spinner } from 'react-bootstrap';

const App = observer(() => {
  const {user} = useContext(Context)
  const [loading, setLoading] = useState(true)
 //asdsad
 
  useEffect(()=>{
    check().then(data =>{
      user.setUser(true)
      user.setIsAuth(false)
    }).finally(()=> setLoading(false))
  }, [])

  // if (loading){
  //   return ( <Spinner animation="border" role="status">
  //     <span className="visually-hidden">Loading...</span>
  // </Spinner>)
  // }
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
});

export default App;
