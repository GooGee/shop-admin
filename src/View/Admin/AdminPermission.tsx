import getErrorMessage from "@/Service/getErrorMessage"
import { EntityEnum } from "@/TypeScriptEnum"
import useToastzzStore from "@/Store/useToastzzStore"
import { useCreate, useDelete, useShowContext, Loading, useRefresh } from "react-admin"
import AlertPage from "../AlertPage"
import PermissionList from "../Part/PermissionList"

export default function AdminPermission() {
    const source = EntityEnum.ModelHasPermission
    const [createOne] = useCreate(source)
    const [deleteOne] = useDelete(source)

    const refresh = useRefresh()
    const sc = useShowContext<CC.AdminDetail>()
    const sToastzzStore = useToastzzStore()

    if (sc.isLoading) {
        return <Loading />
    }

    if (sc.record === undefined) {
        return <AlertPage message="Permission is null" severity="error"></AlertPage>
    }

    const ad = sc.record
    const model_id = ad.id

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
            owner={ad}
            onCreate={function (permission_id) {
                createOne(source, { data: { model_id, permission_id } }, option)
            }}
            onDelete={function (permission_id) {
                const found = ad.permissionzz.find(
                    (item) =>
                        item.pivot.model_id === model_id &&
                        item.pivot.permission_id === permission_id,
                )
                if (found) {
                    deleteOne(source, { id: found.pivot.id }, option)
                }
            }}
        ></PermissionList>
    )
}
