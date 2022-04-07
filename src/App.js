import {HashRouter, Routes, Route} from 'react-router-dom'
import Pet from './component/Pet'
import Navbar from './component/Navbar'
import Filter from './component/Filter';
import Search from './component/Search';

function App(props) {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Navbar />} >
          <Route path='/' element={<Pet />}/>
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
