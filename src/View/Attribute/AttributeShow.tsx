import { EntityEnum } from "@/TypeScriptEnum"
import {
    Datagrid,
    DateField,
    DeleteButton,
    ImageField,
    NumberField,
    ReferenceField,
    ReferenceManyField,
    RichTextField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin"
import EditModalButton from "../Part/Button/EditModalButton"

export default function AttributeShow() {
    return (
        <Show>
            <SimpleShowLayout>
                <TextField source="id" />

                <DateField source="dtCreate" label="Date Create" />

                <TextField source="name" />

                <ReferenceField
                    source="categoryId"
                    reference={EntityEnum.Category}
                    link="show"
                >
                    <TextField source="name" />
                </ReferenceField>

                <ReferenceManyField
                    label="Options"
                    perPage={1222}
                    reference={EntityEnum.AttributeValue}
                    target="attributeId"
                >
                    <Datagrid>
                        <TextField source="id" />

                        <TextField source="text" />

                        <EditModalButton
                            resource={EntityEnum.AttributeValue}
                            source="text"
                        />
                        <DeleteButton redirect="" />
                    </Datagrid>
                </ReferenceManyField>
            </SimpleShowLayout>
        </Show>
    )
}
