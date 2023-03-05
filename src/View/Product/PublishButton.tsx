import getErrorMessage from "@/Service/getErrorMessage"
import { EntityEnum } from "@/TypeScriptEnum"
import useToastzzStore from "@/Store/useToastzzStore"
import { Button } from "@mui/material"
import { useRecordContext, useRefresh, useUpdate } from "react-admin"

interface Property {
    cellClassName?: string
    resource?: EntityEnum
    variant?: "text" | "outlined" | "contained"
}

export default function PublishButton(property: Property) {
    const record = useRecordContext<CC.Product>(property)
    const refresh = useRefresh()
    const sToastzzStore = useToastzzStore()
    const [updateOne] = useUpdate(EntityEnum.Product)

    if (!record) return null

    return (
        <Button
            color={record.dtPublish ? "success" : "primary"}
            variant={property.variant}
            onClick={function (e) {
                e.stopPropagation()
                const data = {
                    id: record.id,
                    data: { ...record },
                }
                if (record.dtPublish) {
                    data.data.dtPublish = null
                } else {
                    data.data.dtPublish = new Date().toISOString()
                }
                updateOne(EntityEnum.Product, data, {
                    onSettled(data, error) {
                        if (error) {
                            sToastzzStore.showError(getErrorMessage(error))
                        } else {
                            sToastzzStore.showSuccess()
                        }
                        refresh()
                    },
                })
            }}
        >
            {record.dtPublish ? "unpublish" : "publish"}
        </Button>
    )
}
