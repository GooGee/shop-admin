import getErrorMessage, { getAxiosStatus } from "@/Service/getErrorMessage"
import { AlertColor } from "@mui/material"
import { create } from "zustand"

export class Toast {
    private static index = 0

    readonly id
    readonly date = new Date()

    constructor(
        readonly text: string,
        readonly severity: AlertColor = "info",
        readonly detail?: string,
    ) {
        Toast.index += 1
        this.id = Toast.index
    }
}

type ToastzzStore = {
    all: Toast[]
    itemzz: Toast[]
    create(text: string, severity?: AlertColor, ttl?: number, detail?: string): void
    dismiss(id: number): void
    showError(text: string, detail?: string): void
    showErrorOf(error: unknown): void
    showSuccess(text?: string): void
    showWarning(text: string): void
}

const useToastzzStore = create<ToastzzStore>()(function (set, get) {
    const data = {
        all: [] as Toast[],
        itemzz: [] as Toast[],
        create(
            text: string,
            severity: AlertColor = "info",
            ttl: number = 3222,
            detail?: string,
        ) {
            const item = new Toast(text.slice(0, 333), severity, detail)
            set((state) => {
                return {
                    itemzz: state.itemzz.concat(item),
                    all: state.all.concat(item),
                }
            })
            if (ttl > 0) {
                setTimeout(() => get().dismiss(item.id), ttl)
            }
        },
        dismiss(id: number) {
            set((state) => {
                const itemzz = state.itemzz.filter((item) => item.id !== id)
                return { itemzz }
            })
        },
        showError(text: string, detail?: string) {
            get().create(text, "error", 0, detail)
        },
        showErrorOf(error: unknown) {
            // console.log(error)
            if (getAxiosStatus(error) === 401) {
                // it will go to login page
                return
            }

            const detail = typeof error === "string" ? error : JSON.stringify(error)
            get().showError(getErrorMessage(error), detail)
        },
        showSuccess(text: string = "OK") {
            get().create(text, "success")
        },
        showWarning(text: string) {
            get().create(text, "warning", 0)
        },
    }
    return data
})

export default useToastzzStore
