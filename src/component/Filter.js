import {selectAll, clearAll} from '../state/petState'
import { useDispatch, useSelector } from "react-redux";
import { saveAs } from 'file-saver';
import JSZip from 'jszip'
import {getBinaryContent} from 'jszip-utils'

export default function Filter (){

    const dispatch = useDispatch()
    const pet = useSelector(state=>state.pet)
    const zip = new JSZip();

    function downloadImg(){
        //saveAs(img.url)
        pet.map(p=> p.isSelected? zip.file(`${p.title}.png`, urlToPromise(p.url), {binary:true}):"")
        zip.generateAsync({type:"blob"}).then((content)=>{
            saveAs(content,"pets.zip")
        })
    }

    function urlToPromise(url) {
        return new Promise(function(resolve, reject) {
            getBinaryContent(url, function (err, data) {
                if(err) reject(err);
                else resolve(data);
            });
        });
    }

    return (
        <div className="filter">
            <button onClick={()=>dispatch(selectAll())}>Select All</button>
            <button onClick={()=>dispatch(clearAll())}>Clear All</button>
            <button onClick={()=>downloadImg()}>Download All</button>
        </div>
    )
}