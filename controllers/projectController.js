const { v4: uuidv4 } = require('uuid');
let projects = [
    {
        id: "5f0dba4a-e8d3-4a63-9cf1-741c53f6be72",
        name: "Nuevo Sistema de Gestión",
        description: "Implementar un sistema de recursos.",
        startDate: "2024-09-01",
        endDate: "2025-02-01",
        status: "en progreso",
        teamMembers: ["Carlos Pérez", "Ana Gómez", "Luis Martínez"],
        budget: 50000
      },
      {
        id: "3a1dba4a-e8d3-4a63-9cf1-741c53f6be73",
        name: "Aplicación Móvil de Ventas",
        description: "Desarrollar una aplicación móvil para gestionar ventas.",
        startDate: "2024-10-01",
        endDate: "2025-03-01",
        status: "planificado",
        teamMembers: ["María López", "Juan Hernández", "Sofía Torres"],
        budget: 75000
      },
      {
        id: "7b2dba4a-e8d3-4a63-9cf1-741c53f6be74",
        name: "Portal Web de Clientes",
        description: "Crear un portal web para la gestión de clientes.",
        startDate: "2024-11-01",
        endDate: "2025-04-01",
        status: "en progreso",
        teamMembers: ["Pedro Sánchez", "Laura Méndez", "José García"],
        budget: 60000
      },
      {
        id: "9c3dba4a-e8d3-4a63-9cf1-741c53f6be75",
        name: "Sistema de Inventario",
        description: "Implementar un sistema para la gestión de inventarios.",
        startDate: "2024-12-01",
        endDate: "2025-05-01",
        status: "completado",
        teamMembers: ["Elena Ruiz", "Miguel Fernández", "Lucía Romero"],
        budget: 80000
      }
];

function getAllProjects(){
    return projects;
}

function getProjectById(id){
    return projects.find(project => project.id === id);
}

function createProject(name, description,startDate,endDate,status,teamMembers,budget){
    const newProject = {
        id: uuidv4(),
        name,
        description,
        startDate,
        endDate,
        status,
        teamMembers,
        budget
    }
    projects.push(newProject);
    return newProject;
}

function updateProject(projectToUpdated){
    projects = projects.map((t) => (t.id === projectToUpdated.id ? projectToUpdated : t));
    const foundProject = projects.find((t) => t.id === projectToUpdated.id);
    return foundProject;
}

function deleteProject(id){
    const projectToDelete = getProjectById(id);
    console.log("project to delete: " + projectToDelete);
    projects = projects.filter((project) => project.id !== id);
    return projectToDelete;
}

module.exports = {
    getAllProjects,
    getProjectById,
    createProject,
    updateProject,
    deleteProject
}