import Geners from './Geners';
import Card from './Card';
function DataCard(props){
    const bgimg = props.value.poster_path ? `https://image.tmdb.org/t/p/w500${props.value.poster_path}` : `https://st.depositphotos.com/1987177/3470/v/600/depositphotos_34700099-stock-illustration-no-photo-available-or-missing.jpg`;
    const relase = props.value.release_date;
    const ids = props.value.genre_ids;
    let title = props.value.title ? props.value.title : props.value.name;
    let idsstring = '';

    const score = props.value.vote_average;
    const decp = props.value.overview;

    for(let i = 0; i < Geners.length; i++){
        for(let x = 0; x < ids.length; x++){
            if(Geners[i].id === ids[x]){
                idsstring += ` ${Geners[i].name}`;
            }
        }
    }
    return(
        <Card
            key={props.index}
            decp={decp}
            relase={relase}
            title={title}
            bgImage={bgimg}
            idsstring={idsstring}
            score={score}
        />
    )
}

export default DataCard;