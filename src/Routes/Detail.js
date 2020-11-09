import React, {useState, useEffect} from "react";
import { moviesApi, tvApi } from "../API/api";
import styled from "styled-components";
import Loader from "../Components/Loader";

const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

const BackImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  // @SEE props
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  filter: blur(3px);
  opacity: 0.2;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  border-radius: 5px;
`;

const Section = styled.section`
  width: 70%;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
`;

const SummaryContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-around;
  font-size: 15px;
  font-weight: 300;
  
  border: 1px solid black;
  border-radius: 20px;
  border-width: 1px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  padding: 10px;
  margin: 20px 0px;
`;

const Item = styled.span`
  padding: 5px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  /* @Can not press link without z-index */
  z-index:0;
  &:hover {
      background-color: gray;
      color: black;
  }
`;

const Button = styled.a`
`;

const Overview = styled.p`
  font-size: 20px;
  font-weight: 100;
  line-height: 1.5;
  width: 70%;
`;

const NotFoundImage = "../assets/noPosterSmall.png";

export default function Detail(props) {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [detail, setDetail] = useState(null);
    
    // get path from props
    console.log("detail props :", props);
    const { location : {pathname} } = props;
    const { match : {params: {id}}} = props;
    const isMovie = pathname.includes("/movie/");
    console.log("pathname is :", pathname, isMovie, id);

    const fetchContents = async () => {
        try {
            const { data: detail } = await moviesApi.movieDetail(id);
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
              <>
                <title>
                  {detail.original_title ? detail.original_title : detail.original_name}{" "}
                  | Nomflix
                </title>
              </>
              <BackImg
                bgImage={`https://image.tmdb.org/t/p/original${detail.backdrop_path}`}
              />
              <Content>
                <Cover
                  bgImage={
                    detail.poster_path
                      ? `https://image.tmdb.org/t/p/original${detail.poster_path}`
                      : require("../assets/noPosterSmall.png")
                  }
                />
                <Section>
                  <Title>
                    {detail.original_title
                      ? detail.original_title
                      : detail.original_name}
                  </Title>
                  <SummaryContainer>
                    <Item>
                      {detail.release_date
                        ? detail.release_date.substring(0, 4)
                        : detail.first_air_date.substring(0, 4)}
                    </Item>
                    <Item>
                      {detail.runtime ? detail.runtime : detail.episode_run_time[0]} min
                    </Item>
                    <Item>
                      {detail.genres &&
                        detail.genres.map((genre, index) =>
                          index === detail.genres.length - 1
                            ? genre.name
                            : `${genre.name} | `
                        )}
                    </Item>
                    <Item>
                        <Button href={detail.imdb_id ? `https://www.imdb.com/title/${detail.imdb_id}`:"#"} target="_blank">imdb</Button>
                    </Item>
                  </SummaryContainer>
                  <Overview>{detail.overview}</Overview>
                </Section>
              </Content>
            </Container>
          )
    );
        
        
}