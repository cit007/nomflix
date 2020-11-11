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

const Title = styled.span`
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

const Rating = styled.span`
`;

const Poster = ({ id, imageUrl, title, rating, year, isMovie = false }) => {
  console.log("poster info :", imageUrl, title, rating, year, isMovie);
  return(
  <Link to={isMovie ? `/movie/${id}` : `/tv/${id}`}>
    <Container>
      <ImageContainer>
        <Image
          bgUrl={
            imageUrl
              ? `https://image.tmdb.org/t/p/w300${imageUrl}`
              : "https://image.flaticon.com/icons/png/128/3004/3004588.png"
          }
        />

        <ImageDescription className="imgDesc">
          <Title>
            {/* {title && title.length > 18 ? `${title.substring(0, 18)}...` : title} */}
            {title}
          </Title>
          <Rating>
            <span role="img" aria-label="rating">
              ⭐️
            </span>{" "}
            {rating}/10
          </Rating>
          <Year>{year}</Year>
        </ImageDescription>
        
      </ImageContainer>
    </Container>
  </Link>
)};

Poster.propTypes = {
  id: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  title: PropTypes.string.isRequired,
  rating: PropTypes.number,
  year: PropTypes.string,
  isMovie: PropTypes.bool
};

export default Poster;
