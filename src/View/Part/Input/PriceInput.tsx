import { TextField } from "@mui/material"
import { useInput } from "react-admin"

const MinPrice = 1e5

interface Property {
    source: string
}

export default function PriceInput(property: Property) {
    const { field } = useInput({ source: property.source })

    const value = field.value / MinPrice

    return (
        <TextField
            helperText=" "
            label="Price"
            required
            size="small"
            type="number"
            value={value}
            onChange={function (event) {
                let price = parseFloat(event.target.value)
                if (isNaN(price)) {
                    return
                }
                if (price < 0.1) {
                    price = 0.1
                }
                field.onChange(price * MinPrice)
            }}
        ></TextField>
    )
}
