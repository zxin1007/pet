import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

const initialState = {
    pet:[],
    originalPet:[]
}

const petReducer = (state=initialState, action) => {
    switch (action.type){
        case "DATA_INITALIZE":
            const arr = action.payload.map(p=> {return {...p, isSelected:false}});
            return {...state, pet:arr, originalPet:arr};

        case "SELECT_AND_UNSELECT":
            return {...state,pet:state.pet.map(p=> p.title===action.payload.title? {...p, isSelected: !p.isSelected} : p),originalPet:state.originalPet.map(p=>p.title===action.payload.title? {...p, isSelected: !p.isSelected} : p)};

        case "SELECT_ALL":
            return {...state,pet:state.pet.map(p=>{return{...p,isSelected:true}}),originalPet:state.originalPet.map(p=>{return{...p,isSelected:true}})};

        case "CLEAR_ALL":
            return {...state,pet:state.pet.map(p=>{return{...p,isSelected:false}}),originalPet:state.originalPet.map(p=>{return{...p,isSelected:false}})};

        case "FILTER":
            return {...state, pet:action.payload? state.pet.filter(p=> p.title.toLowerCase().includes(action.payload.toLowerCase())||p.description.toLowerCase().includes(action.payload.toLowerCase())):state.originalPet,originalPet:state.originalPet.map(p=>{return{...p,isSelected:false}})}

        default:
            return state;
    }
}

const store = createStore(petReducer, applyMiddleware(thunk))

const dataInitalize = (data)=>{
    return {
        type:"DATA_INITALIZE",
        payload:data
    }
}

const selection = (selectedData)=>{
    return {
        type:"SELECT_AND_UNSELECT",
        payload:selectedData
    }
}

const selectAll = ()=>{
    return {
        type:"SELECT_ALL",
    }
}

const clearAll = ()=>{
    return {
        type:"CLEAR_ALL",
    }
}

const filter = (keyword)=>{
    return {
        type:"FILTER",
        payload:keyword
    }
}

export {
    dataInitalize,
    selection,
    selectAll,
    clearAll,
    filter,
    store
};