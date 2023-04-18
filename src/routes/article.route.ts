import { articleHandlers } from "../handlers";
import { FastifyInstance } from "fastify";
import {
    getArticleRouteSchema,
    getArticleListRouteSchema,
    createArticleRouteSchema,
    updateArticleRouteSchema,
    deleteArticleRouteSchema,
    getAllArticleRouteSchema,
  } from "./swagger-schema/article.route.schema";

const articleRoute = async (app: FastifyInstance) => {

    app.get(
      "/",
      { schema: getAllArticleRouteSchema },
      articleHandlers.handleGetArticle
    );

    app.get(
      "/get/:id",
      { schema: getArticleRouteSchema },
      articleHandlers.handleGetArticleById
    );
    app.post(
      "/create",
      { schema: createArticleRouteSchema },
      articleHandlers.handleCreateArticle
    );
    app.put(
      "/update/:id",
      { schema: updateArticleRouteSchema },
      articleHandlers.handleUpdateArticle
    );
    app.delete(
      "/delete/:id",
      { schema: deleteArticleRouteSchema },
      articleHandlers.handleDeleteArticle
    );

    const Routes: object = {
      "/api/articles": false,
      "/api/articles/get": false,
      "/api/articles/create": true,
      "/api/articles/update/:id": true,
      "/api/articles/delete/:id": true,
    };
}

export default articleRoute;