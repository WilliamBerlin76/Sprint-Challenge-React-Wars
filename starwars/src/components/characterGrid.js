import React, { useState, useEffect } from "react";
import axios from 'axios';
import styled from "styled-components";
import PersonCard from "./characterCard"

export default function CardGrid() {
    const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
    .get(`https://swapi.co/api/people`)
    .then(response => {
      const people = response.data.results;
      console.log(people);
      setCharacter(people)
    })
    .catch(error => {
      console.log('no data for you', error)
    })
  }, [])


  return (
      <div className='container'>
          <div className='entry'>
              {character.map(item =>{
                  return <PersonCard key={item} name={item.name} height={item.height} mass={item.mass}/>
              })}
          </div>
      </div>
  )
}