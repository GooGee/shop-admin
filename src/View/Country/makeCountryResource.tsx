import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import { Create, Edit } from "react-admin"
import CanAccess from "../CanAccess"
import CountryForm from "./CountryForm"
import CountryList from "./CountryList"

export default function makeCountryResource() {
    return {
        name: EntityEnum.Country,
        create: (
            <CanAccess permission={PermissionEnum.CreateOneCountry}>
                <Create>
                    <CountryForm></CountryForm>
                </Create>
            </CanAccess>
        ),
        edit: (
            <CanAccess permission={PermissionEnum.UpdateOneCountry}>
                <Edit>
                    <CountryForm></CountryForm>
                </Edit>
            </CanAccess>
        ),
        list: (
            <CanAccess permission={PermissionEnum.ReadPageCountry}>
                <CountryList></CountryList>
            </CanAccess>
        ),
    }
}
