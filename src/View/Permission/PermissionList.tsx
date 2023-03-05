import {
    Datagrid,
    DateField,
    List,
    NumberField,
    TextField,
} from "react-admin"
import SearchNameTopToolbar from "../Part/SearchNameTopToolbar"

export default function PermissionList() {
    return (
        <List
            hasCreate={false}
            sort={{ field: "id", order: "DESC" }}
            actions={<SearchNameTopToolbar></SearchNameTopToolbar>}
        >
            <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" />

                <TextField source="name" />

                <TextField source="guard_name" />
            </Datagrid>
        </List>
    )
}
