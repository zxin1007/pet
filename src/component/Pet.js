import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {dataInitalize, selection} from '../state/petState'
import { saveAs } from 'file-saver';
import axios from 'axios'
import '../index.css'

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
    
    function downloadImg(img){
        saveAs(img.url)
    }

    return (
        <div className="petContainer">
            {pet && 
                pet.map((p,index) => <div key={index} className="pet" onClick={()=> dispatch(selection(p))}>
                                            {p.title} 
                                            <img src={p.url} alt={p.description} style={{height:"15em", width:"15em"}}></img>
                                    </div>)
            }
        </div>
    )
}