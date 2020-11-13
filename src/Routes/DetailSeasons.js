import React, {useState, useEffect} from "react";
import { moviesApi, tvApi } from "../API/api";
import {Link, withRouter} from "react-router-dom"
import styled from "styled-components";
import Loader from "../Components/Loader";
import MoreTab from "../Components/MoreTab";

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  max-width:100%;
  height:1000px;
  background-size: cover;
  background-position: center;
  transition: opacity 0.1s linear;
  opacity:0.5;
  box-shadow: 1px 10px 10px rgba(230,230,230,0.7);
  &:hover{
    transform: scale(0.98);
    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);
    opacity:1;
  }

  @media screen and (max-width: 762px) {
    max-width: 100%;
    max-height: 100%;
    object-fit:cover;
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 80%;
  margin-top: 30px;

  @media screen and (max-width: 762px) {
    width: 100vw;
  }
`;

const ItemList = styled.ul`

`;

const Item = styled.li`
  font-size:25px;
  font-weight:100;
  font-weight:100;
  margin-bottom: 10px;
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

export default function DetailSeasons(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [details, setDetails] = useState(null);
    
    // get path from props
    console.log("details seasons props :", props);
    const { location : {pathname} } = props;
    const { match : {params: {id}}} = props;
    const isMovie = pathname.includes("/movie/");
    console.log("details seasons pathname is :", pathname, isMovie, id);

    const fetchContents = async () => {
        try {
            const { data: {seasons: details} } = await tvApi.tvDetail(id);
            console.log("fetch data tv season details :",details);
            setDetails(details);
        } catch {
            setError("fetch data error : nowPlaying");
        } finally {
            setLoading(false);
        }
    };

    useEffect( () => {fetchContents();}, []);
 
    return (
        loading ? (
            <>
              <title>Loading | Nomflix</title>
              <Loader />
            </>
          ) : (
            <Container>
                <ItemList>
                  {  (details && details.length) > 0 ?
                    details.map ( season => (
                    <Item key={season.id}>
                      <Season>
                        <Div>
                          ■ {season.name} : {season.air_date}
                        </Div>
                        
                        <Image
                          bgUrl={
                            season &&
                            season.poster_path ?
                              `https://image.tmdb.org/t/p/w300/${season.poster_path}`
                              : "https://img.icons8.com/windows/2x/no-image.png"
                          }
                        />
                      </Season>
                    </Item>) )
                    :
                    <Item>"No Result Found..."</Item>
                  }
                </ItemList>
            </Container>
          )
    );
        
        
}