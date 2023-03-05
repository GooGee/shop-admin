import { Show, TabbedShowLayout } from "react-admin"
import ProductDetail from "./ProductDetail"
import ProductVoucher from "./ProductVoucher"

export default function ProductShow() {
    return (
        <Show>
            <ProductDetail />
        </Show>
    )
}
