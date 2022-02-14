const express =  require("express")
const router = express.Router();

const employee = require("../controllers/employee.contoller") 

router.get("/", employee.findAll);

router.post("/", employee.create)

router.patch("/:id", employee.update)

router.delete("/:id", employee.delete)


module.exports = router