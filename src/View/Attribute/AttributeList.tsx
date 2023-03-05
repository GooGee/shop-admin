import { EntityEnum } from "@/TypeScriptEnum"
import {
    CreateButton,
    Datagrid,
    DateField,
    DeleteButton,
    EditButton,
    ImageField,
    List,
    NumberField,
    ReferenceField,
    ShowButton,
    TextField,
    TopToolbar,
} from "react-admin"
import SearchNameTopToolbar from "../Part/SearchNameTopToolbar"

export default function AttributeList() {
    return (
        <List
            hasCreate={false}
            sort={{ field: "id", order: "DESC" }}
            actions={<SearchNameTopToolbar></SearchNameTopToolbar>}
        >
            <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" />

                <ReferenceField
                    source="categoryId"
                    reference={EntityEnum.Category}
                    link="show"
                >
                    <TextField source="name" />
                </ReferenceField>

                <TextField source="name" />

                <ShowButton />
                <EditButton />
                <DeleteButton />
            </Datagrid>
        </List>
    )
}
