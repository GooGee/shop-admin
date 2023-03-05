import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import CanAccess from "../CanAccess"
import PermissionList from "./PermissionList"

export default function makePermissionResource() {
    return {
        name: EntityEnum.Permission,
        list: (
            <CanAccess permission={PermissionEnum.ReadPagePermission}>
                <PermissionList></PermissionList>
            </CanAccess>
        ),
    }
}
