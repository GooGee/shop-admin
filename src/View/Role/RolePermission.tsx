import getErrorMessage from "@/Service/getErrorMessage"
import { EntityEnum } from "@/TypeScriptEnum"
import useToastzzStore from "@/Store/useToastzzStore"
import { useCreate, useDelete, useShowContext, Loading, useRefresh } from "react-admin"
import AlertPage from "../AlertPage"
import PermissionList from "../Part/PermissionList"

export default function RolePermission() {
    const source = EntityEnum.RoleHasPermission
    const [createOne] = useCreate(source)
    const [deleteOne] = useDelete(source)

    const refresh = useRefresh()
    const sc = useShowContext<CC.RoleDetail>()
    const sToastzzStore = useToastzzStore()

    if (sc.isLoading) {
        return <Loading />
    }

    if (sc.record === undefined) {
        return <AlertPage message="Role is null" severity="error"></AlertPage>
    }

    const rd = sc.record
    const role_id = rd.id

    const option = {
        onSettled(data: CC.IdItem, error: unknown) {
            if (error) {
                sToastzzStore.showError(getErrorMessage(error))
            }
            refresh()
        },
    }

    return (
        <PermissionList
            owner={rd}
            onCreate={function (permission_id) {
                createOne(source, { data: { permission_id, role_id } }, option)
            }}
            onDelete={function (permission_id) {
                const found = rd.permissionzz.find(
                    (item) =>
                        item.pivot.permission_id === permission_id &&
                        item.pivot.role_id === role_id,
                )
                if (found) {
                    deleteOne(source, { id: found.pivot.id }, option)
                }
            }}
        ></PermissionList>
    )
}
