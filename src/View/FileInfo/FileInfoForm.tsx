import { SimpleForm, TextInput } from "react-admin"

export default function FileInfoForm() {
    return (
        <SimpleForm>
            <TextInput source="uri" />
        </SimpleForm>
    )
}
