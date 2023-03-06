import {
    CreateButton,
    Datagrid,
    DateField,
    DeleteButton,
    EditButton,
    ImageField,
    List,
    NumberField,
    ShowButton,
    TextField,
} from "react-admin"
import DeleteIconButton from "../Part/Button/DeleteIconButton"
import ShowIconButton from "../Part/Button/ShowIconButton"
import SearchNameTopToolbar from "../Part/SearchNameTopToolbar"

export default function RoleList() {
    return (
        <List
            sort={{ field: "id", order: "DESC" }}
            actions={
                <SearchNameTopToolbar>
                    <CreateButton />
                </SearchNameTopToolbar>
            }
        >
            <Datagrid>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" />

                <TextField source="name" />

                <TextField source="guard_name" />

                <ShowButton />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}
