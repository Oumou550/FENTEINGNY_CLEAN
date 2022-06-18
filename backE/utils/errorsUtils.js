module.exports.signUpErrors = (err) =>{
  let errors = {pseudo:'', email:'', password:'', ref: ''}


  if(err.message.includes('pseudo'))
    errors.pseudo = "Pseudo incorrect"

  if(err.message.includes(''))
    errors.email = `Email incorrect`;

  if(err.message.includes('password'))
    errors.password = `Le mot de passe doit faires 6 caractère au minimun`  

  if(err.code === 11000)  
    errors.pseudo = `ce pseudo est déjà pris`

  if(err.code === 11000)  
    errors.ref = `cette réference est déjà prise`

  if(err.code === 11000)  
    errors.email = `cet email est déjà enregistrer`

  return errors
}

module.exports.signInErrors = (err) =>{
  let errors = {email: '', password: ''}

  if(err.message.includes('Email')) 
    errors.email = `Email incorrect`;

  if(err.message.includes('Password'))
    errors.password = `Le mot de passe ne correspond pas`  
  
    return errors
}

module.exports.uploadErrors = (err) =>{
  let errors = {format: '', maxSize: ''};
  if(err.message.includes("invalid file"))
    errors.format = "format incompatible"

  if(err.message.includes("max size"))  
    errors.maxSize = "le fichier depasse 500ko"

  return errors
}

module.exports.categoryErrors = (err) =>{
  const errors = {name: ""}
  
  if(err.code === 11000)
    errors.name = "cette catgory est deja utiliser"

  return errors
}
