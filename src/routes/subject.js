const { Router } = require('express');
const router = Router();
const {
    getSubjects,
    getSubject,
    createSubject,
    updateSubject,
    deleteSubject,
    getVideoById,
} = require('../controllers/subjects');

router.get('/', getSubjects);
router.get('/:id', getSubject);
router.post('/', createSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);
router.get('/:subjectId/video/:id', getVideoById);
module.exports = router;
