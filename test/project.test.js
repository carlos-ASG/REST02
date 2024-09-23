const request = require('supertest');
const chai = require('chai');
const sinon = require('sinon');

const app = require('../index');
const projectController = require('../controllers/projectController.js');

const expect = chai.expect;

describe('GET /projects', () => {

    it('1. Debería devolver todos los proyectos con estatus 200 cuando hay', async() => {
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

        const res = await request(app).get('/projects');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
        expect(res.body.length).to.equal(4);
        expect(res.body).to.deep.equal(projects);
    });

});

describe('GET /projects/5f0dba4a-e8d3-4a63-9cf1-741c53f6be72', () => {

    it('2. Debería devolver un proyecto con status 200', async() => {
        const project = {
            id: "5f0dba4a-e8d3-4a63-9cf1-741c53f6be72",
            name: "Nuevo Sistema de Gestión",
            description: "Implementar un sistema de recursos.",
            startDate: "2024-09-01",
            endDate: "2025-02-01",
            status: "en progreso",
            teamMembers: ["Carlos Pérez", "Ana Gómez", "Luis Martínez"],
            budget: 50000
        };

        const res = await request(app).get('/projects/5f0dba4a-e8d3-4a63-9cf1-741c53f6be72');

        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('object');
        expect(res.body).to.deep.equal(project);
    });
});

describe('DELETE /projects/9c3dba4a-e8d3-4a63-9cf1-741c53f6be75', () => {

    it('3. Debería actualizar un proyecto y regresar un estatus 200', async() => {

        const project = {
            id: "9c3dba4a-e8d3-4a63-9cf1-741c53f6be75",
            name: "Sistema de Inventario",
            description: "Implementar un sistema para la gestión de inventarios.",
            startDate: "2024-12-01",
            endDate: "2025-05-01",
            status: "completado",
            teamMembers: ["Elena Ruiz", "Miguel Fernández", "Lucía Romero"],
            budget: 80000
          };

        const res = await request(app).delete('/projects/9c3dba4a-e8d3-4a63-9cf1-741c53f6be75');

        expect(res.status).to.equal(200);
        expect(res.body).to.deep.equal(project);
    });
});

describe('POST /projects', () => {

    it('4. Debería agregar un proyecto al arreglo y regresar un estatus 200', async() => {

        const project = {
            name: "Sistema de Correo",
            description: "Implementar un sistema para la gestión de correo.",
            startDate: "2024-12-01",
            endDate: "2025-05-01",
            status: "completado",
            teamMembers: ["Elena Ruiz", "Miguel Fernández", "Lucía Romero"],
            budget: 50000
          };

        const res = await request(app).post('/projects').send(project);

        expect(res.status).to.equal(200);
    });
});

describe('PUT /projects/5f0dba4a-e8d3-4a63-9cf1-741c53f6be72', () => {

    it('5. Debería actualizar un proyecto y regresar un estatus 200', async() => {

        const project = {
            id:"5f0dba4a-e8d3-4a63-9cf1-741c53f6be72",
            name: "prueba actualizar",
            description: "Desarrollar una aplicación móvil para gestionar ventas.",
            startDate: "2024-10-01",
            endDate: "2025-03-01",
            status: "en progreso",
            teamMembers: [
                    "María López",
                    "Juan Hernández",
                    "Sofía Torres"
                ],
            budget: 75000
        };

        const res = await request(app).put('/projects/5f0dba4a-e8d3-4a63-9cf1-741c53f6be72').send(project);

        expect(res.status).to.equal(200);
    });
});

