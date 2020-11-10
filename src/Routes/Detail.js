import React, {useState, useEffect} from "react";
import { moviesApi, tvApi } from "../API/api";
import styled from "styled-components";
import Loader from "../Components/Loader";
import MoreTab from "../Components/MoreTab";

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
  margin-top: 30px;
`;

const Cover = styled.div`
  width: 30%;
  height: 92%;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-size: cover;
  opacity:0.5;
  box-shadow: 1px 10px 10px rgba(230,230,230,0.7);
  &:hover{
    transform: scale(0.98);
    box-shadow: 1px 10px 10px blue;
    opacity:0.8;
  }
`;

const Section = styled.section`
  width: 60%;
  padding: 20px;
`;

const Title = styled.h3`
  font-size: 40px;
  font-weight: 700;
`;

const SummaryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  gap:10px;
  font-size: 15px;
  font-weight: 300;
  padding: 10px;

  border: 1px solid black;
  border-radius: 20px;
  border-width: 1px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  
  margin: 20px 0px;
`;

const Item = styled.span`
  padding: 5px;
  border-radius: 20px;
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
`;

const Hr = styled.hr`
    width:98%;
    margin-top: 20px;
`;

const Button = styled.a`
  padding: 5px;
  border-radius: 20px;
  box-shadow: 1px 2px 2px white;
  /* @Can not press link without z-index */
  z-index:0;
  
  &:hover {
      transform:scale(1.1);
  }
`;

const Overview = styled.div`
  font-size: 20px;
  font-weight: 100;
  line-height: 1.5;
  width: 80%;

  display:flex;
  flex-flow: column;
  justify-content: space-evenly;
`;

const P = styled.p `
  margin-bottom:20px;
`;

const Link = styled.a `
  width:110px;
  padding: 5px;
  border-radius: 20px;
  box-shadow: 1px 2px 2px yellow;
  /* @Can not press link without z-index */
  z-index:0;
  
  &:hover {
      transform:scale(1.1);
  }
`

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
            if (isMovie){
              const { data: detail } = await moviesApi.movieDetail(id);
              console.log("fetch movie data detail :",detail);
              setDetail(detail);
            } else {
              const { data: detail } = await tvApi.tvDetail(id);
              console.log("fetch tv data detail :",detail);
              setDetail(detail);
            }
            
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
                  {isMovie && detail.original_title ? detail.original_title : detail.original_name}{" "}
                  {!isMovie && detail.original_name ? detail.original_name : detail.original_name}{" "}
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
                      { (detail.runtime || detail.runtime!==undefined) ? detail.runtime : detail.episode_run_time[0]} min
                    </Item>
                    <Item>
                      {detail.genres &&
                        detail.genres.map((genre, index) =>
                          index === detail.genres.length - 1
                            ? genre.name
                            : `${genre.name} | `
                        )}
                    </Item>
                    <Button href={(detail.imdb_id || detail.imdb_id!==undefined) ? `https://www.imdb.com/title/${detail.imdb_id}`:"#"} target="_blank">imdb</Button>
                  </SummaryContainer>

                  <Overview>
                    <P>■ OverView</P>
                    <P>{detail.overview}</P>
                    <Link href={(detail.homepage || detail.homepage!==undefined) ? detail.homepage:"#"} target="_blank">HomePage</Link>
                  </Overview>

                  {/* MORE INFO TAB */}
                  <MoreTab></MoreTab>
                  
                  
                </Section>
              </Content>
            </Container>
          )
    );   
}