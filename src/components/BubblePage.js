import React, { Component, useEffect, useState } from "react";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

// import { editColorService, deleteColorService } from '../services/colorServices';
import fetchColorService from '../services/fetchColorService';

const BubblePage = () => {
  const [colors, setColors] = useState([]);
  const [editing, setEditing] = useState(false);

  const toggleEdit = (value) => {
    setEditing(value);
  };

  const saveEdit = (editColor) => {
    setEditing(editColor)
  };

  const deleteColor = (colorToDelete) => {
    setColors(colors.filter(color => color!== colorToDelete));
  };
  useEffect(() => {
    fetchColorService()
      .then(({data}) => {
        setColors(data);
        
      })
      .catch(e => console.log(e));
  }, []);


  return (
    <div className="container">
      <ColorList colors={colors} editing={editing} toggleEdit={toggleEdit} saveEdit={saveEdit} deleteColor={deleteColor}/>
    
      <Bubbles colors={colors}/>  
    </div>
  );
};

export default BubblePage;

//Task List:
//1. When the component mounts, make an axios call to retrieve all color data and push to state.
//2. Complete saveEdit, deleteColor functions
