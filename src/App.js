import './App.css';
import api from './api/mainConfig';
import {useState, useEffect} from 'react';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Reviews from './components/reviews/reviews';
import RecipeVideo from './components/recipeVideo/RecipeVideo';

function App() {

  //returning a destructured array from the useState hook
  const [items, setItems] = useState([]);
  const [item, setItem] = useState();
  const [reviews, setReviews] = useState([]);

  const getItems = async () => {

    try {
      const response = await api.get("/api/v1/items");
      setItems(response.data);

    } catch(e){
      console.log(e);
    }
  }

  //method that uses axios to get data pertaining to a single item
  const getItemData = async (sku) => {
    try {
      const response = await api.get(`/api/v1/items/${sku}`);
      
      const singleItem = response.data;

      setItem(singleItem);

      setReviews(singleItem.reviewIds); //bug fixed!!!!!!
    } catch (e){
      console.log(e);
    }
  }

  //using useEffect to load getItems so that this component loads first when app is loaded
  useEffect(() => {
    getItems();
  },[])

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home items={items} />} ></Route>
          <Route path="/Video/:ytRecipeId" element={<RecipeVideo />}></Route>
          <Route path="/Reviews/:sku" element={<Reviews 
            getItemData={getItemData} 
            reviews={reviews} 
            setReviews={setReviews} 
            item={item}/>}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
