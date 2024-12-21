const userModel = require('../models/user-model');

const getAllUsers = async (req, res) => {
    try {
        const user = await userModel.getAllUsers();
        if(!user) res.json({ message: 'User Not Found' });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Get All Users' });
    }
}

const getUserById = async (req, res) => {
    try {
        const user = await userModel.getUserById(req.params.id);
        if(!user) res.json({ message: 'User Not Found' });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.json({ message: 'Error Get User By Id' });
    }
}

const addUser = async (req, res) => {
    try {
        const newUserId = await userModel.addUser(req.body);
        res.status(200).json({id: newUserId,...req.body});
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Insert Data', error });
    }
}

const updateUserById = async (req, res) => {
    try {
        const user = await userModel.updateUserById(req.params.id, req.body);
        if(!user) res.json({ message: 'User Not Found' });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Update User By Id' });
    }
}

const deleteUserById = async (req, res) => {
    try {
        const user = await userModel.deleteUserById(req.params.id);
        if(!user) res.json({ message: 'User Not Found' });
        res.json(user);
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error Delete User By Id' });
    }
}

module.exports = { getAllUsers , getUserById, addUser, updateUserById, deleteUserById };
