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

    createVideo: async (req, res) => {
        const { subjectId } = req.params;
        await subjectModel
            .findById(subjectId)
            .then((subject) => {
                subject.videos.push(req.body);
                subject.save();
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    deleteVideo: async (req, res) => {
        const { subjectId, id } = req.params;
        await subjectModel
            .findById(subjectId)
            .then((subject) => {
                subject.videos.id(id).remove();
                subject.save();
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    createAtivities: async (req, res) => {
        const { subjectId } = req.params;
        await subjectModel
            .findByIdAndUpdate(subjectId, { $push: { ativities: req.body } })
            .then((subject) => {
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    deleteAtivities: async (req, res) => {
        const { subjectId, id } = req.params;
        await subjectModel
            .findById(subjectId)
            .then((subject) => {
                subject.activities.id(id).remove();
                subject.save();
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getAtivitieById: async (req, res) => {
        const { subjectId, id } = req.params;
        await subjectModel
            .findById(subjectId)
            .then((subject) => {
                const activity = subject.activities.id(id);
                res.json(activity);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    createContent: async (req, res) => {
        const { subjectId } = req.params;
        await subjectModel
            .findById(subjectId)
            .then((subject) => {
                subject.content.push(req.body);
                subject.save();
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    deleteContent: async (req, res) => {
        const { subjectId, id } = req.params;
        await subjectModel
            .findById(subjectId)
            .then((subject) => {
                subject.content.id(id).remove();
                subject.save();
                res.json(subject);
            })
            .catch((err) => {
                res.json(err);
            });
    },

    getContentById: async (req, res) => {
        const { subjectId, id } = req.params;
        await subjectModel
            .findById(subjectId)
            .then((subject) => {
                const content = subject.content.id(id);
                res.json(content);
            })
            .catch((err) => {
                res.json(err);
            });
    },
};

module.exports = subjectController;
