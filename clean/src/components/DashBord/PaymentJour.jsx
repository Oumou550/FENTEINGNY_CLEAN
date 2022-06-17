import React, { useContext } from 'react'
import { GlobalState } from '../global/GlobalState'

export default function Payment({setTjour}) {
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
    pay?.service === "Mariage" || pay?.service === "Baptême" || pay?.service === "Concert" &&   <tr>
                  {setTjour(pay)}
        <td>{pay.paymentID}</td>
        <td>{pay.paymentPseudo}</td>
        <td>{pay.montant}</td>
        <td>{new Date(user?.updatedAt).toLocaleDateString()}</td>
        <td>{addDaysToDate(tmpdate, 1).toLocaleDateString()}</td>
  
      </tr>
          )
      }
      </tbody>
    </table>
  )
}
