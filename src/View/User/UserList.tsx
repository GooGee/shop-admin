import { EntityEnum } from "@/TypeScriptEnum"
import { Datagrid, DateField, List, NumberField, TextField } from "react-admin"
import ShowIconButton from "../Part/Button/ShowIconButton"
import PriceField from "../Part/Field/PriceField"
import SuspendButton from "./SuspendButton"
import UserTopToolbar from "./UserTopToolbar"

export default function UserList() {
    return (
        <List actions={<UserTopToolbar />} sort={{ field: "id", order: "DESC" }}>
            <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" showTime />
                <DateField source="dtDelete" label="Suspend" />

                <TextField source="name" />
                <TextField source="email" />
                <NumberField source="aaOrder" label="Order" />
                <PriceField source="aaSpend" label="Spend" />

                <ShowIconButton />
                <SuspendButton resource={EntityEnum.User} />
            </Datagrid>
        </List>
    )
}
