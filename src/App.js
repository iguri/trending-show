import { Route, Routes } from 'react-router-dom';
import Links from './Links';
import Movie from './Movie';
import Tv from './Tv';

function App() {
  return (<>
    <h1 className="heading">WorldWide Trendings</h1>
    <Routes>
      <Route  path='/' element={<Links />} />
      <Route  path='/movies' element={<Movie />} />
      <Route  path='/tv' element={<Tv />} />
    </Routes>
  </>
  );
}

export default App;
