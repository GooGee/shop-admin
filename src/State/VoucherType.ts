enum VoucherType {
    Amount = "Amount",
    Percentage = "Percentage",
    Shipping = "Shipping",
}

export default VoucherType

export const VoucherTypezz = Object.keys(VoucherType) as VoucherType[]
export const VoucherTypeChoicezz = [
    { id: VoucherType.Amount, name: "fixed amount off" },
    { id: VoucherType.Percentage, name: "percentage off" },
    { id: VoucherType.Shipping, name: "free shipping" },
]
