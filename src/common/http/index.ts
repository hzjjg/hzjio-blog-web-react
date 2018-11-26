/**
 * http 基础类
 */
class Http {

    /**
     * get
     * @param url 
     * @param params 
     */
    static get(url: string, params?: any) {
        return this.fetch(url, 'GET', params)
    }


    /**
     * post
     * @param url 
     * @param data 
     */
    static post(url: string, data: any) {
        return this.fetch(url, 'POST', data)
    }

    /**
     * put
     * @param url 
     * @param data 
     */
    static put(url: string, data: any) {
        return this.fetch(url, 'PUT', data)
    }

    /**
     * delete
     * @param url 
     * @param params 
     */
    static delete(url: string, params?: any) {
        return this.fetch(url, 'DELETE', params)
    }

    /**
     * fetch
     * @param url 
     * @param method 
     * @param data 
     * @param headers 
     */
    static async fetch(url: string, method: string, data?: any, headers?: any):Promise<any> {
        try {
            const response = await fetch(url, {
                body: JSON.stringify(data),
                cache: 'no-cache',
                method,
                mode: 'cors',
                redirect: 'follow',
                referrer: 'no-referrer',
            });

            switch (response.status) {
                case 200:{
                    return response.body;
                }

                // 未登陆
                case 404:{
                    // TODO 跳转登陆
                    throw response.body;
                }
            
                default:{
                    return response.body;
                }
            }

        } catch (error) {
            throw error;
        }
    }
}