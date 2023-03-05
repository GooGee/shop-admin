import axios from "axios"

export default function makeAxiosClient(path: string = "v1/Admin") {
    return axios.create({
        baseURL: makeUri(path),
        timeout: 33000,
        withCredentials: true,
    })
}

function makeUri(path?: string) {
    const uri = "/"
    if (path === undefined) {
        return uri
    }
    return uri + path
}
