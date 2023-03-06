import { Box } from "@mui/material"
import { ReactElement } from "react"
import { TextInput, TopToolbar, FilterForm, ExportButton } from "react-admin"

const Filterzz = [
    <TextInput alwaysOn label="name" source="name" sx={{ width: 222 }} />,
    <TextInput alwaysOn label="email" source="email" sx={{ width: 222 }} />,
]

interface Property {
    children?: ReactElement
}

export default function UserTopToolbar(property: Property) {
    return (
        <TopToolbar sx={{ alignItems: "center", width: "100%" }}>
            <FilterForm filters={Filterzz} />

            {property.children}

            <Box>
                <ExportButton />
            </Box>
        </TopToolbar>
    )
}
