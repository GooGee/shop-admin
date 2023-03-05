import { Button, CircularProgress } from "@mui/material"
import { Box, Stack } from "@mui/system"
import { useEffect } from "react"
import { useRefresh } from "react-admin"

interface Property {
    children?: React.ReactElement
    loading: boolean
}

export default function RefreshPage(property: Property) {
    const refresh = useRefresh()

    useEffect(() => {
        if (property.loading) {
            return
        }
        refresh()
    }, [property.loading])

    return (
        <Stack alignItems="center" justifyContent="center" minHeight={333} spacing={3}>
            <Box>
                <CircularProgress />
            </Box>

            <Box>{property.children}</Box>

            <Box>
                <Button onClick={refresh}>refresh</Button>
            </Box>
        </Stack>
    )
}
