import {createStore} from 'redux'

const initialState = {
    pet:[]
}

const petReducer = (state=initialState, action) => {
    switch (action.type){
        case "DATA_INITALIZE":
            return {...state, pet:action.payload.map(p=> {return {...p, isSelected:false}})};

        case "SELECT_AND_UNSELECT":
            return {...state,pet:state.pet.map(p=> p.title===action.payload.title? {...p, isSelected: !p.isSelected} : p)}

        default:
            return state;
    }
}

const store = createStore(petReducer)

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

export {
    dataInitalize,
    selection,
    store
};