const User = require("../models/User");

const getUsers = async (_req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener usuarios" });
  }
};

const createUser = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;

    if (!nombre || !correo || !password) {
      return res.status(400).json({
        message: "nombre, correo y password son obligatorios",
      });
    }

    const userExists = await User.findOne({ correo: correo.toLowerCase() });
    if (userExists) {
      return res.status(409).json({ message: "El correo ya esta registrado" });
    }

    const user = await User.create({
      nombre,
      correo,
      password,
    });

    return res.status(201).json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error al crear usuario" });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.json({ message: "Usuario eliminado correctamente" });
  } catch (error) {
    return res.status(500).json({ message: "Error al eliminar usuario" });
  }
};

const updateUser = async (req, res) => {
  try {
    const { nombre, correo, password } = req.body;

    if (!nombre || !correo || !password) {
      return res.status(400).json({
        message: "nombre, correo y password son obligatorios",
      });
    }

    const existingUser = await User.findOne({
      correo: correo.toLowerCase(),
      _id: { $ne: req.params.id },
    });

    if (existingUser) {
      return res.status(409).json({ message: "El correo ya esta registrado" });
    }

    const user = await User.findByIdAndUpdate(
      req.params.id,
      {
        nombre,
        correo,
        password,
      },
      {
        new: true,
        runValidators: true,
      }
    );

    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: "Error al actualizar usuario" });
  }
};

module.exports = {
  getUsers,
  createUser,
  deleteUser,
  updateUser,
};
