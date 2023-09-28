class TokenService {
    getLocalRefreshToken() {
        const user = JSON.parse(localStorage?.getItem("user")) || null;
        return user?.refresh_token;
    }

    getLocalAccessToken() {
        const user = JSON.parse(localStorage?.getItem("user")) || null;
        return user?.access_token;
    }

    updateLocalAccessToken(token) {
        let user = JSON.parse(localStorage?.getItem("user")) || null;
        user.access_token = token;
        localStorage.setItem("user", JSON.stringify(user));
    }

    getUser() {
        return JSON.parse(localStorage?.getItem("user")) || null;
    }

    setUser(user) {
        localStorage.setItem("user", JSON.stringify(user));
    }

    removeUser() {
        localStorage.removeItem("user");
    }
}

export default new TokenService();