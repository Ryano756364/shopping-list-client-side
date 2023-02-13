import './App.css';
import api from './api/mainConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';

function App() {

  //returning a destructured array from the useState hook
  const [items, setItems] = useState([]);

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
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home items={items} />} ></Route>

        </Route>
      </Routes>
    </div>
  );
}

export default App;
