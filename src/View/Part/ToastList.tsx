import useToastzzStore from "@/Store/useToastzzStore"
import { Alert, Stack } from "@mui/material"

export default function ToastList() {
    const sToastzzStore = useToastzzStore()

    return (
        <Stack
            bgcolor="white"
            m={2}
            spacing={1}
            sx={{ width: 444, zIndex: 111, position: "fixed", bottom: 0, right: 0 }}
        >
            {sToastzzStore.itemzz.map((item) => (
                <Alert
                    key={item.id}
                    severity={item.severity}
                    variant="outlined"
                    onClose={() => sToastzzStore.dismiss(item.id)}
                >
                    {item.text}
                </Alert>
            ))}
        </Stack>
    )
}
