import React from "react"
import {Route, Link, withRouter} from "react-router-dom"
import styled from "styled-components"
import DetailCompanies from "../Routes/DetailCompanies"
import DetailVideos from "../Routes/DetailVideos"
import DetailSeasons from "../Routes/DetailSeasons"
import DetailCrews from "../Routes/DetailCrews"

const Main = styled.main`
    margin-top: 50px;
`;

const SubMenu = styled.div`
    color:white;
    width:100%;
    display:flex;
    align-items:center;
    border-radius: 20px;
    border-width: 1px;

    background-color: rgba(20,20,20,0.8);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index:0;
`;

const List = styled.ul`
    display:flex;
    justify-content:flex-start;
    gap:10px;
    padding: 10px;
    width: 100%;
    z-index:0;
    /* margin-left:20px; */

    @media screen and (max-width: 762px) {
        flex-direction : column;
    }
`;

const Item = styled.li`
    /* width:100%; */
    background-color: #f1f1f1;
    color:black;
    padding: 5px;
    border-radius: 20px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    /* @Can not press link without z-index */
    z-index:0;

    &:hover {
        background:#f0f0f0;
        opacity:0.7;
    }

    @media screen and (max-width: 762px) {
        border: 2px solid gray;
    }
`;

function MoreTab(props) {
    // get path from props
    console.log("more detail props :", props);
    const { location : {pathname} } = props;
    const { match : {params: {id}}} = props;
    const isMovie = pathname.includes("/movie/");
    console.log("moretab (tv or movie)pathname is :", pathname, isMovie, id);
    return (
        <Main>
            <SubMenu>
                <List>
                    
                    {   isMovie?
                        <Link to={`/movie/${id}/Videos`}><Item>Videos</Item></Link>
                        :
                        <Link to={`/tv/${id}/Videos`}><Item>Videos</Item></Link>
                    }
                
                    {   isMovie?
                        <Link to={`/movie/${id}/Companies`}><Item>Companies</Item></Link>
                        :
                        <Link to={`/tv/${id}/Companies`}><Item>Companies</Item></Link>
                    }
                    
                    {   isMovie?
                        <></>
                        :
                        <Link to={`/tv/${id}/Seasons`}><Item>Seasons</Item></Link>
                    }
                    
                    
                    {   isMovie?
                        <Link to={`/movie/${id}/Crews`}><Item>Crew</Item></Link>
                        :
                        <Link to={`/tv/${id}/Crews`}><Item>Crew</Item></Link>
                    }
                    
                </List>
            </SubMenu>
            
            <Route path="/movie/:id/Companies" component={DetailCompanies} />
            <Route path="/movie/:id/Videos" component={DetailVideos} />
            <Route path="/movie/:id/Crews" component={DetailCrews} />
            <Route path="/tv/:id/Companies" component={DetailCompanies} />
            <Route path="/tv/:id/Videos" component={DetailVideos} />
            <Route path="/tv/:id/Seasons" component={DetailSeasons} />
            <Route path="/tv/:id/Crews" component={DetailCrews} />
        </Main>
    );
}

export default withRouter(MoreTab);