import { EntityEnum } from "@/TypeScriptEnum"
import ContentCreate from "@mui/icons-material/Create"
import ImageEye from "@mui/icons-material/RemoveRedEye"
import {
    Button,
    RaRecord,
    ShowButtonProps,
    useCreatePath,
    useRecordContext,
    useResourceContext,
} from "react-admin"
import { Link } from "react-router-dom"

interface Property {
    resource?: EntityEnum
    type?: string
}

export default function ShowIconButton(property: Property) {
    const createPath = useCreatePath()
    const record = useRecordContext(property)
    const resource = useResourceContext(property)

    if (!record) return null

    return (
        <Button
            component={Link}
            onClick={(e) => e.stopPropagation()}
            size="large"
            sx={{ width: 33, minWidth: 33, paddingLeft: "22px" }}
            to={createPath({ type: property.type ?? "show", resource, id: record.id })}
        >
            {property.type === "edit" ? <ContentCreate /> : <ImageEye />}
        </Button>
    )
}
