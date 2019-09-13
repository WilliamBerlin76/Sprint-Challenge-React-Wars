import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import PersonCard from "./characterCard"

export default function CardGrid() {
    const [picture, setPicture] = useState([]);
    const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
    .get('https://swapi.co/api/people')
    .then(response => {
      const characterInfo = response.data.results;
      console.log(characterInfo)
    })
    .catch(error => {
      console.log('no data for you', error)
    })
  })



  return (
      <div className='container'>

      </div>
  )
}