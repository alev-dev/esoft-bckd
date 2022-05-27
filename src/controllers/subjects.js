const subjectModel = require('../models/subjects');

const subjectController = {
    getSubjects: async (req, res) => {
        await subjectModel
            .find()
            .then((subjects) => {
                res.json(subjects);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    getSubject: async (req, res) => {
        await subjectModel
            .findById(req.params.id)
            .then((subject) => {
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    createSubject: async (req, res) => {
        await subjectModel
            .create(req.body)
            .then((subject) => {
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    updateSubject: async (req, res) => {
        await subjectModel
            .findByIdAndUpdate(req.params.id, req.body)
            .then((subject) => {
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },
    deleteSubject: async (req, res) => {
        await subjectModel
            .findByIdAndDelete(req.params.id)
            .then((subject) => {
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getVideoById: async (req, res) => {
        const { subjectId, id } = req.params;
        await subjectModel
            .findById(subjectId)
            .then((subject) => {
                const video = subject.videos.id(id);
                res.json(video);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};

module.exports = subjectController;
