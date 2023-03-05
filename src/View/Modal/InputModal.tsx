import useInputModalStore from "@/Store/useInputModalStore"
import { Backdrop, Box, Button, Fade, Modal, Stack, TextField } from "@mui/material"
import { useEffect, useRef } from "react"

const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 333,
    bgcolor: "background.paper",
    border: "1px solid #333",
    boxShadow: 24,
    p: 2,
}

export default function InputModal() {
    const sInputModalStore = useInputModalStore()

    const ir = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (ir.current) {
            ir.current.focus()
        }
    }, [])

    return (
        <Modal
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
            closeAfterTransition
            open={sInputModalStore.visible}
            onClose={sInputModalStore.close}
        >
            <Fade in={sInputModalStore.visible}>
                <Stack spacing={3} sx={style}>
                    <h3>{sInputModalStore.title}</h3>

                    <TextField
                        autoFocus
                        focused
                        ref={ir}
                        size="small"
                        value={sInputModalStore.text}
                        onChange={(item) => sInputModalStore.setText(item.target.value)}
                    ></TextField>

                    <div>
                        <Button variant="outlined" onClick={sInputModalStore.closeOk}>
                            OK
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            sx={{ marginLeft: 3, marginRight: 3 }}
                            onClick={sInputModalStore.close}
                        >
                            Cancel
                        </Button>
                    </div>
                </Stack>
            </Fade>
        </Modal>
    )
}
