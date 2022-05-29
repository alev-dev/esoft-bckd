const { Router } = require('express');
const router = Router();
const {
    getSubjects,
    getSubject,
    createSubject,
    updateSubject,
    deleteSubject,
    getVideoById,
    getAtivitieById,
    getContentById,
    createContent,
    createAtivities,
    deleteAtivities,
    deleteContent,
    createVideo,
    deleteVideo,
} = require('../controllers/subjects');

router.get('/', getSubjects);
router.get('/:id', getSubject);
router.post('/', createSubject);
router.put('/:id', updateSubject);
router.delete('/:id', deleteSubject);
router.get('/:subjectId/video/:id', getVideoById);
router.post('/:subjectId/video', createVideo);
router.delete('/:subjectId/video', deleteVideo);
router.get('/:subjectId/ativitie/:id', getAtivitieById);
router.get('/:subjectId/content/:id', getContentById);
router.post('/:subjectId/content', createContent);
router.post('/:subjectId/ativitie', createAtivities);
router.delete('/:subjectId/ativitie/:id', deleteAtivities);
router.delete('/:subjectId/content/:id', deleteContent);

module.exports = router;
