import swaggerJsdoc from "swagger-jsdoc";

const options = {
    failOnErrors: true,
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Ytch8.io API",
            version: "1.0.0",
            description:
                "This is a REST API application made with Express and Prisma.",
            license: {
                name: "Licensed Under MIT",
                url: "https://spdx.org/licenses/MIT.html",
            },
        },
        servers: [
            {
                url: "http://localhost:5001",
                description: "Development server",
            },
        ],
    },
    apis: ["../**/router.ts"],
};

export default swaggerJsdoc(options);
