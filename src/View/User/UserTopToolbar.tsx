import { ReactElement } from "react"
import { TextInput, TopToolbar, FilterForm } from "react-admin"

const Filterzz = [
    <TextInput alwaysOn label="name" source="name" sx={{ width: 222 }} />,
    <TextInput alwaysOn label="email" source="email" sx={{ width: 222 }} />,
]

interface Property {
    children?: ReactElement
}

export default function UserTopToolbar(property: Property) {
    return (
        <TopToolbar sx={{ alignItems: "start", width: "100%" }}>
            <FilterForm filters={Filterzz} />

            {property.children}
        </TopToolbar>
    )
}
