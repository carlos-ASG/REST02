const express = require('express');
const router = express.Router();
const projectController = require('../controllers/projectController');
const validaciones = require('../utils/validations');


router.get('/', (req, res)=> {
   const projects = projectController.getAllProjects();
   if(projects.length > 0){
    res.status(200).json(projects);
   }else{
    res.status(404).json({code:404, message:"Project not found"})
   }
});

router.get('/:id', (req, res)=> {
    const { id } = req.params;
    const project = projectController.getProjectById(id);
    console.log(project);
    if(project)
        res.status(200).json(project);
    else
        res.status(404).json({code: 404, message: 'Project not found'});
});

router.post('/', (req, res)=> {
    console.log(req.body);
    const { name, description, startDate, endDate, status, teamMembers, budget } = req.body;
    console.log("hol");
    console.log(validaciones.validateStatus(req.body));

    if(!validaciones.validatedKeys(req.body)){
        res.status(400).json({ code: 400, message: 'Missing required key: name' });
    }else if(!validaciones.validateDateRange(req.body)){
        res.status(400).json({ code: 400, message: 'Invalid date range' });
    }else if(!validaciones.validateStatus(req.body)){
        res.status(400).json({ code: 400, message: 'Invalid status' });
    }else{
        const newProject = projectController.createProject(name, description, startDate, endDate, status, teamMembers,budget);
        res.status(200).json(newProject);
    }
});

router.put('/:id', (req, res) => {
    const projectToUpdated  = req.body;

    if(!validaciones.validatedKeys(req.body)){
        res.status(400).json({ code: 400, message: 'Missing required key: name' });
    }else if(!validaciones.validateDateRange(req.body)){
        res.status(400).json({ code: 400, message: 'Invalid date range' });
    }else if(!validaciones.validateStatus(req.body)){
        res.status(400).json({ code: 400, message: 'Invalid status' });
    }else{
        const updatedProject = projectController.updateProject(projectToUpdated);

        if (updatedProject) {
            res.status(200).json(updatedProject);
        } else {
            res.status(404).json({ message: 'Project not found' });
        }
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    const projectDeleted = projectController.deleteProject(id);
    res.status(200).json(projectDeleted);
});

module.exports = router;