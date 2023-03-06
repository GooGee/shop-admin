import { EntityEnum } from "@/TypeScriptEnum"
import {
    Datagrid,
    DateField,
    ImageField,
    NumberField,
    ReferenceManyField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin"
import PriceField from "../Part/Field/PriceField"

export default function UserForm() {
    return (
        <Show>
            <SimpleShowLayout>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" />
                <DateField source="dtDelete" label="Suspend" />

                <TextField source="name" />
                <TextField source="email" />
                <NumberField source="aaOrder" label="Order" />
                <PriceField source="aaSpend" label="Spend" />

                <ReferenceManyField
                    label="Addresss"
                    reference={EntityEnum.Address}
                    target="userId"
                >
                    <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                        <TextField source="text" />
                        <TextField source="zip" />
                        <TextField source="phone" />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleShowLayout>
        </Show>
    )
}
