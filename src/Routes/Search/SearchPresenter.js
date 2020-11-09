import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Poster from "../../Components/Poster";
import { moviesApi } from "../../API/api";


const Container = styled.div``;
const Form = styled.form``;
const Input = styled.input`
`;
const Submit = styled.input``;

const SearchPresenter = ({movieResults,tvResults,searchTerm,updateTerm,searchHandle,loading,error}) => {
    return (
        <Container>
            <Form onSubmit={searchHandle}>
                <Input type="text" placeholder = "Search Movies or TV" value={searchTerm} onChange={updateTerm}></Input>
                <Submit type="submit" value="Search" />
            </Form>
            {loading ? <Loader /> : movieResults && movieResults.length > 0 && 
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
