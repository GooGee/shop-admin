import { useRecordContext, UseRecordContextParams } from "react-admin"

interface Property {
    source: string
}

export default function PriceField(property: UseRecordContextParams<Property>) {
    const rc = useRecordContext(property) as any

    return <span>{new Intl.NumberFormat().format(rc[property.source] / 1e5)}</span>
}

PriceField.defaultProps = {
    textAlign: "right",
}
