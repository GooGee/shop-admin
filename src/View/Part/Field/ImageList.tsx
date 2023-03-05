import { Grid } from "@mui/material"
import { UseRecordContextParams, useRecordContext } from "react-admin"

export default function ImageList(props: UseRecordContextParams<any>) {
    const rc = useRecordContext<CC.Product>(props)

    return (
        <Grid container spacing={2}>
            {rc.imagezz.map((item, index) => (
                <Grid key={index} item>
                    <img src={item} style={{ maxWidth: 111, maxHeight: 111 }} />
                </Grid>
            ))}
        </Grid>
    )
}
