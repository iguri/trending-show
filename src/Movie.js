import React, { useState, useEffect } from "react";
import axios from "axios";
import Datacard from './Datacard';
import ModalView from './modal';
import Config from './config.json';


function Movie() {
    const [movieData, setmovieData] = useState([]);
    const [videoId, setVideoId] = useState('');

    const [IsModalOpen, setIsModalOpen] = React.useState(false);

    function openModal(videoId) {
        setVideoId(videoId);
        setIsModalOpen(true);
    };

    function closeModal() {
        setIsModalOpen(false);
    }

    useEffect(() => {
        getMoviesData()
    }, []);
    function getMoviesData() {
        axios(Config["trending-movies"])
            .then((res) => res)
            .then((data) => { setmovieData(data.data.results); })
    }

    return (<>
        <h2>Movies</h2>
        <ModalView modalIsOpen={IsModalOpen} closeModal={closeModal} videoId={videoId} />
        {movieData.map((value, index) =>
            <Datacard
                value={value}
                index={index}
                key={index}
                openModal={openModal}
            />
        )}
    </>
    );
}
export default Movie;