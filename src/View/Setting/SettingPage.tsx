import { Stack, TextField } from "@mui/material"

export default function SettingPage() {
    return (
        <Stack spacing={2}>
            <h1>Setting</h1>
            <TextField label="Store name" size="small" variant="outlined"></TextField>
            <TextField
                label="description"
                minRows={3}
                multiline
                size="small"
                variant="outlined"
            ></TextField>
            <TextField label="phone" size="small" variant="outlined"></TextField>
            <TextField label="email" size="small" variant="outlined"></TextField>
        </Stack>
    )
}
