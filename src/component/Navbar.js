import React from "react";
import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { defaultPet } from '../state/petState'
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

    const dispatch = useDispatch();

    return (
        <>
            <Nav>
                <li onClick={()=>dispatch(defaultPet())} style={{cursor:"pointer"}}>Home</li>
            </Nav>
            <Search />
            <Filter />
            <Outlet />
        </>
    )
}