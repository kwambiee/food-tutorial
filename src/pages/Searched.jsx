import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Searched() {
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();

  const getSearched = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
    );
    const recipes = await data.json();
    setSearchedRecipes(recipes.results);
    console.log(recipes);
  };

  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  console.log(params.search);
  return (
    <Grid>
      {searchedRecipes.map((recipe) => (
        <Card key={recipe.id}>
          <img src={recipe.image} alt={recipe.title} />
          <h4>{recipe.title}</h4>
        </Card>
      ))}
    </Grid>
  );
}
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 2rem;
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
  }
`;
export default Searched;
