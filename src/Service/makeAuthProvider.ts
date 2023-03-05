import { AuthProvider } from "react-admin"
import makeAxiosClient from "../Service/makeAxiosClient"

const client = makeAxiosClient()

export function readMe() {
    return client.get<CC.ApiItemResponse<CC.Me>>("/Me/0")
}

export default function makeAuthProvider(): AuthProvider {
    return {
        // called when the user attempts to log in
        login(data) {
            return client.post<CC.ApiItemResponse<CC.Admin>>("/AdminSession/0", {
                name: data.username,
                password: data.password,
            })
        },
        // called when the user clicks on the logout button
        logout() {
            return client
                .delete<CC.ApiDataResponse>("/AdminSession/0")
                .then(() => Promise.resolve())
                .catch(() => Promise.resolve())
        },
        // called when the API returns an error
        checkError(data) {
            if (data) {
                if ("status" in data) {
                    if (data.status === 401) {
                        // login required
                        return Promise.reject(data)
                    }
                }
            }
            return Promise.resolve(data)
        },
        // called when the user navigates to a new location, to check for authentication
        checkAuth() {
            return readMe().then((response) =>
                response.data.item === undefined
                    ? Promise.reject(response)
                    : Promise.resolve(),
            )
        },
        getIdentity() {
            return readMe().then((response) => response.data.item)
        },
        // called when the user navigates to a new location, to check for permissions / roles
        getPermissions(params) {
            // console.log(params)
            return readMe()
                .then(function (response) {
                    if (response.data.item.permissionzz.includes(params.permission)) {
                        return response.data.item
                    }
                    return null
                })
                .catch(() => Promise.resolve(null))
        },
    }
}
