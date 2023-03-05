import History from "@mui/icons-material/History"
import { Alert, AlertColor, Button, Stack } from "@mui/material"

interface Property {
    children?: React.ReactElement
    message: string
    severity?: AlertColor
}

export default function AlertPage(property: Property) {
    return (
        <Stack
            alignItems="center"
            justifyContent="center"
            spacing={3}
            sx={{ height: 333 }}
        >
            <Alert severity={property.severity}>{property.message}</Alert>

            <div>{property.children}</div>

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
