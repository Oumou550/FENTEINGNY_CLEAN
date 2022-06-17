import React, { useContext } from 'react'
import PmeRowListe from './PmeRowListe'
import { useDispatch, useSelector } from 'react-redux'
import { GlobalState } from '../global/GlobalState'
import { deleteCart } from '../redux/actions/AbonneAction'

export default function PmeListe() {

    const {cart} = useSelector(state => state)

    const state = useContext(GlobalState)

    const user = state.userApi.user
    // const cart = state.userApi.cart

    console.log(cart);

  return (
   <div className='abonnement-conteneur'>
      <hr />
    <div className=' container mt-5'>
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">Logo</th>
      <th scope="col">Nom</th>
      <th scope="col">Email</th>
      <th scope="col">Quartier</th>

      <th scope="col">Abonnement</th>
      <th scope="col">Téléphone</th>
      <th scope="col">Date debut abonnement</th>
      <th scope="col">Date fin abonnement</th>
      <th scope="col"> </th>
    </tr>
  </thead>
  <tbody>
    
    {
        cart?.map(c => <PmeRowListe c={c}/>)
    } 
  
  </tbody>
</table>
    </div>
   </div>
  )
}
