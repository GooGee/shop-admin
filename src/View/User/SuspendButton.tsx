import getErrorMessage from "@/Service/getErrorMessage"
import { EntityEnum } from "@/TypeScriptEnum"
import useToastzzStore from "@/Store/useToastzzStore"
import BlockIcon from "@mui/icons-material/Block"
import { Button } from "@mui/material"
import { useDelete, useRecordContext, useRefresh } from "react-admin"

interface Property {
    resource: EntityEnum
}

export default function SuspendButton(property: Property) {
    const rc = useRecordContext<CC.User>()
    const refresh = useRefresh()
    const sToastzzStore = useToastzzStore()
    const [updateOne] = useDelete(property.resource)

    const option = {
        onSettled(data: CC.IdItem, error: unknown) {
            if (error) {
                sToastzzStore.showError(getErrorMessage(error))
            }
            refresh()
        },
    }

    return (
        <Button
            color={rc.dtDelete ? "primary" : "error"}
            startIcon={rc.dtDelete ? null : <BlockIcon />}
            size="small"
            onClick={function () {
                updateOne(property.resource, { id: rc.id }, option)
            }}
        >
            {rc.dtDelete ? "resume" : "suspend"}
        </Button>
    )
}
