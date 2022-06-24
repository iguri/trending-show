import Geners from './Geners';
import Card from './Card';
import { useState, useEffect } from 'react';
import axios from 'axios';
function DataCard(props) {

    useEffect(() => {
        getVideos()
    }, []);

    const [Video, setVideo] = useState(false);

    const bgimg = props.value.poster_path ? `https://image.tmdb.org/t/p/w500${props.value.poster_path}` : `https://st.depositphotos.com/1987177/3470/v/600/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg`;
    const relase = props.value.release_date;
    const ids = props.value.genre_ids;
    let title = props.value.title ? props.value.title : props.value.name;
    let idsstring = '';

    const score = props.value.vote_average;
    const decp = props.value.overview;

    function getVideos() {
        axios(`https://api.themoviedb.org/3/movie/${props.value.id}/videos?api_key=91d216ec6cb5cb93f831efa4ca831725&language=en-US`)
            .then((res) => res)
            .then((data) => {
                let videoId = false;                
                data.data.results.forEach(item => {
                    if (item.type == 'Trailer') {
                        videoId = item.key;
                    }
                    if (!videoId && item.type == 'Teaser') {
                        videoId = item.key;
                    }
                    if(!videoId && item.type == 'Clip'){
                        videoId = item.key;
                    }
                });
                if(!videoId){
                    videoId = data.data.results[0].key;
                }
                setVideo(videoId);
            })
    }

    for (let i = 0; i < Geners.length; i++) {
        for (let x = 0; x < ids.length; x++) {
            if (Geners[i].id === ids[x]) {
                idsstring += ` ${Geners[i].name}`;
            }
        }
    }

    function openModal(videoId) {
        props.openModal(videoId);
    }

    return (
        <Card
            key={props.index}
            decp={decp}
            relase={relase}
            title={title}
            bgImage={bgimg}
            idsstring={idsstring}
            score={score}
            isAdult={props.value.adult}
            videoId={Video}
            openModal={openModal}
        />
    )
}

export default DataCard;