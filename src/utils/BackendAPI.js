
class BackendAPI {
    static host = "http://localhost:5000/";

    static getUsers() {
        console.log('GET_USERS');
        return fetch(this.host + 'users', {
            method: 'get'
        }).then(res => {
            res.json().then(res => {
                console.log(res)
            })

        })
    }

    static request(url, options, skipAuth = false) {
        console.log('url: ', url, options);

        return fetch(url, options).then((response)=>{
            console.log("response", url, response);

            if ( response.status != 200 ) {
                //throw {code: BackendApiErrors.BAD_HTTP_RESPONSE, message: 'Bad http response code: ' + response.status};
                //return Promise.reject(response.text().then(msg => new Error(msg)))
                throw response.text().then(msg => msg)
            }

            return response.json();
        }).then((json)=>{
            console.log("response.json", url, json);

            return json;
        }).catch( (error) => {
            console.log(error);
            return null;
        });
    }
}


export default BackendAPI