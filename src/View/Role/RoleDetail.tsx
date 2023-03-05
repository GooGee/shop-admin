import { DateField, NumberField, SimpleShowLayout, TextField } from "react-admin"

export default function RoleDetail() {
    return (
        <SimpleShowLayout>
            <NumberField source="id" />

            <TextField source="name" />

            <TextField source="guard_name" />

            <TextField source="isUserCreated" />

            <DateField source="dtCreate" label="Date Create" />

        </SimpleShowLayout>
    )
}
