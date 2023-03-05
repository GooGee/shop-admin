import axios, { AxiosError } from "axios"

const BadRequestStatus = 400

function isAxiosError(error: unknown): error is AxiosError<CC.ApiErrorResponse> {
    return axios.isAxiosError(error)
}

export function getAxiosStatus(error: unknown) {
    if (isAxiosError(error)) {
        return error.response?.status ?? error.status ?? BadRequestStatus
    }
    return BadRequestStatus
}

export default function getErrorMessage(error: unknown): string {
    if (isAxiosError(error)) {
        if (error.response) {
            if (error.response.data) {
                if (error.response.data.message) {
                    return error.response.data.message
                }
            }
        }
        return error.message
    }

    if (error instanceof Error) {
        return error.message
    }

    if (typeof error === "string") {
        return error
    }

    if (error instanceof Object) {
        if ("message" in error) {
            const message = error["message"]
            if (typeof message === "string") {
                return message
            }
        }
    }

    return JSON.stringify(error)
}
