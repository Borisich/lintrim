
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
}


export default BackendAPI