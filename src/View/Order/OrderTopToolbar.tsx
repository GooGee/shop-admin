import { Grid } from "@mui/material"
import {
    DateInput,
    FilterButton,
    FilterForm,
    SelectColumnsButton,
    SelectInput,
    TextInput,
    TopToolbar,
} from "react-admin"

const Statuszz = [
    { id: "Placed", name: "Placed" },
    { id: "Cancelled", name: "Cancelled" },
    { id: "Fulfilled", name: "Fulfilled" },
    { id: "Received", name: "Received" },
    { id: "Returned", name: "Returned" },
]

const PaymentStatuszz = [
    { id: "Unpaid", name: "Unpaid" },
    { id: "Payed", name: "Payed" },
    { id: "Refunded", name: "Refunded" },
]

const Filterzz = [
    <TextInput alwaysOn label="id" source="id" sx={{ width: 222 }} />,
    <SelectInput
        alwaysOn
        choices={Statuszz}
        emptyText="-- all --"
        label="status"
        source="status"
        sx={{ width: 222 }}
    />,
    <SelectInput
        choices={PaymentStatuszz}
        emptyText="-- all --"
        label="payment status"
        source="statusPayment"
        sx={{ width: 222 }}
    />,
    <DateInput alwaysOn label="start date" source="dtStart" sx={{ width: 222 }} />,
    <DateInput label="end date" source="dtEnd" sx={{ width: 222 }} />,
]

export default function OrderTopToolbar() {
    return (
        <TopToolbar sx={{ alignItems: "start", width: "100%" }}>
            <FilterForm filters={Filterzz} />

            <Grid alignItems="start" container direction="column" width={111}>
                <FilterButton filters={Filterzz} />
                <SelectColumnsButton />
            </Grid>
        </TopToolbar>
    )
}
