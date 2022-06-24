import { Link } from "react-router-dom";

function Links(props){
    return(<><Link to='/movies' className='links'><div id="container">
    <button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Movies</span>
    </button>
  </div></Link>
  <Link to='/tv'><button className="learn-more">
      <span className="circle" aria-hidden="true">
        <span className="icon arrow"></span>
      </span>
      <span className="button-text">Tv Shows</span>
    </button></Link></>)
}

export default Links;