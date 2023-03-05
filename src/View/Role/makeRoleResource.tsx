import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import { Create, Edit } from "react-admin"
import CanAccess from "../CanAccess"
import RoleForm from "./RoleForm"
import RoleList from "./RoleList"
import RoleShow from "./RoleShow"

export default function makeRoleResource() {
    return {
        name: EntityEnum.Role,
        create: (
            <CanAccess permission={PermissionEnum.CreateOneRole}>
                <Create redirect="show">
                    <RoleForm></RoleForm>
                </Create>
            </CanAccess>
        ),
        edit: (
            <CanAccess permission={PermissionEnum.UpdateOneRole}>
                <Edit>
                    <RoleForm></RoleForm>
                </Edit>
            </CanAccess>
        ),
        list: (
            <CanAccess permission={PermissionEnum.ReadPageRole}>
                <RoleList></RoleList>
            </CanAccess>
        ),
        show: (
            <CanAccess permission={PermissionEnum.ReadOneRole}>
                <RoleShow></RoleShow>
            </CanAccess>
        ),
    }
}
