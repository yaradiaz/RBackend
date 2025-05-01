import swaggerAutogen from 'swagger-autogen';

const outputFile = './swagger.json'; 
const endPointsFiles = ['./src/app.js']; 

const doc = {
    info: {
        title: 'API Restaurante', 
        description: 'Esta API permite gestionar lun restaurante',  
    },
    host: 'localhost:3000', 
    schemes: ['http'],  
};

// Generación del archivo swagger.json con la documentación
swaggerAutogen()(outputFile, endPointsFiles, doc);
