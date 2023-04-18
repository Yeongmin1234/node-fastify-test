import { ArticleCreateRequest, RequestWithIdArticle, UpdateArticleRequest } from "interface/types/handlers/article.handler.types";
import { ArticleAttributes } from "interface/types/models/article.model.types"
import { articleService } from "../services"

export const handleGetArticle = async () => {
    return articleService.getArticles();
}

export const handleGetArticleById = async (req: RequestWithIdArticle) => {
    const id = req.params.id;

    return articleService.getOneArticle(id);
}

export const handleCreateArticle = async (req: ArticleCreateRequest) => {
    const { title, text, type } = req.body;
    return articleService.createArticle({
        title,
        text,
        type
    });
}

export const handleUpdateArticle = async (req: UpdateArticleRequest) => {
    const { title, text, type } = req.body;
    return articleService.updateArticle(
        req.params.id
        , {
            title,
            text,
            type
        }
    );
}

export const handleDeleteArticle = async (req: RequestWithIdArticle) => {
    return articleService.deleteArticle(req.params.id);
}

export default {
    handleGetArticle,
    handleGetArticleById,
    handleCreateArticle,
    handleUpdateArticle,
    handleDeleteArticle
}