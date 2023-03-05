import { Rating } from "@mui/material"
import { UseRecordContextParams, useRecordContext } from "react-admin"

export default function RatingStar(property: UseRecordContextParams<any>) {
    const rc = useRecordContext(property) as any

    return <Rating value={rc.rating} precision={0.5} readOnly />
}
