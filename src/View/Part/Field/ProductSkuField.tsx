import { green, red } from "@mui/material/colors"
import { UseRecordContextParams, useRecordContext, NumberField } from "react-admin"

interface Property {
    source: string
}

export default function ProductSkuField(
    property: UseRecordContextParams<Property & CC.Product>,
) {
    const rc = useRecordContext(property)

    const color = rc.stock < 11 ? red : green
    return <NumberField source="stock" color={rc.dtPublish ? color : "black"} />
}

ProductSkuField.defaultProps = {
    textAlign: "right",
}
