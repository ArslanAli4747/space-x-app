
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';

import icon from "./assests/icon.png"
// import { useContextApi } from './store/store';
import Space from './components/pages/Space';
import Capsouls from './components/pages/Capsouls';
import SingleCap from './components/pages/SingleCap';
import Crew from './components/pages/Crew';
import SingleCrew from './components/single/SingleCrew';
import Rocket from './components/pages/Rocket';
import SingleRocket from './components/single/SingleRocket';
import Company from './components/pages/Company';
import Launches from './components/pages/Launches';
import SingleLaunch from './components/single/SingleLaunch';

function App() {
  // const {data,setData} =  useContextApi()
  // console.log("app",data);
  return (
    <BrowserRouter>
    <div className="App bg-slate-700 min-h-screen w-full relative text-white">
      <Link to="/">
      <img className='icon w-20 h-20 absolute top-2 left-2 z-50' src={icon} alt='icon'/>
    
      </Link>
      <Routes>
        <Route index path='/' element={<Home/>}/>  
        <Route path='/space/capsules' element={<Space/>}>
          <Route index  element={<Capsouls/>}/>
          <Route path=':id' element={<SingleCap/>}/>
        </Route>
        <Route path='/space' element={<Space/>}>
        <Route path='crew' element={<Crew/>}/>
        <Route path='crew/:id' element={<SingleCrew/>}/>
        <Route path='rocket' element={<Rocket/>}/>
        <Route path='rocket/:id' element={<SingleRocket/>}/>
        <Route path='company-info' element={<Company/>}/>
        <Route path='launches' element={<Launches/>}/>
        <Route path='launches/:id' element={<SingleLaunch/>}/>
        </Route>
      </Routes>
      
    </div>
    </BrowserRouter>
    
  );
}

export default App;
