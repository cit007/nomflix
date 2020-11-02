import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";

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
