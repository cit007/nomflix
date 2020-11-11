import React from "react"
import {Link, withRouter} from "react-router-dom"
import styled from "styled-components"

const Header = styled.header`
    color:white;
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:70px;
    display:flex;
    align-items:center;

    background-color: rgba(20,20,20,0.8);
    box-shadow: 1px 10px 10px rgba(230,230,230,0.7);
    z-index:1;
`;

const List = styled.ul`
    display:flex;
    margin-left:20px
`;

const Item = styled.li`
    width:80px;
    height:30px;
    display:flex;
    justify-content:center;
    align-items:center;
    border:1px solid white;
    border-radius: 5px;
    background-color:#e74c3c;
    padding:5px;
    font-size:23px;
    font-weight:100;
    margin-left:10px;
    opacity:0.8;
    /* border-bottom: 5px solid ${props => (props.current? "#3498db": "transparent")}; */
    box-shadow: 1px 10px 10px ${props => (props.current? "#3498db": "transparent")};
    transition: border-bottom .5s ease-in-outset;

    &:hover {
        transform: scale(1.1);
        opacity:1;
    }
`;

function HeaderC(props) {
    const{location:{pathname}} = props;
    
    console.log(props,pathname)
    return (
        <Header>
            <List>
                <Item current={pathname == "/"}>
                    <Link to="/">MOVIE</Link>
                </Item>
                <Item current={pathname == "/tv"}>
                    <Link to="/tv">TV</Link>
                </Item>
                <Item current={pathname == "/search"}>
                    <Link to="/search">Search</Link>
                </Item>
            </List>
        </Header>
    );
}

export default withRouter(HeaderC);