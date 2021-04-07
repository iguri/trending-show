import React,{useState, useEffect} from "react";
import axios from "axios";
import Datacard from './Datacard';

function Movie (){
    const [movieData, setmovieData] = useState([]);
    useEffect(()=>{
        getdata2()
    },[]);
    function getdata2(){
        axios('https://api.themoviedb.org/3/trending/movie/day?api_key=91d216ec6cb5cb93f831efa4ca831725')
        .then((res) => res)
        .then((data)=>{setmovieData(data.data.results)})
    }
    return(<>
            <h2>Movies</h2>
            {movieData.map((value, index)=>
                <Datacard 
                    value={value}
                    index={index}
                />
            )}
        </>
    );
}
export default Movie;