import OrderStatus from "@/State/OrderStatus"
import { green, grey, orange, purple, red } from "@mui/material/colors"
import { UseRecordContextParams, useRecordContext, TextField } from "react-admin"

const ColorMap = new Map([
    ["Placed", red.A400],
    ["Fulfilled", green.A700],
    ["Returned", orange.A400],
])

interface Property {
    source: string
}

export default function OrderStatusField(
    property: UseRecordContextParams<Property & CC.Order>,
) {
    const record = useRecordContext(property)

    let color: string = grey[900]
    if (record.statusPayment === OrderStatus.PaymentPaid) {
        color = ColorMap.get(record.status) ?? color
    }
    return <TextField source="status" color={color} />
}
