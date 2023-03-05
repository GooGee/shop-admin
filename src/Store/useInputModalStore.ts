import { create } from "zustand"

interface Callback {
    (text?: string): void
}

interface InputModalStoreType {
    title: string
    text: string
    visible: boolean
    callback: Callback
    close(): void
    closeOk(): void
    open(text: string, callback: Callback): void
    setText(text: string): void
}

const useInputModalStore = create<InputModalStoreType>()(function (set, get) {
    return {
        title: "Input a name",
        text: "",
        visible: false,
        callback() {},
        close() {
            set(function (old) {
                old.callback()
                return { visible: false }
            })
        },
        closeOk() {
            set(function (old) {
                old.callback(old.text)
                return { visible: false }
            })
        },
        open(text: string, callback: Callback) {
            set({ visible: true, callback, text })
        },
        setText(text: string) {
            set({ text })
        },
    }
})

export default useInputModalStore
