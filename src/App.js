import './App.css';
import { getPosts, getRandomUser } from './Api/Data';
import { useState ,useEffect } from 'react';
import Postcard from './Api/Component/Postcard';
import Usercard from './Api/Component/Usercard';

function App() {
const[data , setData]= useState(null); // before the value is null when screen renders
const[userData , setUserData]= useState(null); //this state is for users

useEffect(()=> {
  getPosts().then((posts)=>setData(posts))   // after mounted then data shown on screen

    },[]);

    useEffect(()=> {
      getRandomUser().then((user)=>setUserData(user.results[0]))   // after mounted then data shown on screen
    
        },[]);

  return (
    <div className="App"> 
    {userData && <Usercard  data={userData}/>}
      {
        data ? data.map ((e)=> <Postcard title={e.title} body={e.body}/>) : <p>No data</p>    // postcard render from postcard component
      } 
      
    </div>
  );
}

export default App;
