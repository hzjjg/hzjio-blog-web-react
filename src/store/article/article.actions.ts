import { createAction } from "typesafe-actions";

enum Actions {
    loadList = 'LOAD_LIST',
    findOne = 'FIND_ONE',
    // create = 'CREATE',
    // update = 'UPDATE',
    // 2remove = 'REMOVE'
}


/**
 * 加载文章列表
 */
export const loadList = createAction(Actions.loadList, resolve => {
    return (page: number = 1, pageSize: number = 10) => resolve({ page, pageSize });
});

/**
 * 获取文章
 * @param id 
 */
export const findOne = createAction(Actions.findOne, resolve => {
    return (page: number = 1, pageSize: number = 10) => resolve({ page, pageSize });
});
