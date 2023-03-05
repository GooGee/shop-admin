import { EntityEnum } from "@/TypeScriptEnum"
import {
    Datagrid,
    DateField,
    List,
    NumberField,
    ReferenceField,
    TextField,
} from "react-admin"
import SearchNameTopToolbar from "../Part/SearchNameTopToolbar"

export default function OperationList() {
    return (
        <List
            hasCreate={false}
            sort={{ field: "id", order: "DESC" }}
            actions={<SearchNameTopToolbar></SearchNameTopToolbar>}
        >
            <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" showTime />

                <ReferenceField
                    source="adminId"
                    reference={EntityEnum.Admin}
                    link="show"
                >
                    <TextField source="name" />
                </ReferenceField>

                <TextField source="name" />

                <TextField source="text" />
            </Datagrid>
        </List>
    )
}
