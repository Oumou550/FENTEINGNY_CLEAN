import axios from 'axios'

export const ABONNE = "ABONNE";
export const DESABONNE = "DESABONNE";
export const GET_CART = "GET_CART";
export const ADD_CART = "ADD_CART";
export const DELETE_CART = "DELETE_CART"
export const SAVE_CART = "SAVE_CART";
export const RESET_CART = "RESET_CART";
export const GET_ABONNES = "GET_ABONNES";
export const GET_TROC = "GET_TROC"
export const GET_TROCS = "GET_TROCS"
export const GET_VENTE = "GET_VENTE"
export const DELETE_VENTE = "DELETE_VENTE"
export const GET_VALIDE_VENTE = "GET_VALIDE_VENTE"
export const CREATE_PME = "CREATE_PME"
export const UPDATE_PME = "UPDATE_PME"
export const DELETE_PME = "DELETE_PME"

export const getAbonnes = () => {
  return (dispatch) => {
    return axios
      .get(`${process.env.REACT_APP_API_URL}user/`)
      .then((res) => {
        // dispatch({ type: GET_POSTS, payload: array });
        dispatch({ type: GET_ABONNES, payload: res.data });
      })
      .catch((err) => console.log(err));
  };
};

export const createPme = (newPme) =>{

  return (dispatch)=>{
    console.log(newPme);
  
    return axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}user/register`,
      data: {...newPme}
    })
    .then(res =>{
      if(res.data.msg){
        alert(res.data.msg)
      }else{
        dispatch({type: CREATE_PME, payload: {...newPme}})
      }
    }) 
    .catch(err => console.log(err))
  }
}

export const updatePme = (abonne, id) =>{
  return (dispatch) => axios
    .put(`/user/update/${id}`, abonne)
    .then(res =>{
      console.log(res.data, id);
      dispatch({type: UPDATE_PME, payload: {abonne: res.data.abonne, id}})
    })
    .catch(err => console.log(err))
}

export const deletePme = (id) =>{
  return (dispatch) => axios  
    .delete(`/user/delete/${id}`)
    .then(res => dispatch({type: DELETE_PME, payload: id}))
}




export const getCart =  (token) =>{
  return async (dispatch) => {
   return await axios.get(`/user/infor`,{
     headers: {Authorization: token}
   })
     .then(async(res) => {
      //  console.log("gggggg", res?.data?.cart);
   await  dispatch({type: GET_CART, payload: res?.data?.cart})
     })
     .catch((err) => console.log(err));
 };
} 

export const getVentes = (token) =>{
 return async (dispatch) => {
  return await axios.get(`/user/infor`,{
    headers: {Authorization: token}
  })
    .then(async(res) => {
      // console.log("gggggg", res?.data?.ventes);
  await  dispatch({type: GET_VENTE, payload: res?.data?.ventes})
    })
    .catch((err) => console.log(err));
};
} 


export const getTrocs =  (token) =>{
  return async (dispatch) => {
   return await axios.get(`/user/infor`,{
     headers: {Authorization: token}
   })
     .then(async(res) => {
      //  console.log("gggggg", res?.data?.trocs);
   await  dispatch({type: GET_TROC, payload: res?.data?.trocs})
     })
     .catch((err) => console.log(err));
 };
 } 

 export const getTroc =  () =>{
  return async (dispatch) => {
   return await axios.get(`/api/trocs`)
     .then(async(res) => {
       console.log("gggggg", res?.data);
   await  dispatch({type: GET_TROCS, payload: res?.data})
     })
     .catch((err) => console.log(err));
 };
 } 

export const getValideVente = (token) =>{
  return async (dispatch) => {
    return await axios.get(`/user/infor`,{
      headers: {Authorization: token}
    })
      .then(async(res) => {
       //  console.log("gggggg", res?.data?.trocs);
    await  dispatch({type: GET_VALIDE_VENTE, payload: res?.data?.valideVente})
      })
      .catch((err) => console.log(err));
  };
}


export const addPayement = (uid, paymentID, paymentPseudo, montant, service, id) =>{
  return (dispatch)=>{
    return axios({
     method: "patch",
     url: `${process.env.REACT_APP_API_URL}user/payement/${uid}`,
     data:  {paymentID, paymentPseudo, montant, service, id}
   }) 
  }
}

export const abonneToi = (id, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}user/abonne/${id}`,
      data: { abonnes: userId },
    })
  };

};

export const desabonne = (postId, userId) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}user/desabonne/` + postId,
      data: { id: userId },
    })
      .then((res) => {
        dispatch({ type: DESABONNE, payload: { postId, userId } });
      })
      .catch((err) => console.log(err));
  };
};

export const valideVente = (valideVente) => {
  console.log(valideVente);
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}user/valideVente`,
      data: { valideVente },
    })
  };

};

// export const deleteVente = (postId, userId) => {
//   return (dispatch) => {
//     return axios({
//       method: "patch",
//       url: `${process.env.REACT_APP_API_URL}user/deleteVente/` + postId,
//       data: { id: userId },
//     })
//       .then((res) => {
//         console.log(res.data);
//         // dispatch({ type: DELETE_VENTE, payload: { postId, userId } });
//       })
//       .catch((err) => console.log(err));
//   };
// };



export const ventes = (uid, name, email, tel, quartier, commune, montant, qty, id) => {
  console.log("name :",name);
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}user/ventes/${uid}`,
      data: { name, email, tel, quartier, commune, montant, qty, id },
    })
  };
};

export const trocs = (uid, images, name, weight, email, tel, quartier, commune, id) => {
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}user/trocs/${uid}`,
      data: { images,name, weight, email, tel ,quartier, commune, id},
    })
  };
};

export const historyVentes = (token, name, email, tel, quartier, commune, montant, qty) =>{
  console.log(token);
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}user/historyVentes`,
      data: { name, email, tel, quartier, commune, montant, qty},
      headers: {Authorization: token}
    })
  };
}

export const historyTrocs = (token, name, email, tel, quartier, commune,weight, images) =>{
  return (dispatch) => {
    return axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}user/historyTrocs`,
      data: { name, email, tel, quartier, commune,weight, images},
      headers: {Authorization: token}
    })
  };
}



// export const addCart = (cart,service, token) =>{
//   console.log(cart);
//  return (dispatch) => {
//    return axios.patch(`${process.env.REACT_APP_API_URL}user/addCart`, {cart,service},{
//      headers: {Authorization: token}
//    })
//  };
// } 

export const addCart = (id, images,name,email, quartier, commune, tel, service,token) =>{
  return (dispatch) => {
    return axios({
     method: "patch",
     url: `${process.env.REACT_APP_API_URL}user/addCart`,
     data: { id, images,name,email, quartier, commune, tel, service},
     headers: {Authorization: token}
   })
  };
 } 
  

export const deleteCart = (id,token) =>{
 return (dispatch) => {
   return axios.patch(`${process.env.REACT_APP_API_URL}user/deleteCart`,{id},{
     headers: {Authorization: token}
   }) .then((res) => {
    dispatch({ type: DELETE_CART, payload: { id } });
  })
  .catch((err) => console.log(err));
 };
} 

// export const deleteCart = (id, token) =>{
//   return (dispatch) => {
//     return axios.delete(`${process.env.REACT_APP_API_URL}user/deleteCart`, {
//       headers: {Authorization: token}
//     })
//       .then((res) => {
//         dispatch({type: DELETE_CART, payload: id})
//       })
//       .catch((err) => console.log(err));
//   };
//   // return{
//   //   type: DELETE_CART,
//   //   payload: id
//   // }
// }


 export const saveCart = (items) =>{
  return{
    type: SAVE_CART,
    payload: items
  }
}

export const resetCart = () =>{
  return{
    type: RESET_CART
  }
}

// export const getUsersRequest = (search) =>{
//   return new Promise((onSuccess, onFail)=>{
//     return axios.get(`/user?&pseudo[regex]=${search}`) 
//     .then(res => {
//       onSuccess(res)
//     })
//     .catch(err => console.log(err))
//   })
// }
  

// export const getAbonnes =  (search) => {
//   return async (dispatch) => {
//     try {
//       const res = await getUsersRequest(search)
//       console.log('ggggggg', res);
//       dispatch({ type: GET_ABONNES, payload: res.data.result.users });
//     } catch (error) {
      
//     }
// };

// }

