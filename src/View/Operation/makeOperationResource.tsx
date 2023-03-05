import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import CanAccess from "../CanAccess"
import OperationList from "./OperationList"

export default function makeOperationResource() {
    return {
        name: EntityEnum.Operation,
        list: (
            <CanAccess permission={PermissionEnum.ReadPageOperation}>
                <OperationList></OperationList>
            </CanAccess>
        ),
    }
}
