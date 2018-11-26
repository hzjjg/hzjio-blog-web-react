import { ApiDomain } from "src/const";
import { PageQuery } from "src/const/types";
import { ArticleEntity } from "src/models/article.entity";

const ApiUrl = `${ApiDomain}/article`

/**
 * 文章api
 */
export class ArticleApi{

    /** 获取文章列表 */
    static getList(query:PageQuery):Promise<ArticleEntity[]>{
        return Http.get(ApiUrl,query);
    }

    static findOne(id:string):Promise<ArticleEntity>{
        return Http.get(`${ApiUrl}/${id}`);
    }

    static create(article:ArticleEntity){
        return Http.post(ApiUrl,article);
    }

    static update(id:string,article:ArticleEntity){
        return Http.put(`${ApiUrl}/${id}`,article);
    }

    static remove(id:string){
        return Http.delete(`${ApiUrl}/${id}`)
    }
}
