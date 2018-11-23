class Http {

    static get(url: string, params?: any) {
        return this.fetch(url, 'GET', params)
    }

    static post(url: string, data: any) {
        return this.fetch(url, 'POST', data)
    }

    static put(url: string, data: any) {
        return this.fetch(url, 'PUT', data)
    }

    static delete(url: string, params: any) {
        return this.fetch(url, 'DELETE', params)
    }

    static fetch(url: string, method: string, data?: any, headers?: any) {
        return fetch(url, {
            body: JSON.stringify(data),
            cache: 'no-cache',
            method,
            mode: 'cors',
            redirect: 'follow',
            referrer: 'no-referrer',
        })
    }
}