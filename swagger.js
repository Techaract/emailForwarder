const swaggerAutogen = require('swagger-autogen')()

const outputFile = './swagger_output.json'
const endpointsFiles = ['./api/routes/child_routes/users.routes.js',
    './api/routes/child_routes/usersType.routes.js',
    './api/routes/child_routes/vehicles.routes.js',
    './api/routes/child_routes/vehiclesLogs.routes.js',
];

//doc : https://medium.com/swlh/automatic-api-documentation-in-node-js-using-swagger-dd1ab3c78284

const doc = {
    info: {
        version: "1.0.0",
        title: "smartGate Api",
        description: "Documentation automatically generated."
    },
    host: "localhost:3003/api/",
    basePath: "/",
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    tags: [
        {
            "name": "User",
            "description": "Endpoints"
        },
        {
            "name": "User Types",
            "description": "Endpoints"
        },
        {
            "name" : "Vehicles",
            "description": "Endpoints"
        },
        {
            "name" : "VehicleLogs",
            "description": "Endpoints"
        }
    ],
    securityDefinitions: {
        api_key: {
            type: "apiKey",
            name: "api_key",
            in: "header"
        },
        petstore_auth: {
            type: "oauth2",
            authorizationUrl: "https://petstore.swagger.io/oauth/authorize",
            flow: "implicit",
            scopes: {
                read_pets: "read your pets",
                write_pets: "modify pets in your account"
            }
        }
    },
}


// swaggerAutogen(outputFile, endpointsFiles, doc)

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require('./gate.server')
})