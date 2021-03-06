import React, {useState, useEffect} from "react";
import { moviesApi, tvApi } from "../API/api";
import {Link, withRouter} from "react-router-dom"
import styled from "styled-components";
import Loader from "../Components/Loader";
import MoreTab from "../Components/MoreTab";

const Image = styled.div`
  background-image: url(${props => props.bgUrl});
  width: 30px;
  height: 30px;
  background-size: cover;
  background-position: center;
  transition: opacity 0.1s linear;
  margin-right: 20px;
  z-index: 0;

  &:hover {
    filter: brightness(0.8);
    transform: scale(3);
  }
`;

const Container = styled.div`
  height: 100vh;
  width: 100%;
  margin-top: 30px;
  padding: 20px;
  
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
  padding:10px;
  display:flex;
  justify-content:flex-start;
  align-items:center;
`;


const NotFoundImage = "../assets/noPosterSmall.png";

export default function DetailCompanies(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [detail, setDetail] = useState(null);
    
    // get path from props
    console.log("detail companies props :", props);
    const { location : {pathname} } = props;
    const { match : {params: {id}}} = props;
    const isMovie = pathname.includes("/movie/");
    console.log("detail companies pathname is :", pathname, isMovie, id);

    const fetchContents = async () => {
        try {
            const { data: {production_companies: detail} } = await moviesApi.movieDetail(id);
            console.log("fetch data detail :",detail);
            setDetail(detail);
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
                  {  (detail && detail.length) > 0 ?
                    detail.map ( company => (
                    <Item key={company.id}>
                      <Image
                        bgUrl={
                          company.logo_path
                            ? `https://image.tmdb.org/t/p/w300/${company.logo_path}`
                            : "https://img.icons8.com/windows/2x/no-image.png"
                        }
                      />
                      {company.name}
                    </Item>) )
                    :
                    <Item>"No Result Found..."</Item>
                  }
                </ItemList>
            </Container>
          )
    );
        
        
}