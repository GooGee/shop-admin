import {
    ChipField,
    PasswordInput,
    SimpleForm,
    TextField,
    TextInput,
} from "react-admin"

export default function AdminForm() {
    return (
        <SimpleForm>
            <ChipField source="id" variant="outlined" />

            <TextInput source="name" required />

            <TextInput source="email" required />

            <PasswordInput source="password" required />
        </SimpleForm>
    )
}
