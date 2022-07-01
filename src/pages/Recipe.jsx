import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");
  const params = useParams();

  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
    );
    const detailData = await data.json();
    setDetails(detailData);
    console.log(detailData);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);
  console.log(params.name);
  return (
    <DetailsWrapper>
      <div>
        <h2>{details.title}</h2>
        <img src={details.image} alt={details.title} />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>
        {activeTab === "instructions" && (
          <div>
            <p
              dangerouslySetInnerHTML={{ __html: details.summary }}
              style={{
                letterSpacing: "0.1em",
                margin: "1rem 0 1rem 0",
                fontSize: "0.8rem",
                fontWeight: "500",
              }}
            ></p>
            <p
              dangerouslySetInnerHTML={{ __html: details.instructions }}
              style={{
                letterSpacing: "0.1em",
                margin: "1rem 0 1rem 0",
                fontSize: "0.8rem",
                fontWeight: "500",
              }}
            ></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients.map((ingredient) => (
              <li
                key={ingredient.id}
                style={{
                  letterSpacing: "0.1em",
                  fontSize: "0.8rem",
                  fontWeight: "500",
                }}
              >
                {ingredient.original}
              </li>
            ))}
          </ul>
        )}
      </Info>
    </DetailsWrapper>
  );
}

const DetailsWrapper = styled.div`
  margin: 5rem 0 5rem 0;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  border: 2px solid black;
  background: white;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 5rem;
`;

export default Recipe;
