import Cookies from "js-cookie";

export function verifyLogged() {
    return !(Cookies.get("token") === undefined);
}