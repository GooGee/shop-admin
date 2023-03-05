import getErrorMessage from "@/Service/getErrorMessage"
import useToastzzStore from "@/Store/useToastzzStore"
import { EntityEnum } from "@/TypeScriptEnum"
import { Box } from "@mui/material"
import { useCreate, useDelete, useShowContext, Loading, useRefresh } from "react-admin"
import AlertPage from "../AlertPage"
import ManyToManyList from "../Part/ManyToManyList"
import RefreshPage from "../RefreshPage"

export default function AdminRole() {
    const source = EntityEnum.ModelHasRole
    const [createOne] = useCreate(source)
    const [deleteOne] = useDelete(source)

    const refresh = useRefresh()
    const sc = useShowContext<CC.AdminDetail>()
    const sToastzzStore = useToastzzStore()

    if (sc.isLoading || sc.record?.rolezz === undefined) {
        return <RefreshPage loading={sc.isLoading} />
    }

    if (sc.record === undefined) {
        return <AlertPage message="Role is null" severity="error"></AlertPage>
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
        <Box sx={{ m: 1 }}>
            <h3>{ad.name}</h3>

            <Box marginTop={2}></Box>

            <ManyToManyList
                itemzz={ad.rolezz}
                resource={EntityEnum.Role}
                onCreate={function (role_id) {
                    createOne(source, { data: { model_id, role_id } }, option)
                }}
                onDelete={function (role_id) {
                    const found = ad.rolezz.find(
                        (item) =>
                            item.pivot.model_id === model_id &&
                            item.pivot.role_id === role_id,
                    )
                    if (found) {
                        deleteOne(source, { id: found.pivot.id }, option)
                    }
                }}
            ></ManyToManyList>
        </Box>
    )
}
