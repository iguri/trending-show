import React from 'react';

const Card = (props)=>{
    return(
        <div className="cellphone-container">    
            <div className="movie">       
              <div className="menu"><i className="material-icons"></i></div>
              <div className="movie-img" style={{backgroundImage:`url(${props.bgImage})`}}></div>
              <div className="text-movie-cont">
                <div className="mr-grid">
                  <div className="col1">
                    <h3>{props.title}</h3>
                    <ul className="movie-gen">
                      <li>PG-13  /</li>
                      <li>{props.relase}</li>
                      <li>{props.idsstring}</li>
                    </ul>
                  </div>
                </div>
                <div className="mr-grid summary-row">
                  <div className="col2">
                    <h5>SUMMARY</h5>
                  </div>
                  <div className="col2">
                     <ul className="movie-likes">
                      <li>Score:</li>
                      <li>{props.score}</li>
                    </ul>
                  </div>
                </div>
                <div className="mr-grid">
                  <div className="col1">
                    <p className="movie-description">{props.decp}</p>
                  </div>
                </div>
                <div className="mr-grid action-row">
                  <div className="col2"><div className="watch-btn"><h4><i className="material-icons">&#xE037;</i>WATCH TRAILER</h4></div>
                  </div>
                  <div className="col6 action-btn"><i className="material-icons">&#xE161;</i>
                  </div>
                  <div className="col6 action-btn"><i className="material-icons">&#xE866;</i>
                  </div>
                  <div className="col6 action-btn"><i className="material-icons">&#xE80D;</i>
                  </div>
                </div>
              </div>
            </div>
        </div>      
    )
}

export default Card;