import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  :not(:last-child) {
    margin-top:40px;
    margin-bottom: 30px;
  }
`;

const Title = styled.span`
  margin-left: 10px;
  padding: 10px;
  font-size: 25px;
  font-weight: 200;
  background-color: black;
  border:3px solid black;
  border-radius:10px;
  opacity: 0.6;
  box-shadow: 1px 10px 10px rgba(230,230,230,0.7);

  &:hover{
    color:red;
  }
`;

const Grid = styled.div`
  margin-top: 25px;
  display: grid;
  grid-template-columns: repeat(auto-fit, 150px);
  grid-auto-rows:auto;
  grid-gap: 1px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Section;