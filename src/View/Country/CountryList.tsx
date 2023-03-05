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
    TopToolbar,
} from "react-admin"
import ShowIconButton from "../Part/Button/ShowIconButton"
import SearchNameTopToolbar from "../Part/SearchNameTopToolbar"

export default function CountryList() {
    return (
        <List
            hasCreate={true}
            actions={
                <SearchNameTopToolbar>
                    <CreateButton />
                </SearchNameTopToolbar>
            }
        >
            <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" />

                <TextField source="name" />

                <ShowIconButton type="edit" />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}
