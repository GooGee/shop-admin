import { VoucherTypeChoicezz } from "@/State/VoucherType"
import { Grid } from "@mui/material"
import {
    TopToolbar,
    FilterForm,
    CreateButton,
    SelectInput,
    TextInput,
} from "react-admin"

const Filterzz = [
    <SelectInput
        alwaysOn
        choices={VoucherTypeChoicezz}
        emptyText="-- all --"
        label="type"
        source="type"
        sx={{ width: 222 }}
    />,
    <TextInput alwaysOn label="code" source="code" sx={{ width: 222 }} />,
    <TextInput alwaysOn label="name" source="name" sx={{ width: 222 }} />,
]

export default function VoucherTopToolbar() {
    return (
        <TopToolbar sx={{ alignItems: "center", width: "100%" }}>
            <FilterForm filters={Filterzz} />

            <Grid alignItems="start" container direction="column" width={111}>
                <CreateButton />
            </Grid>
        </TopToolbar>
    )
}
