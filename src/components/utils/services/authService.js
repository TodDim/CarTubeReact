import requester from "../requester";

const ADMIN_ROLE_ID = '5b70416dfbf445513b7f98df'

function isAuth() {
    return localStorage.getItem('authtoken') !== null;
}

function isAdmin() {
    return localStorage.getItem('roleId') !== null;
}

// user/login
function login(username, password) {
    let userData = {
        username,
        password
    };

    return requester.post('user', 'login', 'basic', userData);
}

// user/register
function register(username, password) {
    let userData = {
        username,
        password,
        subscriptions: []
    };

    return requester.post('user', '', 'basic', userData);
}

// user/logout
function logout() {
    let logoutData = {
        authtoken: localStorage.getItem('authtoken')
    };

    return requester.post('user', '_logout', 'kinvey', logoutData);
}

// saveSession in localStorage
function saveSession(userInfo) {
    let userAuth = userInfo._kmd.authtoken;
    localStorage.setItem('authtoken', userAuth);
    let username = userInfo.username;
    localStorage.setItem('username', username);
    localStorage.setItem('userId', userInfo._id);
    localStorage.setItem('subscriptions', JSON.stringify(userInfo.subscriptions));

    if (userInfo._acl.roleId) {
        
        if (userInfo._acl.roleId == ADMIN_ROLE_ID) {
            localStorage.setItem('roleId', ADMIN_ROLE_ID)
          
        }
    }
}


export default {
    isAuth,
    isAdmin,
    login,
    register,
    logout,
    saveSession
}