import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import CanAccess from "../CanAccess"
import UserList from "./UserList"
import UserShow from "./UserShow"

export default function makeUserResource() {
    return {
        name: EntityEnum.User,
        list: (
            <CanAccess permission={PermissionEnum.ReadPageUser}>
                <UserList></UserList>
            </CanAccess>
        ),
        show: (
            <CanAccess permission={PermissionEnum.ReadOneUser}>
                <UserShow></UserShow>
            </CanAccess>
        ),
    }
}
