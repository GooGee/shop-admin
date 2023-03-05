import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import { Create, Edit } from "react-admin"
import CanAccess from "../CanAccess"
import ProductForm from "./ProductForm"
import ProductList from "./ProductList"
import ProductShow from "./ProductShow"

export default function makeProductResource() {
    return {
        name: EntityEnum.Product,
        create: (
            <CanAccess permission={PermissionEnum.CreateOneProduct}>
                <Create redirect="show">
                    <ProductForm></ProductForm>
                </Create>
            </CanAccess>
        ),
        edit: (
            <CanAccess permission={PermissionEnum.UpdateOneProduct}>
                <Edit>
                    <ProductForm></ProductForm>
                </Edit>
            </CanAccess>
        ),
        list: (
            <CanAccess permission={PermissionEnum.ReadPageProduct}>
                <ProductList></ProductList>
            </CanAccess>
        ),
        show: (
            <CanAccess permission={PermissionEnum.ReadOneProduct}>
                <ProductShow></ProductShow>
            </CanAccess>
        ),
    }
}