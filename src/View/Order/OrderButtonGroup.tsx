import getErrorMessage from "@/Service/getErrorMessage"
import OrderStatus from "@/State/OrderStatus"
import { EntityEnum } from "@/TypeScriptEnum"
import useToastzzStore from "@/Store/useToastzzStore"
import { Box, Button, Stack } from "@mui/material"
import { useState } from "react"
import {
    UseRecordContextParams,
    useRecordContext,
    Confirm,
    useUpdate,
    useRefresh,
} from "react-admin"

export default function OrderButtonGroup(property: UseRecordContextParams<any>) {
    const rc = useRecordContext<CC.Order>(property)
    const refresh = useRefresh()
    const sToastzzStore = useToastzzStore()
    const [updateOne] = useUpdate(EntityEnum.Order)

    const [isOpen, setIsOpen] = useState(false)
    const [title, setTitle] = useState("")
    const [cb, setCb] = useState({ onConfirm() {} })

    function onClose() {
        setIsOpen(false)
    }

    function showConfirm(title: string, data: Record<string, any>) {
        setTitle(title)
        setCb({
            onConfirm() {
                updateOne(EntityEnum.Order, data, {
                    onSettled(data, error) {
                        if (error) {
                            sToastzzStore.showError(getErrorMessage(error))
                        } else {
                            sToastzzStore.showSuccess()
                        }
                        refresh()
                    },
                })
                onClose()
            },
        })
        setIsOpen(true)
    }

    return (
        <Stack direction="row" spacing={3} marginBottom={3}>
            <Button
                color="warning"
                variant="outlined"
                disabled={
                    !(
                        rc.status === OrderStatus.Placed &&
                        rc.statusPayment === OrderStatus.PaymentUnpaid
                    )
                }
                onClick={function () {
                    showConfirm("Cancel this order", {
                        id: rc.id,
                        data: { dtCancel: "1" },
                    })
                }}
            >
                Cancel
            </Button>
            <Button
                color="success"
                variant="outlined"
                disabled={
                    !(
                        rc.status === OrderStatus.Placed &&
                        rc.statusPayment === OrderStatus.PaymentPayed
                    )
                }
                onClick={function () {
                    showConfirm("Fulfill this order", {
                        id: rc.id,
                        data: { dtFulfill: "1" },
                    })
                }}
            >
                Fulfill
            </Button>
            <Button
                color="error"
                variant="outlined"
                disabled={
                    !(
                        rc.status === OrderStatus.Returned &&
                        rc.statusPayment === OrderStatus.PaymentPayed
                    )
                }
                onClick={function () {
                    showConfirm("Refund this order", {
                        id: rc.id,
                        data: { dtRefund: "1" },
                    })
                }}
            >
                Refund
            </Button>

            <Confirm
                CancelIcon={Box}
                content={<Box sx={{ minWidth: "333px" }}>Are you sure?</Box>}
                isOpen={isOpen}
                onConfirm={cb.onConfirm}
                onClose={onClose}
                title={title}
            />
        </Stack>
    )
}
