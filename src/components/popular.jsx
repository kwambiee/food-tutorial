import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

function Popular() {
const [popular, setPopular]= useState([])

  const getPopular = async()=>{
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`)
    const data = await api.json() 
    setPopular(data.recipes)
  }

  useEffect(()=>{
  getPopular()
  },[])

  return (
    <div>
        <Wrapper>
          <h3>Popular Picks</h3>
          <Splide options={{perPage:4,arrow:false,pagination:false,drag:"free",gap:"5rem"}}>
            {popular.map(recipe =>(
              <SplideSlide key={recipe.id} >
                <Card >
                  <img src={recipe.image} alt={recipe.title}/>
                  <p>{recipe.title}</p>
                  <Gradient />
                </Card>
              </SplideSlide>
            ))}
          </Splide>  
        </Wrapper>
    </div>
  )
}

const Wrapper = styled.div `
  margin:4rem 0`;

const Card = styled.div `
  min-height:25rem;
  border-radius:2rem;
  overflow:hidden;
  position:relative;
  
  img{
    border-radius:2rem;
    object-fit:cover;
    height:100%;
    width:100%;
    position:absolute;
    left:0;
  }
  
  p{
    position:absolute;
    z-index:8;
    left:50%;
    bottom:0%;
    transform:translate(-50%,0%);
    color:white;
    font-size:1rem;
    font-weight:600;
    text-align:center;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:40%;
  }`

  const Gradient = styled.div`
  position:absolute;
  z-index:3;
  width:100%;
  height:100%;
  background:linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5))`;
  
export default Popular