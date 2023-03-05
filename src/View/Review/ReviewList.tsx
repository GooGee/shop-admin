import { EntityEnum } from "@/TypeScriptEnum"
import {
    Datagrid,
    DateField,
    List,
    NumberField,
    ReferenceField,
    TextField,
} from "react-admin"
import ShowIconButton from "../Part/Button/ShowIconButton"
import RatingStar from "../Part/Field/RatingStar"
import ShortTextField from "../Part/Field/ShortTextField"
import ReviewListTopToolbar from "./ReviewListTopToolbar"

export default function ReviewList() {
    return (
        <List
            hasCreate={false}
            sort={{ field: "id", order: "DESC" }}
            actions={<ReviewListTopToolbar />}
        >
            <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" />

                <ReferenceField
                    source="userId"
                    reference={EntityEnum.User}
                    label="Customer"
                    link="show"
                >
                    <TextField source="name" />
                </ReferenceField>

                <ReferenceField
                    source="productId"
                    reference={EntityEnum.Product}
                    link="show"
                >
                    <ShortTextField source="name" />
                </ReferenceField>

                <RatingStar source="rating" />

                <ShortTextField source="text" />

                <ShowIconButton type="show" />
            </Datagrid>
        </List>
    )
}
