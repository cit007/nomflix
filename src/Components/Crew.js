import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  position:relative;
  font-size: 12px;
`;

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 230px;
  background-size: cover;
  border-radius: 4px;
  background-position: center;
  transition: opacity 1s linear;
  opacity: 0.8;
`;

const ImageDescription = styled.div`
  position:absolute;
  top:0;
  left:0;
  background: rgba(255,255,255,0.7);
  border-radius: 4px;
  color: black;
  width:150px;
  height: 230px;
  visibility: hidden;

  display:flex;
  flex-flow:column;
  justify-content:space-around;
  align-items:center;
  transition: opacity 1s linear;
`;

const ImageContainer = styled.div`
  margin-bottom: 5px;
  position: relative;
  &:hover {
    ${Image} {
      opacity: 0.5;
      transform: scale(1.1);
    }
    ${ImageDescription} {
      opacity: 1;
      visibility:visible;
      transform: scale(1.1);
    }
  }
`;

const Name = styled.span`
  display: block;
  margin-bottom: 3px;
  padding: 20px;
  font-size:15px;
  font-weight:500;
  text-align:center;
`;

const Year = styled.span`
  font-size: 13px;
`;

const Character = styled.span`
`;

const Crew = ({ id, imageUrl, name, character, isMovie = false }) => {
  console.log("crew info :", imageUrl, name, id, character, isMovie);
  return(
  // <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : "https://img.icons8.com/windows/2x/no-image.png"
          }
        />

        <ImageDescription className="imgDesc">
          <Name>
            {name}
          </Name>
          <Character>
            {character}
          </Character>
        </ImageDescription>
        
      </ImageContainer>
    </Container>
  // </Link>
)};

Crew.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
  Character: PropTypes.number,
  isMovie: PropTypes.bool
};

export default Crew;
