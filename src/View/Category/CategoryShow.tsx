import { EntityEnum } from "@/TypeScriptEnum"
import {
    Datagrid,
    DateField,
    ImageField,
    NumberField,
    ReferenceField,
    ReferenceManyField,
    RichTextField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin"
import DeleteIconButton from "../Part/Button/DeleteIconButton"
import ShowIconButton from "../Part/Button/ShowIconButton"

export default function CategoryForm() {
    return (
        <Show>
            <SimpleShowLayout>
                <NumberField source="id" />

                <DateField source="dtCreate" label="Date Create" />

                <TextField source="name" />

                <ImageField source="image" />

                <ReferenceField
                    label="Parent"
                    link="show"
                    reference={EntityEnum.Category}
                    source="parentId"
                >
                    <TextField source="name" />
                </ReferenceField>

                <ReferenceManyField
                    label="Sub Category"
                    reference={EntityEnum.Category}
                    target="parentId"
                >
                    <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                        <NumberField source="id" />
                        <ImageField source="image" />
                        <TextField source="name" />

                        <ShowIconButton />
                        <ShowIconButton type="edit" />
                        <DeleteIconButton />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleShowLayout>
        </Show>
    )
}
