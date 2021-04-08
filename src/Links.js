import { Link } from "react-router-dom";

function Links(props){
    return(<><Link to='/movies' className='links'><div id="container">
    <button class="learn-more">
      <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text">Movies</span>
    </button>
  </div></Link>
  <Link to='/tv'><button class="learn-more">
      <span class="circle" aria-hidden="true">
        <span class="icon arrow"></span>
      </span>
      <span class="button-text">Tv Shows</span>
    </button></Link></>)
}

export default Links;