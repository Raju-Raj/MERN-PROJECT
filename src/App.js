
import NavbarHeader from './components/NavbarHeader'
import {BrowserRouter,Route,Switch,Routes} from 'react-router-dom'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import SignUp from './components/SignUp'
import ParamsData from './components/ParamsData'
import Individualdata from './components/Individualdata'
import Download from './components/Download'
import SearchFilter from './components/SearchFilter'
import SearchFilters from './components/SearchFilters'


function App() {
  return (
    <div>
      <BrowserRouter>
      <NavbarHeader/>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/about" exact component={About}/>
        <Route path="/about/:name" exact component={About}/>
        <Route path="/contact"  exact component={Contact}/>
        <Route path="/signup" exact component={SignUp}/>
        <Route path="/data" exact component={ParamsData}/>
        <Route path="/data/:id" exact component={Individualdata}/>
        <Route path="/download" exact component={Download}/>
        <Route path="/search" exact component={SearchFilters}/>
      </Switch>
      </BrowserRouter>
      {/* <BrowserRouter> 
      <NavbarHeader/>
      <Routes>
        <Route exacxt path="/" element={<Home/>}/>
        <Route exact path="/about" element={<About/>}/>
        <Route exact path="/contact"  element={<Contact/>}/>
      </Routes>
      </BrowserRouter> */}
      
    </div>
  );
}

export default App;
