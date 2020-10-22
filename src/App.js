import React, { useState } from 'react';
import './App.css';
import SearchBox from './components/SearchBox';
import ImageList from './components/ImageList';
import { unsplash } from './api/unsplash';

function App() {

  const[images,setImages]=useState([]);

  const fetchImages =async (text) =>{
    const response = await unsplash.get('/search/photos',{
      params:{query:text}
    });
    setImages(response.data.results)
  }

  return (
    <div className="App">
      <SearchBox onSubmit={fetchImages}></SearchBox>
      <ImageList images={images}></ImageList>
    </div>
  );
}

export default App;
