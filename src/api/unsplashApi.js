import axios from "axios";

const searchImages = async () => {
  try {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      headers: {
        Authorization: 'Client-ID jQ2dfYJ81i3okukzJuJ2SwuNC7wonNDi6bTVKwG2pDg'
      }, 
      params: {
        query: 'oceans'
      }
    });

    console.log(response);
    return response;

  } catch(e){
    console.log(e);
  }
};

export default searchImages;
