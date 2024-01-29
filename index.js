const express = require("express");
const  bodyParser = require("body-parser");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app=express();


  const options = {
  definition: {
    openapi: "3.1.0",
    info: {
      title: "Upworkio Express API with Swagger",
      version: "0.1.0",
      description:
        "This is a custom application made with Express and documented with Swagger",
     
      contact: {
        name: "Upwork-io",
        url: "https://test.com",
        email: "test@email.com",
      },
    },
    servers: [
      {
        url: "http://localhost:8000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use(
  "/api-docs",
  swaggerUi.serve,
  swaggerUi.setup(specs, { explorer: true })
);

app.get("/api",(req,res,next)=>{
    res.json({message:"Hello from server"})
})

app.listen(8000,()=>console.log("server is running at 8000"))