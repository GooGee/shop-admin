import {
    Datagrid,
    DateField,
    DeleteButton,
    EditButton,
    List,
    NumberField,
    TextField,
} from "react-admin"
import VoucherField from "../Part/Field/VoucherField"
import VoucherTopToolbar from "./VoucherTopToolbar"

export default function VoucherList() {
    return (
        <List
            hasCreate={true}
            sort={{ field: "id", order: "DESC" }}
            actions={<VoucherTopToolbar />}
        >
            <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" />

                <VoucherField source="amount" label="Discount" />
                <NumberField source="limit" />
                <TextField source="code" />
                <TextField source="name" />

                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}
