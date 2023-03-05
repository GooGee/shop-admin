import * as lodash from "lodash"
import { UseRecordContextParams, useRecordContext } from "react-admin"

interface Property {
    source: string
}

export default function ShortTextField(property: UseRecordContextParams<Property>) {
    const rc = useRecordContext(property) as any

    return <span>{lodash.truncate(rc[property.source])}</span>
}
