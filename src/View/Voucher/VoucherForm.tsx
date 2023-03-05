import { VoucherTypeChoicezz } from "@/State/VoucherType"
import {
    ChipField,
    DateInput,
    NumberInput,
    SelectInput,
    SimpleForm,
    TextInput,
} from "react-admin"

export default function VoucherForm() {
    return (
        <SimpleForm>
            <ChipField source="id" variant="outlined" />

            <SelectInput source="type" isRequired choices={VoucherTypeChoicezz} />

            <NumberInput
                source="amount"
                required
                defaultValue={0}
                min={0}
                label="Discount"
            />
            <NumberInput source="limit" required defaultValue={0} min={0} />

            <TextInput source="code" required />
            <TextInput source="name" required />

            <DateInput source="dtStart" defaultValue={null} />
            <DateInput source="dtEnd" defaultValue={null} />
        </SimpleForm>
    )
}
