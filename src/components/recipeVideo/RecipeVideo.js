import { useParams } from "react-router-dom";  //using this to get YouTube video ID
import ReactPlayer from 'react-player';
import './RecipeVideo.css';


function RecipeVideo() {

  let params = useParams();
  const key = params.ytRecipeId;

  return (
    <div className="react-player-container">
      {(key!=null)?<ReactPlayer controls="true" playing={true} url ={`https://www.youtube.com/watch?v=${key}`} 
      width = '90%' height='90%' />:null}
    </div>
  )
}

export default RecipeVideo