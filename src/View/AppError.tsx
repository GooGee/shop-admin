import getErrorMessage from "@/Service/getErrorMessage"
import History from "@mui/icons-material/History"
import { Alert, Button, Stack } from "@mui/material"
import { useRef, useEffect } from "react"
import { Title } from "react-admin"
import { useLocation } from "react-router-dom"

interface Property {
    error: unknown
    resetErrorBoundary?: Function
}

export default function AppError(property: Property) {
    const { pathname } = useLocation()
    const originalPathname = useRef(pathname)

    const message = getErrorMessage(property.error)

    // Effect that resets the error state whenever the location changes
    useEffect(() => {
        if (pathname !== originalPathname.current) {
            if (typeof property.resetErrorBoundary === "function") {
                property.resetErrorBoundary()
            }
        }
    }, [pathname, property.resetErrorBoundary])

    return (
        <Stack spacing={3} sx={{ marginTop: 3 }}>
            <Title title={message} />

            <Alert severity="error">{message}</Alert>

            {import.meta.env.PROD ? null : (
                <details>{JSON.stringify(property.error)}</details>
            )}

            <div>
                <Button
                    variant="contained"
                    startIcon={<History />}
                    onClick={() => history.go(-1)}
                >
                    Back
                </Button>
            </div>
        </Stack>
    )
}
