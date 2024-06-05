# Fastify-Boilerplate-2023

Entry Point - app.js "node app.js"

server.js - Create fastify server

src folder -
    db - making mongodb connection
    model - contains mongodb model

    controllers - Api handlers
    validations - Api Request and Response Schemas

    routes - Api routing using the controllers and validations

esbuild - 
    run 'node esbuild.js' to create a compression

github workflow - 
    create a docker image on pushing tags. 'd*' for development, 'p*' for production    