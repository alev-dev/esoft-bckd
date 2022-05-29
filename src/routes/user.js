const { Router } = require('express');
const router = Router();
const {
    getUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser,
    login,
    getTeachers,
    getStudents,
} = require('../controllers/user');

router.get('/', getUsers);
router.get('/students', getStudents);
router.get('/teachers', getTeachers);
router.get('/:id', getUser);
router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.post('/authentication', login);
module.exports = router;
