import { EntityEnum } from "@/TypeScriptEnum"
import useImageModalStore from "@/Store/useImageModalStore"
import { Modal, Backdrop, Fade, Box, Button, Grid } from "@mui/material"
import { List, Pagination } from "react-admin"
import ImageGrid from "../Part/ImageGrid"

const style = {
    position: "absolute" as const,
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 1100,
    bgcolor: "background.paper",
    border: "1px solid #333",
    boxShadow: 24,
    p: 2,
}

export default function SelectImageModal() {
    const sImageModalStore = useImageModalStore()

    return (
        <Modal
            BackdropComponent={Backdrop}
            BackdropProps={{ timeout: 500 }}
            closeAfterTransition
            open={sImageModalStore.visible}
            onClose={sImageModalStore.close}
        >
            <Fade in={sImageModalStore.visible}>
                <Box sx={style}>
                    <List
                        actions={
                            <>
                                <Grid
                                    container
                                    alignItems="center"
                                    sx={{ height: "100%" }}
                                >
                                    <Grid item>
                                        <h2 style={{ margin: 0 }}>
                                            {sImageModalStore.title}
                                        </h2>
                                    </Grid>
                                </Grid>
                            </>
                        }
                        filter={{ mime: "image" }}
                        hasCreate={false}
                        resource={EntityEnum.FileInfo}
                        pagination={
                            <Grid
                                container
                                alignItems="center"
                                justifyContent="space-between"
                            >
                                <Grid item>
                                    <Button
                                        variant="outlined"
                                        disabled={sImageModalStore.itemzz.length === 0}
                                        onClick={sImageModalStore.closeOk}
                                    >
                                        OK
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        color="error"
                                        sx={{ marginLeft: 3, marginRight: 3 }}
                                        onClick={sImageModalStore.close}
                                    >
                                        Cancel
                                    </Button>

                                    <span>
                                        {sImageModalStore.itemzz.length} /{" "}
                                        {sImageModalStore.amount}
                                    </span>
                                </Grid>

                                <Grid item>
                                    <Pagination rowsPerPageOptions={[16, 24, 32, 64]} />
                                </Grid>
                            </Grid>
                        }
                    >
                        <ImageGrid></ImageGrid>
                    </List>
                </Box>
            </Fade>
        </Modal>
    )
}
