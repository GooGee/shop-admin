import { EntityEnum } from "@/TypeScriptEnum"
import {
    Datagrid,
    DateField,
    ImageField,
    ReferenceField,
    ReferenceManyField,
    RichTextField,
    Show,
    SimpleShowLayout,
    TextField,
} from "react-admin"
import RatingStar from "../Part/Field/RatingStar"
import PostDetail from "./PostDetail"
import PostForm from "./PostForm"

export default function ReviewShow() {
    return (
        <Show>
            <SimpleShowLayout sx={{ marginBottom: 3 }}>
                <TextField source="id" />

                <DateField source="dtCreate" label="Date Create" />

                <ReferenceField source="userId" reference="User" link="show">
                    <TextField source="name" />
                </ReferenceField>

                <ReferenceField source="productId" reference="Product" link="show">
                    <div>
                        <ImageField source="image" />
                        <TextField source="name" />
                    </div>
                </ReferenceField>

                <RatingStar source="rating" />

                <RichTextField source="text" label="Comment" />

                <ReferenceManyField
                    label="Posts"
                    reference={EntityEnum.Post}
                    sort={{ field: "id", order: "ASC" }}
                    target="reviewId"
                >
                    <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                        <PostDetail />
                    </Datagrid>
                </ReferenceManyField>

                <PostForm />
            </SimpleShowLayout>
        </Show>
    )
}
