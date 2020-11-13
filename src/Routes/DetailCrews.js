import React, {useState, useEffect} from "react";
import { moviesApi, tvApi } from "../API/api";
import {Link, withRouter} from "react-router-dom"
import styled from "styled-components";
import Loader from "../Components/Loader";
import Crew from "../Components/Crew";
import Section from "../Components/Section";

const Container = styled.div`
  height: 100%;
  width: 100%;

  @media screen and (max-width: 762px) {
    width: 100vw;
  }
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
        <Container>
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
        </Container>
    );
        
        
}