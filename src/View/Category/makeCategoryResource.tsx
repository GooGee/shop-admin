import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import { Create, Edit } from "react-admin"
import CanAccess from "../CanAccess"
import CategoryForm from "./CategoryForm"
import CategoryList from "./CategoryList"
import CategoryShow from "./CategoryShow"

export default function makeCategoryResource() {
    return {
        name: EntityEnum.Category,
        create: (
            <CanAccess permission={PermissionEnum.CreateOneCategory}>
                <Create redirect="show">
                    <CategoryForm></CategoryForm>
                </Create>
            </CanAccess>
        ),
        edit: (
            <CanAccess permission={PermissionEnum.UpdateOneCategory}>
                <Edit>
                    <CategoryForm></CategoryForm>
                </Edit>
            </CanAccess>
        ),
        list: (
            <CanAccess permission={PermissionEnum.ReadPageCategory}>
                <CategoryList></CategoryList>
            </CanAccess>
        ),
        show: (
            <CanAccess permission={PermissionEnum.ReadOneCategory}>
                <CategoryShow></CategoryShow>
            </CanAccess>
        ),
    }
}
