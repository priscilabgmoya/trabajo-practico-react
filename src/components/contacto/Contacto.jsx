import { useEffect, useState } from 'react';
/*import styled from 'styled-components';*/
import Title from '../title/Title';
import './contacto.css'; 
function Contacto () {
/*const Titles = styled.h1`
color: red; 
background-color: black;
padding: 10px;
text-align: center;
` ;*/
const [user, setUser] = useState([]); 
useEffect(()=>{
    console.log('useEffect Andando');
    obtenerDatos(); 
}, [])
const obtenerDatos = async () => {
    const dataUser = await fetch('https://jsonplaceholder.typicode.com/users'); 
    const dataUserJson = await dataUser.json(); 
    setUser(dataUserJson); 
}


return(
<>
{
    /** <Titles>Hola</Titles>*/
}

<div  className='container'>
<Title title= 'Lista de Usuarios consumiendo una API'/>
{
    user.map(
        userData => {
            return(
                
                    <div key={userData.id} className='containerInfo'>
                        <h2>{userData.name}</h2>
                        <ol>
                            <li>{`username: ${userData.username}`}</li>
                            <li>{`email: ${userData.email}`}</li>
                            <li>{`phone: ${userData.phone}`}</li>
                            <li>{`website: ${userData.website}`}</li>
                        </ol>
                        <h3>5 -Address: </h3>
                        <ol className='listNone'>
                            <li>{`street: ${userData.address.street}`}</li>
                            <li>{`suite: ${userData.address.suite}`}</li>
                            <li>{`city: ${userData.address.city}`}</li>
                            <li>{`geo: (lat:${userData.address.geo["lat"]}, lng:${userData.address.geo["lng"]} )`}</li>
                        </ol>
                        <h3>6 - Company: </h3>
                        <ol className='listNone'>
                            <li>{`name: ${userData.company.name}`}</li>
                            <li>{`catchPhrase: ${userData.company.catchPhrase}`}</li>
                            <li>{`bs: ${userData.company.bs}`}</li>
                        </ol>
                    </div>
            );
        }
    )
}
</div>
</>
); 
}
export default Contacto; 