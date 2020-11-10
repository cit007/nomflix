import React, {useState, useEffect} from "react";
import { moviesApi, tvApi } from "../API/api";
import {Link, withRouter} from "react-router-dom"
import styled from "styled-components";
import Loader from "../Components/Loader";
import Crew from "../Components/Crew";
import Section from "../Components/Section";

const Image = styled.div`
  background-image: url(${props => props.bgUrl});

  width: 100%;
  height: 1000px; 
  background-size: cover;
  background-position: center;
  transition: opacity 0.1s linear;
  margin-right: 20px;
  opacity:0.5;
  box-shadow: 1px 10px 10px rgba(230,230,230,0.7);
  &:hover{
    transform: scale(0.98);
    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);
    opacity:1;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin-top: 30px;
  padding: 20px;
`;

const ItemList = styled.ul`

`;

const Item = styled.li`
  font-size:25px;
  font-weight:100;
  font-weight:100;
  margin-bottom: 10px;
  padding:10px;
`;

const Season = styled.div`
  display:flex;
  flex-flow:column;
  background-color:#2c3e50;
`;

const Div = styled.div`
  padding:10px;
`;

const NotFoundImage = "../assets/noPosterSmall.png";

export default function DetailCrews(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [crews, setCrews] = useState(null);
    
    // get path from props
    console.log("crews props :", props);
    const { location : {pathname} } = props;
    const { match : {params: {id}}} = props;
    const isMovie = pathname.includes("/movie/");
    console.log("crews pathname is :", pathname, isMovie, id);

    const fetchContents = async () => {
        try {
            if (isMovie) {
              const { data: {cast:crews} } = await moviesApi.movieCrews(id);
              console.log("fetch data movie crews :",crews);
              setCrews(crews);
            } else {
              const { data: {cast:crews} } = await tvApi.tvCrews(id);
              console.log("fetch data tv crews :",crews);
              setCrews(crews);
            }
        } catch {
            setError("fetch data error : crews");
        } finally {
            setLoading(false);
        }
    };

    useEffect( () => {fetchContents();}, []);
 
    return (
        <>
          {   
                loading ? <Loader/> :  crews && crews.length > 0 &&
                    <Section title="Crews">
                        {crews.map(crew => (
                        <Crew
                            key={crew.cast_id}
                            id={crew.cast_id}
                            name={crew.name}
                            character={crew.character}
                            imageUrl={crew.profile_path}
                            isMovie={true}
                        />
                        ))}
                    </Section>
            }
        </>
    );
        
        
}