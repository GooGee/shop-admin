import { ChipField, SimpleForm, TextInput } from "react-admin"

export default function RoleForm() {
    return (
        <SimpleForm>
            <ChipField source="id" variant="outlined" />

            <TextInput source="name" />
        </SimpleForm>
    )
}
