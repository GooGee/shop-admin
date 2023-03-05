import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import { Create, Edit } from "react-admin"
import CanAccess from "../CanAccess"
import AttributeForm from "./AttributeForm"
import AttributeList from "./AttributeList"
import AttributeShow from "./AttributeShow"

export default function makeAttributeResource() {
    return {
        name: EntityEnum.Attribute,
        edit: (
            <CanAccess permission={PermissionEnum.UpdateOneAttribute}>
                <Edit>
                    <AttributeForm></AttributeForm>
                </Edit>
            </CanAccess>
        ),
        list: (
            <CanAccess permission={PermissionEnum.ReadPageAttribute}>
                <AttributeList></AttributeList>
            </CanAccess>
        ),
        show: (
            <CanAccess permission={PermissionEnum.ReadOneAttribute}>
                <AttributeShow></AttributeShow>
            </CanAccess>
        ),
    }
}
