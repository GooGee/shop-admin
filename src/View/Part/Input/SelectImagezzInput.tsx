import useImageModalStore from "@/Store/useImageModalStore"
import { Button, Grid } from "@mui/material"
import { useInput } from "react-admin"

interface Property {
    amount: number
    source: string
}

export default function SelectImagezzInput(property: Property) {
    const sImageModalStore = useImageModalStore()
    const { field } = useInput({ source: property.source })

    let imagezz: string[] = []
    if (Array.isArray(field.value)) {
        imagezz = field.value
    }

    return (
        <Grid alignItems="center" container spacing={2}>
            {imagezz.map((item, index) => (
                <Grid key={index} item>
                    <img src={item} style={{ maxWidth: 111, maxHeight: 111 }} />
                </Grid>
            ))}

            <Grid item sx={{ minHeight: 66 }}>
                <Button
                    variant="outlined"
                    onClick={function () {
                        sImageModalStore.open(
                            imagezz,
                            property.amount,
                            function (state) {
                                if (state) {
                                    field.onChange(state.itemzz)
                                }
                            },
                        )
                    }}
                >
                    add image
                </Button>
            </Grid>
        </Grid>
    )
}
