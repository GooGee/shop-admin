import { EntityEnum } from "@/TypeScriptEnum"
import {
    CreateButton,
    Datagrid,
    DateField,
    ImageField,
    List,
    NumberField,
    TextField,
} from "react-admin"
import ShowIconButton from "../Part/Button/ShowIconButton"
import SuspendButton from "../User/SuspendButton"
import UserTopToolbar from "../User/UserTopToolbar"

export default function AdminList() {
    return (
        <List
            actions={
                <UserTopToolbar>
                    <CreateButton />
                </UserTopToolbar>
            }
        >
            <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" />
                <DateField source="dtDelete" label="Suspend" />

                <TextField source="name" />

                <TextField source="email" />

                <ShowIconButton />
                <ShowIconButton type="edit" />
                <SuspendButton resource={EntityEnum.Admin} />
            </Datagrid>
        </List>
    )
}
