import { EntityEnum } from "@/TypeScriptEnum"
import { Stack } from "@mui/material"
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
import OrderStatusField from "../Part/Field/OrderStatusField"
import PriceField from "../Part/Field/PriceField"
import OrderButtonGroup from "./OrderButtonGroup"
import OrderTimeLine from "./OrderTimeLine"

export default function OrderShow() {
    return (
        <Show>
            <SimpleShowLayout>
                <NumberField source="id" />

                <PriceField source="sum" label="Total" />

                <OrderStatusField source="status" />

                <TextField source="statusPayment" />

                <ReferenceField source="userId" reference={EntityEnum.User} link="show">
                    <TextField source="name" />
                </ReferenceField>

                <ReferenceManyField
                    label="Products"
                    reference={EntityEnum.OrderProduct}
                    target="orderId"
                >
                    <Datagrid bulkActionButtons={<></>} isRowSelectable={() => false}>
                        <PriceField source="price" />
                        <NumberField source="amount" />
                        <ImageField source="productSku.product.image" label="Image" />
                        <TextField source="productSku.product.name" label="Name" />
                    </Datagrid>
                </ReferenceManyField>

                <ReferenceField source="addressId" reference={EntityEnum.Address}>
                    <Stack spacing={1}>
                        <TextField source="text" />
                        <TextField source="zip" />
                        <TextField source="phone" />
                    </Stack>
                </ReferenceField>

                <OrderTimeLine label="TimeLine"></OrderTimeLine>

                <OrderButtonGroup></OrderButtonGroup>
            </SimpleShowLayout>
        </Show>
    )
}
