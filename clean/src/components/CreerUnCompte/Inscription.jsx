import React,{useState} from 'react'
import './inscription.css'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Inscription() {

  const [confirm, setConfrim] = useState('')
  const [items, setItems] = useState({
    pseudo: '',
    email: '',
    password: '',
    quartier: '',
    commune: '',
    tel: ''
  })

  const submit = async (e) =>{
    e.preventDefault()
    try {      
     await axios.post(`/user/register`,{...items})
     if(items.password !== confirm){
       alert("les mots de passe ne corresponde pas")
    }
     else{

       localStorage.setItem('fristLogin', true)
       window.location.href = '/'
     } 
    } catch (err) {
      if(err.response.data.msg.pseudo){
        alert(err.response.data.msg.pseudo)
      }
       if(err.response.data.msg.email){
        alert(err.response.data.msg.email)
      }
      if(err.response.data.msg.password){
        alert(err.response.data.msg.password)
      }
    }
}
  return (
    <div className='formulaire'>

        <form onSubmit={(e)=> submit(e)}>
            <h1 className='titre-inscription'>Créer Votre Compte</h1>
    <div className="form-group mb-3">
     <label for="first_name">Nom d'utilisateur</label>
     <input onChange={(e)=> setItems({...items, pseudo: e.target.value})} value={items.pseudo} type="text" className="form-control" id="first_name" name="nom" />
  </div> 
  
  <div class="form-group mb-3">
    <label for="exampleInputEmail1">Adresse email</label>
    <input onChange={(e)=> setItems({...items, email: e.target.value})} value={items.email} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <small id="emailHelp" className="form-text text-secondary">Nous ne partagerons jamais votre e-mail avec quelqu'un d'autre...</small>
  </div>

  <div className="form-group mb-3">
     <label for="first_name">Quartier</label>
     <input onChange={(e)=> setItems({...items, quartier: e.target.value})} value={items.quartier} type="text" className="form-control" id="first_name" name="nom" />
  </div> 
  
  <div className="form-group mb-3">
     <label for="first_name">Commune</label>
     <input onChange={(e)=> setItems({...items, commune: e.target.value})} value={items.commune} type="text" className="form-control" id="first_name" name="nom" />
  </div> 
  
  <div className="form-group mb-3">
     <label for="first_name">Téléphone</label>
     <input onChange={(e)=> setItems({...items, tel: e.target.value})} value={items.tel} type="text" className="form-control" id="first_name" name="nom" />
  </div> 
  
  <div class="form-group mb-3">
    <label for="exampleInputPassword1">Mot de passe </label>
    <input value={items.password} onChange={(e)=> setItems({...items, password: e.target.value})}  type="password" className="form-control" id="exampleInputPassword1" />
  </div>
  <div className="form-group mb-3">
    <label for="confirm">Confirmation</label>
    <input value={confirm} onChange={(e)=> setConfrim(e.target.value)} type="password" className="form-control" id="confirm" name="confirm" />
</div>
  <button type="submit" className="button-inscription btn btn-dark mb-4">S'inscrire</button>
  <h4 className='titre2-inscription '>Vous avez un compte</h4>
  <Link to="/connexion" type="submit" className="button2-inscription btn">Connectez-vous</Link>
</form>
    </div>
  )
}
