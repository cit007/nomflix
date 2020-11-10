import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import { moviesApi } from "../../API/api";


const Container = styled.div`
    margin-top:50px;
    margin-left:30px;
`;
const Form = styled.form`
    font-size:40px;
`;
const Input = styled.input`
    font-size:40px;
    font-weight:100;
    /* padding: 10px; */
    border:1px solid black;
    border-radius:10px;
    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);
`;
const Submit = styled.input`
    font-size:40px;
    font-weight:100;
    /* padding:10px; */
    border:1px solid black;
    border-radius:10px;
    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);
`;

const SearchPresenter = ({movieResults,tvResults,searchTerm,updateTerm,searchHandle,loading,error}) => {
    return (
        <Container>
            <Form onSubmit={searchHandle}>
                <Input type="text" placeholder = "e.g. terminator" value={searchTerm} onChange={updateTerm}></Input>
                <Submit type="submit" value="Search" />
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
                        year={movie.release_date.substring(0, 4)}
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
                        year={tv.first_air_date.substring(0, 4)}
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
