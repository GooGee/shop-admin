import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import { Create, Edit } from "react-admin"
import CanAccess from "../CanAccess"
import AdminForm from "./AdminForm"
import AdminList from "./AdminList"
import AdminShow from "./AdminShow"

export default function makeAdminResource() {
    return {
        name: EntityEnum.Admin,
        create: (
            <CanAccess permission={PermissionEnum.CreateOneAdmin}>
                <Create redirect="show">
                    <AdminForm></AdminForm>
                </Create>
            </CanAccess>
        ),
        edit: (
            <CanAccess permission={PermissionEnum.UpdateOneAdmin}>
                <Edit>
                    <AdminForm></AdminForm>
                </Edit>
            </CanAccess>
        ),
        list: (
            <CanAccess permission={PermissionEnum.ReadPageAdmin}>
                <AdminList></AdminList>
            </CanAccess>
        ),
        show: (
            <CanAccess permission={PermissionEnum.ReadOneAdmin}>
                <AdminShow></AdminShow>
            </CanAccess>
        ),
    }
}
