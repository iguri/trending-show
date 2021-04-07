import {Route, Switch} from 'react-router-dom';
import Links from './Links';
import Movie from './Movie';
import Tv from './Tv';

function App() {
  return (<>
  <h1 className="heading">WorldWide Trendings</h1>
  <Switch>
    <Route exact path='/' render={()=><Links/>}/>
    <Route exact path='/movies' render={()=><Movie/>}/>
    <Route exact path='/tv' render={()=><Tv/>}/>
  </Switch>
  </>
  );
}

export default App;
