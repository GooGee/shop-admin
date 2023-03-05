import { Box, Stack } from "@mui/material"
import { UseRecordContextParams, useRecordContext, RichTextField } from "react-admin"

interface Property {
    source: string
}

export default function PostDetail(property: UseRecordContextParams<Property>) {
    const record = useRecordContext<CC.PostDetail>(property as any)

    function getName() {
        if (record.admin) {
            return record.admin.name
        }
        if (record.user) {
            return record.user.name
        }
        return "----"
    }

    return (
        <Stack spacing={1}>
            <Stack direction="row">
                <Box>{getName()}</Box>
                <Box marginLeft={2}>{record.dtCreate.slice(0, 19).replace("T", " ")}</Box>
            </Stack>

            <RichTextField source="text" />
        </Stack>
    )
}
