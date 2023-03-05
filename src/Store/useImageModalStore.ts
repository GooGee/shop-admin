import { create } from "zustand"

interface Callback {
    (state?: ImageModalStoreType): void
}

interface ImageModalStoreType {
    amount: number
    itemzz: string[]
    set: Set<string>
    title: string
    visible: boolean
    add(uri: string): void
    callback: Callback
    close(): void
    closeOk(): void
    has(uri: string): boolean
    open(itemzz: string[], amount: number, callback: Callback): void
}

const useImageModalStore = create<ImageModalStoreType>()(function (set, get) {
    return {
        amount: 1,
        itemzz: [],
        set: new Set(),
        title: "Select an image",
        visible: false,
        add(uri: string) {
            if (get().has(uri)) {
                set(function (old) {
                    const itemzz = old.itemzz.filter((item) => item !== uri)
                    return { itemzz, set: new Set(itemzz) }
                })
                return
            }

            set(function (old) {
                if (old.amount === 1) {
                    const itemzz = [uri]
                    return { itemzz, set: new Set(itemzz) }
                }
                if (old.itemzz.length >= old.amount) {
                    return {}
                }
                const itemzz = [...old.itemzz, uri]
                return { itemzz, set: new Set(itemzz) }
            })
        },
        callback() {},
        close() {
            set(function (old) {
                old.callback()
                return { visible: false }
            })
        },
        closeOk() {
            set(function (old) {
                old.callback(old)
                return { visible: false }
            })
        },
        has(uri: string) {
            return get().set.has(uri)
        },
        open(itemzz: string[], amount: number, callback: Callback) {
            set({ visible: true, amount, callback, itemzz, set: new Set() })
        },
    }
})

export default useImageModalStore
