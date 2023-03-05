import getErrorMessage from "@/Service/getErrorMessage"
import useToastzzStore from "@/Store/useToastzzStore"
import { EntityEnum } from "@/TypeScriptEnum"
import { useCreate, useDelete, useRefresh, useShowContext, Loading } from "react-admin"
import AlertPage from "../AlertPage"
import ManyToManyList from "../Part/ManyToManyList"

export default function ProductVoucher() {
    const source = EntityEnum.ProductVoucher
    const [createOne] = useCreate(source)
    const [deleteOne] = useDelete(source)

    const refresh = useRefresh()
    const sc = useShowContext<CC.ProductDetail>()
    const sToastzzStore = useToastzzStore()

    if (sc.isLoading) {
        return <Loading />
    }

    if (sc.record === undefined) {
        return <AlertPage message="Product is null" severity="error"></AlertPage>
    }

    const product = sc.record
    const productId = product.id

    const option = {
        onSettled(data: CC.IdItem, error: unknown) {
            if (error) {
                sToastzzStore.showError(getErrorMessage(error))
            }
            refresh()
        },
    }

    return (
        <ManyToManyList
            itemzz={product.voucherzz}
            resource={EntityEnum.Voucher}
            onCreate={function (voucherId) {
                createOne(source, { data: { productId, voucherId } }, option)
            }}
            onDelete={function (voucherId) {
                const found = product.voucherzz.find(
                    (item) =>
                        item.pivot.productId === productId &&
                        item.pivot.voucherId === voucherId,
                )
                if (found) {
                    deleteOne(source, { id: found.pivot.id }, option)
                }
            }}
        ></ManyToManyList>
    )
}
