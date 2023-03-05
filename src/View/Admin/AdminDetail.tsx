import { DateField, NumberField, SimpleShowLayout, TextField } from "react-admin"

export default function AdminDetail() {
    return (
        <SimpleShowLayout>
            <NumberField source="id" />

            <DateField source="dtCreate" label="Date Create" />

            <DateField source="dtDelete" label="Suspend" />

            <TextField source="name" />

            <TextField source="email" />
        </SimpleShowLayout>
    )
}
