import Constant from "@/State/Constant"
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

export default function CategoryList() {
    return (
        <List
            actions={
                <SearchNameTopToolbar>
                    <CreateButton />
                </SearchNameTopToolbar>
            }
            filter={{ parentId: Constant.CategoryRootId }}
        >
            <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                <NumberField source="id" />

                <TextField source="name" />

                <ImageField source="image" />

                <ShowButton />
                <EditButton />
                <DeleteButton redirect="" />
            </Datagrid>
        </List>
    )
}
