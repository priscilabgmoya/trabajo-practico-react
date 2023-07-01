import { useState , useEffect} from 'react';
import Formulario from './components/Formulario/Formulario';
import './App.css'; 
import Contacto from './components/contacto/Contacto';
import { Routes, Route } from "react-router-dom"; 
import Header from './components/header/Header';
import Inicio from './components/inicio/Inicio';
import ListaTarea from './components/lista-tarea/ListaTareas';


function App() {
  /*
  const [dev, setDev] = useState(0); 
  const [test, setTest] = useState('cambio'); 
  //! ejecuta  el codigo que tiene dentro del efecto en el  montaje
  //! y en cada actulizacion 
  //! escucha cuando el componente se monta (es decir cuando se inserta en el html)y se actuliza
  useEffect (()=>{
    console.log('El useEffect se acaba de ejecutar forma 1');
  });
  //! solamente escucha al que ponngamos que escuche al que se monte y se actulice
  useEffect (()=>{
    console.log('El useEffect se acaba de ejecutar forma 2, esuchando a un solo hook');
  }, [test]);
  //! solo escucha cuando el componente se monta, es decir no escucha la actulizacion
  useEffect (()=>{
    console.log('El useEffect se acaba de ejecutar forma 3');
  }, []);
  //! solo se escucha cuando se monta , se desmonta y no esta escuchando ningun cambio
  useEffect (()=>{
    console.log('El useEffect se acaba de ejecutar forma 4');
    return ()=>{
      console.log('El useEffect se acaba de desmontar de forma 4');
    }
  }, []);*/
  return (
    <>
    <Header/>
         <Routes>
         <Route path="/" element={ <Inicio /> } />
        <Route path="formulario" element={ <Formulario/> } />
        <Route path="contacto" element={ <Contacto /> } />
        <Route path='lista-de-tarea' element={<ListaTarea />} />
      </Routes>

    {

      /** 
       *  <Route path="/" element={ <Inicio /> } />
       * <Formulario/> 
       * <button variant='primary' onClick={()=> {setDev(dev+1)}}> {dev}</button>
      <button variant='danger' onClick={()=> {setTest('holi')}}> {test}</button>
      */
    }
   

    </>
  )
}

export default App; 
