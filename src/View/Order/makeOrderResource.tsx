import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import CanAccess from "../CanAccess"
import OrderList from "./OrderList"
import OrderShow from "./OrderShow"

export default function makeOrderResource() {
    return {
        name: EntityEnum.Order,
        list: (
            <CanAccess permission={PermissionEnum.ReadPageOrder}>
                <OrderList></OrderList>
            </CanAccess>
        ),
        show: (
            <CanAccess permission={PermissionEnum.ReadOneOrder}>
                <OrderShow></OrderShow>
            </CanAccess>
        ),
    }
}