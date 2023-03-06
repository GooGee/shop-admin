import { VoucherTypeChoicezz } from "@/State/VoucherType"
import {
    DateField,
    ImageField,
    NumberField,
    SelectField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin"
import PriceField from "../Part/Field/PriceField"

export default function VoucherForm() {
    return (
        <Show>
            <SimpleShowLayout>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" />

                <SelectField source="type" choices={VoucherTypeChoicezz} />
                <NumberField source="amount" />
                <NumberField source="limit" />

                <TextField source="code" />
                <TextField source="name" />

                <DateField source="dtStart" label="Date Start" />
                <DateField source="dtEnd" label="Date End" />
            </SimpleShowLayout>
        </Show>
    )
}
