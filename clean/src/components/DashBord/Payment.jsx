import React, { useContext } from 'react'
import { GlobalState } from '../global/GlobalState'

export default function Payment({setTmois}) {
  const state = useContext(GlobalState)
  const user = state.userApi.user

  function addDaysToDate(date, days){
    var res = new Date(date);
    res.setDate(res.getDate() + days);
    return res;
}

var tmpdate = new Date(user?.updatedAt)

  return (
    <table className='table table-striped' >
      <thead>
        <tr>
          <th>PayementID</th>
          <th>nom</th>
          <th>montant</th>
          <th>Date debut</th>
          <th>Date fin</th>
        </tr>
      </thead>
  <tbody>
   

{
        user?.payement?.map(pay => 
        pay?.service === "Entreprises" || pay?.service === "Restaurants" || pay?.service === "Maisons"  ?  <tr>
          {setTmois(pay)}
        <td>{pay.paymentID}</td>
        <td>{pay.paymentPseudo}</td>
        <td>{pay.montant}</td>
        <td>{new Date(user?.updatedAt).toLocaleDateString()}</td>
        <td>{addDaysToDate(tmpdate, 30).toLocaleDateString()}</td>
  
      </tr> : ''
          )
      }
      </tbody>

    </table>
  )
}
