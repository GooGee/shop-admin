import useImageModalStore from "@/Store/useImageModalStore"
import { Button } from "@mui/material"
import { useInput } from "react-admin"

interface Property {
    itemzz: string[]
    source: string
}

export default function SelectImageInput(property: Property) {
    const sImageModalStore = useImageModalStore()
    const { field } = useInput({ source: property.source })

    return (
        <div
            onClick={function () {
                sImageModalStore.open(property.itemzz, 1, function (state) {
                    if (state) {
                        field.onChange(state.itemzz[0])
                    }
                })
            }}
            style={{ cursor: "pointer", marginBottom: 22 }}
        >
            {field.value ? (
                <img src={field.value} style={{ maxWidth: 333, maxHeight: 333 }} />
            ) : (
                <Button variant="outlined">select image</Button>
            )}
        </div>
    )
}
