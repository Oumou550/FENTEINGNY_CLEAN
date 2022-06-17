import React, { useEffect, useState } from 'react'
import image2 from './tasse-4.jpg'
import image3 from './planche.jpg'
import image4 from './b-vingt-l.jpg'
import image5 from './tabouret.jpg'
import image6 from './p-1.jpg'
import image7 from './bulloire2.jpg'
import image8 from './dix-l.jpg'
import image9 from './dix-l2.jpg'
import image10 from './gobelet.jpg'
import image11 from './quinze-l.jpg'
import image12 from './poubelle.jpg'
import './article.css'
import ItemsArticles from './ItemsArticles'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export default function Articles() {

  const {troc} = useSelector(state => state)

  // const state

  // const user = 
  return (
    <div>
      <div className='entete-article'>
          <h2>
              Transformez vos ordures en <span className='entete-article-titre'> or dûr</span>
          </h2>
      </div>
        
   <div className="">
   <div className="row contenu-1 d-inline-flex align-items-center">

    {
      troc?.map(t => <ItemsArticles t={t}/>)
    }  
  </div>
   </div>
    </div>
  )
}
