import getErrorMessage from "@/Service/getErrorMessage"
import { EntityEnum } from "@/TypeScriptEnum"
import useInputModalStore from "@/Store/useInputModalStore"
import useToastzzStore from "@/Store/useToastzzStore"
import ContentCreate from "@mui/icons-material/Create"
import { useRecordContext, Button, useUpdate, useRefresh } from "react-admin"

interface Property {
    resource: EntityEnum
    source: string
}

export default function EditModalButton(property: Property) {
    const sInputModalStore = useInputModalStore()
    const record = useRecordContext(property)
    const refresh = useRefresh()
    const sToastzzStore = useToastzzStore()
    const [updateOne] = useUpdate(property.resource)

    return (
        <Button
            label="edit"
            onClick={() =>
                sInputModalStore.open(record[property.source], function (text) {
                    if (text === undefined) {
                        return
                    }
                    updateOne(
                        property.resource,
                        {
                            id: record.id,
                            data: {
                                ...record,
                                [property.source]: text,
                            },
                        },
                        {
                            onSettled(data, error) {
                                if (error) {
                                    sToastzzStore.showError(getErrorMessage(error))
                                } else {
                                    sToastzzStore.showSuccess()
                                }
                                refresh()
                            },
                        },
                    )
                })
            }
        >
            <ContentCreate />
        </Button>
    )
}
