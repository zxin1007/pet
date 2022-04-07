import { filter } from "../state/petState";
import {useRef} from "react"
import { useDispatch } from "react-redux";
import styled from 'styled-components'

const Form = styled.form`
        display: flex;
        justify-content: center;
        gap: 1em;
    `

export default function Search (){

    const searchInput = useRef();
    const dispatch = useDispatch();

    function handleSumbit(e){
        e.preventDefault();
        dispatch(filter(searchInput.current.value))
    }

    function handleChange(){
        dispatch(filter(searchInput.current.value))
    }

    return (
        <Form onSubmit={(e)=>handleSumbit(e)}>
            <input 
                ref={searchInput}
                onChange={()=>handleChange()}
            />
            <button>Search</button>
        </Form>
    )
}