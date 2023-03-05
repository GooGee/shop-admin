import getErrorMessage from "@/Service/getErrorMessage"
import { EntityEnum } from "@/TypeScriptEnum"
import useToastzzStore from "@/Store/useToastzzStore"
import { Button } from "@mui/material"
import { RichTextInput } from "ra-input-rich-text"
import { useState } from "react"
import {
    useCreate,
    SimpleForm,
    SaveButton,
    Toolbar,
    useRecordContext,
    useRefresh,
    Loading,
} from "react-admin"

export default function PostForm() {
    const [createOne, { data, isLoading, error }] = useCreate(EntityEnum.Post)
    const rc = useRecordContext<CC.Review>()
    const refresh = useRefresh()
    const [visible, setVisible] = useState(false)
    const sToastzzStore = useToastzzStore()

    if (isLoading === undefined) {
        return <Loading />
    }

    if (visible === false) {
        return (
            <Button variant="outlined" onClick={() => setVisible(true)}>
                write a reply
            </Button>
        )
    }

    const record = { reviewId: rc.id, text: "" }
    const option = {
        onSettled(data: CC.IdItem, error: unknown) {
            if (error) {
                sToastzzStore.showError(getErrorMessage(error))
            } else {
                setVisible(false)
            }
            refresh()
        },
    }

    return (
        <SimpleForm
            record={record}
            onSubmit={function (data) {
                createOne(EntityEnum.Post, { data }, option)
            }}
            toolbar={
                <Toolbar>
                    <SaveButton label="reply" />

                    <Button
                        color="error"
                        sx={{ marginLeft: 3 }}
                        variant="outlined"
                        onClick={() => setVisible(false)}
                    >
                        hide
                    </Button>
                </Toolbar>
            }
        >
            <RichTextInput source="text" isRequired />
        </SimpleForm>
    )
}
