const {Router} = require("express");
const { getTodo, saveTodo, updateTodo, deleteTodo } = require("../controllers/todocontroller");

const router = Router()

router.get('/',getTodo)
router.post('/save',saveTodo)
router.post('/update',updateTodo)
router.post('/delete',deleteTodo)


module.exports = router;
