import "./styles.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./MyContext";
import { useEffect, useState } from "react";


export default function App() {
  const endpoint = "/fotos.json";
  const [allPhotos, setAllPhotos] = useState([]);
  const likedPhotos = (id) => {
    const indexPhoto =  allPhotos.findIndex(photo => photo.id == id);
    allPhotos[indexPhoto].liked = !allPhotos[indexPhoto].liked;
    setAllPhotos([...allPhotos]);
  };
  const sharedData = {allPhotos, likedPhotos};
  const photoData = async () => {
    try{
      const data = await fetch (endpoint);
      const { photos } = await data.json();
      setAllPhotos(photos);   
    } catch (e){
      alert(e.message)
    }
  };
  useEffect (() => {
    photoData();
  }, []);
    
  return (
    <div className="App">
      <MyContext.Provider value={sharedData}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/favoritos" element={<Favoritos />} />
          </Routes>
        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
};
