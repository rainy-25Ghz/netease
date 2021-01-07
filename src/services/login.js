const LOGIN_PHONE_URL = '/login/cellphone';
export const loginApi = (phone, password) => {
    const url = LOGIN_PHONE_URL.concat(`?phone=${phone}&password=${password}`);
    return fetch(url).then(res => res.json()).then(json => { return json; }).catch(err => {
        return err;
    });
}