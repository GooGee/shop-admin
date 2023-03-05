import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import { Create, Edit } from "react-admin"
import CanAccess from "../CanAccess"
import TagForm from "./TagForm"
import TagList from "./TagList"

export default function makeTagResource() {
    return {
        name: EntityEnum.Tag,
        create: (
            <CanAccess permission={PermissionEnum.CreateOneTag}>
                <Create>
                    <TagForm></TagForm>
                </Create>
            </CanAccess>
        ),
        edit: (
            <CanAccess permission={PermissionEnum.UpdateOneTag}>
                <Edit>
                    <TagForm></TagForm>
                </Edit>
            </CanAccess>
        ),
        list: (
            <CanAccess permission={PermissionEnum.ReadPageTag}>
                <TagList></TagList>
            </CanAccess>
        ),
    }
}
