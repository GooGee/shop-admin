import Constant from "@/State/Constant"
import { EntityEnum } from "@/TypeScriptEnum"
import { Grid } from "@mui/material"
import {
    TextInput,
    FilterForm,
    FilterButton,
    CreateButton,
    TopToolbar,
    ReferenceInput,
    SelectInput,
    SelectColumnsButton,
    DateInput,
    ExportButton,
} from "react-admin"

const Filterzz = [
    <TextInput alwaysOn label="search" source="name" sx={{ width: 222 }} />,
    <ReferenceInput
        alwaysOn
        filter={{ parentId: Constant.CategoryRootId }}
        reference={EntityEnum.Category}
        sort={{ field: "name", order: "ASC" }}
        source="categoryId"
    >
        <SelectInput
            emptyText="-- all --"
            label="category"
            optionText="name"
            sx={{ width: 222 }}
        ></SelectInput>
    </ReferenceInput>,
    <DateInput alwaysOn label="start date" source="dtStart" sx={{ width: 222 }} />,
    <DateInput label="end date" source="dtEnd" sx={{ width: 222 }} />,
]

export default function ProductListToolbar() {
    return (
        <TopToolbar sx={{ alignItems: "center", width: "100%" }}>
            <FilterForm filters={Filterzz} />

            <Grid alignItems="start" container direction="column" width={111}>
                <CreateButton />
                <ExportButton />
            </Grid>
            <Grid alignItems="start" container direction="column" width={111}>
                <FilterButton filters={Filterzz} />
                <SelectColumnsButton />
            </Grid>
        </TopToolbar>
    )
}
