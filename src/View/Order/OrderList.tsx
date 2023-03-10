import { EntityEnum } from "@/TypeScriptEnum"
import {
    DatagridConfigurable,
    DateField,
    List,
    NumberField,
    ReferenceField,
    ShowButton,
    TextField,
} from "react-admin"
import ShowIconButton from "../Part/Button/ShowIconButton"
import OrderStatusField from "../Part/Field/OrderStatusField"
import PriceField from "../Part/Field/PriceField"
import OrderTopToolbar from "./OrderTopToolbar"

export default function OrderList() {
    return (
        <List
            actions={<OrderTopToolbar></OrderTopToolbar>}
            hasCreate={false}
            sort={{ field: "id", order: "DESC" }}
        >
            <DatagridConfigurable
                bulkActionButtons={<></>}
                isRowSelectable={() => false}
                omit={["dtFulfill", "dtRefund", "dtReturn"]}
            >
                <NumberField source="id" />
                <DateField source="dtCreate" label="Date Create" cellClassName="w111" />
                <DateField source="dtPay" label="Date Pay" showTime />

                <ReferenceField
                    source="userId"
                    reference={EntityEnum.User}
                    label="Customer"
                    link="show"
                >
                    <TextField source="name" />
                </ReferenceField>

                <PriceField source="sum" label="Total" />

                <OrderStatusField source="status" />

                <TextField source="statusPayment" label="Payment" />

                <ShowButton />
            </DatagridConfigurable>
        </List>
    )
}
