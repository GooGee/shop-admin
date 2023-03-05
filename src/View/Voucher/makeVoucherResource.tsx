import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import { Create, Edit } from "react-admin"
import CanAccess from "../CanAccess"
import VoucherForm from "./VoucherForm"
import VoucherList from "./VoucherList"

export default function makeVoucherResource() {
    return {
        name: EntityEnum.Voucher,
        create: (
            <CanAccess permission={PermissionEnum.CreateOneVoucher}>
                <Create>
                    <VoucherForm></VoucherForm>
                </Create>
            </CanAccess>
        ),
        edit: (
            <CanAccess permission={PermissionEnum.UpdateOneVoucher}>
                <Edit>
                    <VoucherForm></VoucherForm>
                </Edit>
            </CanAccess>
        ),
        list: (
            <CanAccess permission={PermissionEnum.ReadPageVoucher}>
                <VoucherList></VoucherList>
            </CanAccess>
        ),
    }
}
