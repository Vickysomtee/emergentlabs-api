const db = require("../models");
const Employee = db.employee;

exports.create = async (req, res) => {
  // Validate request
  if (
    !req.body.firstName &&
    req.body.lastName &&
    req.body.email &&
    req.body.role &&
    req.body.contact
  )
    return res.status(400).send({ message: "Content can not be empty!" });

  // Create an employee
  const employee = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    role: req.body.role,
    contact: req.body.contact,
  };

  // Save Employee in the database

  try {
    const newEmployee = await Employee.create(employee);
    res.status(200).json({newEmployee})
  } catch (error) {
    res.status(500).send({
      message:
        error.message || "Some error occurred while creating the employee.",
    });
  }
};

// Retrieve all Tutorials from the database.
exports.findAll = async (req, res) => {
  try {
    const employees = await Employee.findAll();

    res.status(200).json({ employees });
  } catch (err) {
    res.status(500).json({
      message: err.message || "Some error occurred while retrieving employees.",
    });
  }
};

// Update a Tutorial by the id in the request
exports.update = async (req, res) => {
  const id = req.params.id;
  const data = req.body;

  try {
    const updatedEmployee = await Employee.update(data, { where: { id: id } });

    res.status(200).json({ message: "Employee Updated Succesfully", updatedEmployee });
  } catch (error) {
    res
      .status(500)
      .send({ message: error.message || `Error updating Employee with${id}` });
  }
};

// Delete an employee with the specified id in the request
exports.delete = async (req, res) => {
  const id = req.params.id;

  try {
    await Employee.destroy({ where: { id: id } });
    res.status(200).json({ message: "Employee Deleted Successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
