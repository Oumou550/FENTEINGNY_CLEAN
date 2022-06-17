import React, { useContext, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { GlobalState } from '../../global/GlobalState'
import { historyTrocs, trocs } from '../../redux/actions/AbonneAction'
import image1 from './douze-l.jpg'

export default function ItemsArticles({t}) {

  const {abonnes} = useSelector(state => state)
  const [article, setArticle] = useState([])
  const state = useContext(GlobalState)
  const {token} = useContext(GlobalState)
  const isLogged = state.userApi.isLogged
  const user = state.userApi.user
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(()=>{
    if(params){
      abonnes?.users?.map(abonne => {
        if(abonne._id === params.id) {
          setArticle(abonne)
          console.log("ppp: ", abonne);
        }
      })
    }
    
  },[params, abonnes, article])
  
  console.log(article);

  const redirect = async () =>{
    if(!isLogged){
     alert("Veuillez vous connectez ou enregistez vous pour vous abonné a cette PME")
      return    window.location.href = `connexion`
    } 

    window.location.href = `/history`
    alert('votre choix a ete valider avec success')
    dispatch(historyTrocs(token, article?.pseudo, article?.email, article?.tel, article?.quartier, article?.commune,t?.weight, t?.images))
  await dispatch(trocs(article?._id, t?.images, user?.pseudo, t?.weight, user?.email , user?.tel, user?.quartier, user?.commune, user?._id))
    
  }
  return (
    <section className="produ col-sm col-md-3 mb-3">
     <div className="card">
        <img className='card-img-top rounded w-100' height="270px"  src={t?.images?.url}/>
     <div className="card-body">
    <aside>
        <div className='article-info d-inline-flex'>
        <p style={{textAlign: 'justify'}} className='article-nom'>{t.desc}</p>
        </div>
        <div className='d-flex justify-content-between'>
        <div onClick={()=> redirect()} className="btn btn-success">choisir</div>
        <div className='h4'>{t.weight} kg</div>
        </div>
    </aside>
    </div>
        </div>
</section>

  )
}
