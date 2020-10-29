import React from "react"
import {Link} from "react-router-dom"
import styled from "styled-components"

const Header = styled.header``;
const List = styled.ul`
    display:flex;
    &:hover {
        background-color:blue
    }
`;
const Item = styled.li``;

function HeaderC() {
    return (
        <Header>
            <List>
                <Item><Link to="/">Movies</Link></Item>
                <Item><Link to="/tv">TV</Link></Item>
                <Item><Link to="/search">Search</Link></Item>
            </List>
        </Header>
    );
}

export default HeaderC;