const trocCtrl = require('../controllers/trocCtrl')

const router = require('express').Router()

router.route('/trocs')
  .get(trocCtrl.getTroc)
  .post(trocCtrl.createTroc)

// router.route('/category/:id')
//   .put(categoryCtrl.updateCategory)
//   .delete(categoryCtrl.deleteCategory)



module.exports = router 