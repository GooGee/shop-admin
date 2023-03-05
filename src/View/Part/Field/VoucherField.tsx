import VoucherType, { VoucherTypeChoicezz } from "@/State/VoucherType"
import { useRecordContext, UseRecordContextParams } from "react-admin"

export default function VoucherField(property: UseRecordContextParams<any>) {
    const record = useRecordContext<CC.Voucher>(property)

    let text = "0"
    if (record.type === VoucherType.Shipping) {
        text =
            VoucherTypeChoicezz.find((item) => item.id === VoucherType.Shipping)
                ?.name ?? ""
    } else {
        if (record.amount) {
            text = record.amount + ""
            if (record.type === VoucherType.Percentage) {
                text += " %"
            }
        }
    }
    return <span>{text}</span>
}
