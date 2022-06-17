import React, { useState } from 'react'
import Info from './Info/Info';
import './../index.css'
import Footer from './Footer/Footer';
import Filter from './Filter/Filter';
import Etapes from './Etapes/Etapes'
import Communes from './Communes/Communes';
import Header from './Header/Header';
import PmeRamassage from './Pme/PmeRamassage';
import PmeRecyclage from './Pme/PmeRecyclage';

export default function Home({filtering, filtere, abonnes}) {

  const [pme, setPme] = useState('')
  const [filter, setFilter] = useState(false)
  const [toggle , setToggle] = useState(false)
  const [commune, setCommune] = useState()

  // const {abonnes}

  console.log(abonnes['ratoma']);

  return (
    <div className='container-principal'>
      <Header/>
      <Filter pme={pme} setPme={setPme} setToggle={setToggle} setCommune={setCommune}/>
      {
        !toggle ? <>
    
    <Info/>
        <Etapes/>
      <Communes/> 
  
        </> : <>

      {
        pme === "ramassage" ? 
         <PmeRamassage 
         commune={commune} toggle={toggle} data={filtering ? filter : abonnes?.users}/> :
        pme === "recyclage" ? 
        <PmeRecyclage 
         commune={commune} toggle={toggle} data={filtering ? filter : abonnes?.users}/> : ''
       }

        <Info/>
        <Etapes/>
      <Communes/>
        
        </>
      }
    
   
      <Footer/>
    </div>
  )
}
