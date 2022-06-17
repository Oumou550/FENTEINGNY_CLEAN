const trocModel = require('../models/trocModel')

const trocCtrl = {
  getTroc: async (req, res) =>{
    try {  
      const troc = await trocModel.find().sort({createdAt: -1})
      if(troc){
        res.json(troc)
      }
    } catch (err) {
      return res.status(400).json({msg: err.message})
    }
  },

  createTroc: async (req, res) =>{
    try {
      const {desc, weight, images} = req.body
      const troc = await trocModel.findOne({desc, weight, images})
      // if(troc) return res.json({msg: "cette catégorie existe déjà"})
      const newTroc = new trocModel({
        desc, weight, images
      })

      await newTroc.save((err, data)=>{
        if(err) throw err

        res.json(data)
      })
  
    } catch (err) { 
     return res.status(400).json({msg: err.message})   
    }
  },
    
//   deleteCategory: async (req, res) =>{
//     try {
//       const products = await productModel.findOne({category: req.params.id})
//       if(products) return res.status(400).json({msg: "Please delete all products with a relationship"})
//       await trocModel.findByIdAndDelete(req.params.id)
//       res.json({msg: "Catégorie supprimé"})
//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
//   },

//   updateCategory: async (req, res) =>{
//     try {
//       const {name} = req.body
//       await categoryModel.findOneAndUpdate({_id: req.params.id},
//         {
//           name
//         },
//         {new: true},
//           (err, data)=>{
//           if(err) throw err

//           res.json(data)
//         })
//       // res.json({msg: "Updated category"})
//     } catch (err) {
//         return res.status(500).json({msg: err.message})
//     }
//   }

}

module.exports = trocCtrl