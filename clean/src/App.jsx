import Info from './components/Info/Info';
import Filter from './components/Filter/Filter';
import Etapes from './components/Etapes/Etapes'
import Communes from './components/Communes/Communes';
import Header from './components/Header/Header';

import 'bootstrap/dist/css/bootstrap.min.css'

// import { Carousel } from 'bootstrap';
import DashBord from './components/DashBord/DashBord';
import DashBordRecyclage from './components/DashBord/DashBordRecyclage';
import {BrowserRouter, Route, Routes, Switch} from 'react-router-dom'
import Home from './components/Home';
import Pme from './components/Pme/Pme';
import Abonnement from './components/Abonnement/Abonnement';
import Abonne from './components/Abonnement/Abonne';
import CreerUnCompte from './components/CreerUnCompte/CreerUnCompte';
import Connexion from './components/CreerUnCompte/Connexion';
import NotFound from './components/NotFound';
import Menu from './components/Header/Menu';
import Produits from './components/Pme/Produits/Produits';
import Footer from './components/Footer/Footer';
import CreatePME from './components/CreatePME/CreatePME';
import { useEffect, useContext, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAbonnes, getCart, getTrocs, getVentes,getUsersRequest, getTroc } from './components/redux/actions/AbonneAction';
import PmeListe from './components/Listes/PmeListe';
import { GlobalState } from './components/global/GlobalState';
import axios from 'axios';
import Historique from './components/Historique/Historique';


function App() {
  const {token} = useContext(GlobalState)
  const dispatch = useDispatch()
  // const [search, setSearch] = useState('')

  // useEffect(()=>{
  //   dispatch(getCart(token))
  //       const getUser = async () =>{
  //     const res = await getUsersRequest(search)
  //   }
  //    getUser()
  //   dispatch(getAbonnes())
  // },[dispatch,token])

  useEffect(()=>{
    dispatch(getAbonnes())
    dispatch(getTrocs(token))
    dispatch(getVentes(token))
    dispatch(getCart(token))
    dispatch(getTroc())
  },[dispatch,token])
    
  const state = useContext(GlobalState)

  const isAdmin = state.userApi.isAdmin

  console.log(isAdmin);

const [filtering, setFiltering] = useState(false)

const [filter, setFilter] = useState(false)

const [research, setResearch] = useState(false)
const [search, setSearch] = useState('Toutes les PME')
const {abonnes} = useSelector(state => state)
const [change, setChange] = useState(true)

console.log(abonnes);

const ResultFilter = (input) => {

  console.log(input);
  let fullList =  abonnes
  console.log("full: ", fullList);
  
  const result =  fullList?.users?.filter(item =>{
    console.log("items:",item?.pseudo);
    const name = item?.pseudo.toLowerCase()
    const term = input?.toLowerCase()
    return name.indexOf(term) !== -1
  })

  console.log("result", result);

  setFilter(result);
}



  return (
    <BrowserRouter>
    <Menu filter={ResultFilter} setFiltering={setFiltering} setResearch={setResearch} search={search} setSearch={setSearch} setChange={setChange}/>
        <Switch>
       {
         isAdmin === 3 &&  <Route path="/" component={DashBord}/>
       }
        {
          isAdmin === 2 &&   <Route path="/" component={DashBordRecyclage}/>
        }

        {
          isAdmin === 1 && <>
           {
             change ?  <Route exact path="/createPME/:id" component={CreatePME}/> :
            <>
             <Route exact  path="/createPME" component={CreatePME}/> 
            </>
           }
           <Route exact  path="/" component={()=> <Pme search={search} filtering={filtering} filter={filter} research={research} setChange={setChange}/>}/>
          
          </>
        }
  {
    isAdmin === 0 &&  <>
          <Route exact path='/'  component={()=> <Home abonnes={abonnes} filtering={filtering} filtere={filter}/>}/>
          <Route path="/pmeliste" component={PmeListe}/>
          <Route path="/articles/:id" component={Produits}/>
          <Route path="/pme" component={()=> <Pme search={search} filtering={filtering} filter={filter} research={research}/>}/>
          <Route path="/abonnement/:id" component={Abonnement}/>
          <Route path="/abonne" component={Abonne}/>
          <Route path="/compte" component={CreerUnCompte}/> 
          <Route path="/connexion" component={Connexion}/> 
          <Route path="/history" component={Historique}/> 
    </>
  }
          <Route  component={NotFound}/>
         </Switch>
         {/* <Footer/> */}
      </BrowserRouter>
  );
}

export default App;

