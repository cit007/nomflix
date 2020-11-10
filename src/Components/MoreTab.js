import React from "react"
import {Route, Link, withRouter} from "react-router-dom"
import styled from "styled-components"
import DetailCompanies from "../Routes/DetailCompanies"
import DetailVideos from "../Routes/DetailVideos"

const Main = styled.main`
    margin-top: 50px;
`;

const SubMenu = styled.div`
    color:white;
    width:90%;
    height:50px;
    display:flex;
    align-items:center;
    border-radius: 20px;
    border-width: 1px;

    background-color: rgba(20,20,20,0.8);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    z-index:5;
`;

const List = styled.ul`
    display:flex;
    justify-content:flex-start;
    gap:10px;
    margin-left:20px
`;

const Item = styled.li`
    width:80px;
    height:40px;
    padding:5px;
    color:black;

    padding: 5px;
    border-radius: 20px;
    background-color: rgba(233,233,233,0.8);

    display:flex;
    justify-content:center;
    align-items:center;

    /* @Can not press link without z-index */
    z-index:0;

    &:hover {
        filter: brightness(0.8);
        background-color: black;
        transform: scale(1.1);
        color:white;
        opacity:0.5;
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
                    <Item>
                        {   isMovie?
                            <Link to={`/movie/${id}/Videos`}>Videos</Link>
                            :
                            <Link to={`/tv/${id}/Videos`}>Videos</Link>
                        }
                    </Item>
                    <Item>
                        {   isMovie?
                            <Link to={`/movie/${id}/Companies`}>Companies</Link>
                            :
                            <Link to={`/tv/${id}/Companies`}>Companies</Link>
                        }
                    </Item>
                </List>
            </SubMenu>
            
            <Route path="/movie/:id/Companies" component={DetailCompanies} />
            <Route path="/movie/:id/Videos" component={DetailVideos} />
            <Route path="/tv/:id/Companies" component={DetailCompanies} />
            <Route path="/tv/:id/Videos" component={DetailVideos} />
        </Main>
    );
}

export default withRouter(MoreTab);