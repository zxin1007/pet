import React from "react";
import { Outlet } from "react-router-dom";
import Filter from "./Filter";
import Search from './Search'
import styled from 'styled-components'

const Nav = styled.ul`
        display: flex;
        list-style: none;
        justify-content: end;
        gap: 50px;
        margin-right: 50px;
    `

export default function Navbar (){

    return (
        <>
            <Nav>
                <li>Home</li>
            </Nav>
            <Search />
            <Filter />
            <Outlet />
        </>
    )
}