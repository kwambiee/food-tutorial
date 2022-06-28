import React, { useEffect, useState } from 'react'



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
      {popular.map(recipe =>{
        <div>
          <img src={recipe.image} alt="Food image"/>
        <p>{recipe.title}</p>
        </div>
        
        })}
    </div>
  )
}

export default Popular