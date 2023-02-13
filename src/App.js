import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  //returning a destructured array from the useState hook
  const [items, setItems] = useState();

  const getItems = async () => {

    try {
      const response = await api.get("/api/v1/items");

      console.log(response.data);
  
      setItems(response.data);

    } catch(e){
      console.log(e);
    }
  }

  //using useEffect to load getItems so that this component loads first when app is loaded
  useEffect(() => {
    getItems();
  },[])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
