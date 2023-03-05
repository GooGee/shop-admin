import {
    TimelineItem,
    TimelineSeparator,
    TimelineDot,
    TimelineConnector,
    TimelineContent,
    Timeline,
    TimelineOppositeContent,
} from "@mui/lab"
import { UseRecordContextParams, useRecordContext } from "react-admin"

class TimeData {
    constructor(readonly dt: string, readonly step: string) {}
}

export default function OrderTimeLine(property: UseRecordContextParams<any>) {
    const rc = useRecordContext<CC.Order>(property)

    function getTimezz() {
        const itemzz = [new TimeData(rc.dtCreate, "Placed")]

        if (rc.dtCancel) {
            itemzz.push(new TimeData(rc.dtCancel, "Canceled"))
            return itemzz
        }

        itemzz.push(new TimeData(rc.dtPay, "Payed"))
        itemzz.push(new TimeData(rc.dtFulfill, "Fulfilled"))

        if (rc.dtReturn) {
            itemzz.push(new TimeData(rc.dtReturn, "Returned"))
            itemzz.push(new TimeData(rc.dtRefund, "Refunded"))
            return itemzz
        }

        itemzz.push(new TimeData(rc.dtReceive, "Received"))
        return itemzz
    }

    const itemzz = getTimezz()

    return (
        <Timeline sx={{ p: 0, m: 0 }}>
            {itemzz.map((item, index) => (
                <TimelineItem key={item.step}>
                    <TimelineOppositeContent sx={{ flex: 0.1 }}>
                        {item.step}
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color={item.dt ? "primary" : "grey"} />
                        {index === itemzz.length - 1 ? null : <TimelineConnector />}
                    </TimelineSeparator>
                    <TimelineContent>
                        {item.dt ? item.dt.slice(0, 19).replace("T", " ") : ""}
                    </TimelineContent>
                </TimelineItem>
            ))}
        </Timeline>
    )
}
