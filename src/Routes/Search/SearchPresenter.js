import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import { moviesApi } from "../../API/api";


const Container = styled.div`
    width: 80%;
    margin-top:50px;
    margin-left:30px;
`;
const Form = styled.form`
    font-size:30px;
`;
const Input = styled.input`
  width:200px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url(${props => props.bgUrl});
  background-size: 20px;
  border-radius: 4px;
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
  -webkit-transition: width 0.4s ease-in-out;
  transition: width 0.4s ease-in-out;
    &:focus{
        width: 100%;
    }
    /* font-size:30px;
    font-weight:100;
    
    border:1px solid black;
    border-radius:10px;
    box-shadow: 1px 10px 10px rgba(230,230,230,0.7); */
`;
const Submit = styled.input`
    font-size:30px;
    font-weight:100;
    background-color:black;
    /* padding:10px; */
    border:1px solid black;
    border-radius:10px;
    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);
`;

const SearchPresenter = ({movieResults,tvResults,searchTerm,updateTerm,searchHandle,loading,error}) => {
    return (
        <Container>
            <Form onSubmit={searchHandle}>
                <Input bgUrl="https://image.flaticon.com/icons/png/128/44/44623.png" type="text" placeholder = "" value={searchTerm} onChange={updateTerm}></Input>
                {/* <Submit type="submit" value="Search" /> */}
            </Form>
            {
                loading ? 
                <Loader /> 
                : 
                movieResults && movieResults.length > 0 && 
                <Section title="Movie Results">
                    {movieResults.map(movie => (
                    <Poster
                        key={movie.id}
                        id={movie.id}
                        imageUrl={movie.poster_path}
                        title={movie.original_title}
                        rating={movie.vote_average}
                        year={movie.release_date?movie.release_date.substring(0, 4):""}
                        isMovie={true}
                    />
                    ))}
                </Section>
            }
            {
                loading ? 
                <Loader /> 
                : 
                tvResults && tvResults.length > 0 && 
                <Section title="TV Show Results">
                    {tvResults.map(tv => (
                    <Poster
                        key={tv.id}
                        id={tv.id}
                        imageUrl={tv.poster_path}
                        title={tv.original_title}
                        rating={tv.vote_average}
                        year={tv.first_air_date?tv.first_air_date.substring(0, 4):""}
                    />
                    ))}
                </Section>
            }
        </Container>
    );
};

SearchPresenter.propTypes = {
    movieResults: PropTypes.array,
    tvResults: PropTypes.array,
    searchTerm: PropTypes.string.isRequired,
    updateTerm: PropTypes.func.isRequired,
    searchHandle: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired
};

export default SearchPresenter;
