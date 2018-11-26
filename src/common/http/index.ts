/**
 * http 基础类
 */
export class Http {

    /**
     * get
     * @param url 
     * @param params 
     */
    static get(url: string, params?: any) {
        return this.fetch(url, HttpMethods.get, params || null)
    }


    /**
     * post
     * @param url 
     * @param data 
     */
    static post(url: string, data: any) {
        return this.fetch(url, HttpMethods.post, data)
    }

    /**
     * put
     * @param url 
     * @param data 
     */
    static put(url: string, data: any) {
        return this.fetch(url, HttpMethods.put, data)
    }

    /**
     * delete
     * @param url 
     * @param params 
     */
    static delete(url: string, params?: any) {
        return this.fetch(url, HttpMethods.delete, params || null)
    }

    /**
     * fetch
     * @param url 
     * @param method 
     * @param data 
     * @param headers 
     */
    static async fetch(url: string, method: string, data?: any, headers?: any): Promise<any> {

        let apiUrl = url;
        let body: string | null = JSON.stringify(data);

        // 处理get 请求
        if (method === HttpMethods.get) {
            data && (apiUrl += this.formateQuery(data))
            body = null;
        }

        try {
            const response = await fetch(apiUrl, {
                body,
                cache: 'no-cache',
                method,
                headers: {
                    ...{
                        'content-type': 'application/json'
                    }, ...headers
                },
                mode: 'cors',
                redirect: 'follow',
                referrer: 'no-referrer',
            });

            switch (response.status) {
                case 200: {
                    return response.body;
                }

                // 未登陆
                case 404: {
                    // TODO 跳转登陆
                    throw response.body;
                }

                default: {
                    return response.body;
                }
            }

        } catch (error) {
            throw error;
        }
    }

    /**
     * 对象转换成query字符串
     * @param params 查询参数
     */
    private static formateQuery(params: any) {
        const query = '?' + Object.keys(params)
            .map(k =>
                encodeURIComponent(k) + '=' + encodeURIComponent(params[k])
            )
            .join('&')
            ;
        return query;
    }
}

enum HttpMethods {
    get = 'GET',
    post = 'POST',
    put = 'PUT',
    delete = 'DELETE',
}