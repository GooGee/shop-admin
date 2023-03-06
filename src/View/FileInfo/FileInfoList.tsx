import { Datagrid, DeleteButton, List, NumberField, TextField } from "react-admin"
import DeleteIconButton from "../Part/Button/DeleteIconButton"

export default function FileInfoList() {
    return (
        <List
            actions={undefined}
            hasCreate={false}
            sort={{ field: "id", order: "DESC" }}
        >
            <Datagrid>
                <NumberField source="id" />

                <TextField source="uri" />

                <TextField source="mime" />

                <DeleteButton />
            </Datagrid>
        </List>
    )
}
