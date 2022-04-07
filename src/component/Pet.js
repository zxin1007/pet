import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {dataInitalize, selection} from '../state/petState'
import axios from 'axios'
import style from 'styled-components'

const Container = style.div`
    margin-top:50px;
    display: flex;
    padding: 10px;
    flex-wrap: wrap;
    gap: 10px;
    justify-items: center;
    justify-content: center;
`

const PetBlock = style.div`
    display: flex;
    justify-content: center;
    border: 1px solid black;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    background: ${props => props.isSelected ? "#d3d3d3" : "white"};
`

export default function Pet(){

    const dispatch = useDispatch();
    const pet = useSelector(state=>state.pet)

    useEffect(()=>{
        async function fetchData(){
            await axios.get("http://eulerity-hackathon.appspot.com/pets")
            .then((res)=>{
                dispatch(dataInitalize(res.data))
            })
        }
        fetchData();
    },[])

    return (
        <Container>
            {pet && 
                pet.map((p,index) => <PetBlock key={index} onClick={()=> dispatch(selection(p))} isSelected={p.isSelected? true:false}>
                                            <div>{p.title}</div>
                                            <img src={p.url} alt={p.description} style={{height:"15em", width:"15em", marginTop:"1em"}}></img>
                                            <div style={{width:"15em",marginTop:"1em", textAlign:"center"}}>{p.description}</div>
                                    </PetBlock>)
            }
        </Container>
    )
}