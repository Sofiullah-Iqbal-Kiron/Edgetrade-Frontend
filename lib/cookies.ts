"use client"


import Cookies from "js-cookie"


export const cookies = {
    get: (key: string) => Cookies.get(key),
    set: (key: string, value: string, days = 7) => Cookies.set(key, value, { expires: days }),
    remove: (key: string) => Cookies.remove(key),
}
