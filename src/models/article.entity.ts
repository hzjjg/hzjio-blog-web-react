/** 文章实体 */
export interface ArticleEntity {
    
    id: string;

    author: number;
    
    title: string;
    
    summary: string;
    
    content: string;
    
    status: ArticleStatus;
    
    /** 投票 */
    votes:number;
    
    /** 查看人数 */
    views:number;
    
    createdDate:string;
    
    updateDate:string;
}

/** 文章状态 */
export enum ArticleStatus {
    /** 不可见 */
    DISABLED = 0,

    /** 已发布 */
    PUBLISHED = 1,

    /** 已删除 */
    REMOVED = 2,
}