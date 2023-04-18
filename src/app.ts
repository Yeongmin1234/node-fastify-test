import fastify, { FastifyServerOptions }  from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import { articleRouter } from "./routes";
import { swaggerOption } from "./config/swagger";

const App = (option: FastifyServerOptions) => {
        const app = fastify(option);
        app.get("/", async() => {
                return "SERVER NODEJS FASTIFY COURSE";
        });
        app.register(fastifySwagger, swaggerOption.options);
        app.register(fastifySwaggerUI, {prefix : "/swagger-ui"});
        app.register(articleRouter, {prefix: "/api/articles"})

        return app;
}

export default App;