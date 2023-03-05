import useImageModalStore from "@/Store/useImageModalStore"
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline"
import {
    IconButton,
    ImageList,
    ImageListItem,
    ImageListItemBar,
    Stack,
} from "@mui/material"
import { green } from "@mui/material/colors"
import { Loading, useListContext } from "react-admin"
import AppError from "../AppError"

export default function ImageGrid() {
    const sImageModalStore = useImageModalStore()
    const { data, isLoading, error } = useListContext()

    if (isLoading) {
        return <Loading />
    }

    if (error) {
        return <AppError error={error} />
    }

    return (
        <Stack>
            <ImageList cols={8} sx={{ height: 444 }}>
                {data.map((item) => (
                    <ImageListItem
                        key={item.id}
                        onClick={function () {
                            sImageModalStore.add(item.uri)
                        }}
                    >
                        <img
                            loading="lazy"
                            src={item.uri}
                            style={{ maxWidth: 111, maxHeight: 111 }}
                        />

                        {sImageModalStore.has(item.uri) ? (
                            <ImageListItemBar
                                actionIcon={
                                    <IconButton sx={{ color: green.A400 }}>
                                        <CheckCircleOutlineIcon />
                                    </IconButton>
                                }
                                title=""
                            />
                        ) : null}
                    </ImageListItem>
                ))}
            </ImageList>
        </Stack>
    )
}
