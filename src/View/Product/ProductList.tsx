import PriceField from "@/View/Part/Field/PriceField"
import {
    DatagridConfigurable,
    DateField,
    ImageField,
    List,
    NumberField,
    TextField,
} from "react-admin"
import DeleteIconButton from "../Part/Button/DeleteIconButton"
import ShowIconButton from "../Part/Button/ShowIconButton"
import ProductSkuField from "../Part/Field/ProductSkuField"
import ProductListToolbar from "./ProductListToolbar"
import PublishButton from "./PublishButton"

export default function ProductList() {
    return (
        <List actions={<ProductListToolbar />} sort={{ field: "id", order: "DESC" }}>
            <DatagridConfigurable omit={["dtCreate", "rating"]}>
                <NumberField source="id" />

                <DateField source="dtCreate" label="Date Create" cellClassName="w111" />
                <DateField
                    source="dtPublish"
                    label="Date Publish"
                    cellClassName="w111"
                />

                <ImageField source="image" />
                <PriceField source="price" />
                <NumberField source="discount" />
                <ProductSkuField source="stock" />
                <NumberField source="rating" options={{ maximumFractionDigits: 1 }} />

                <PublishButton cellClassName="w111" />
                <ShowIconButton type="show" />
                <ShowIconButton type="edit" />
                <DeleteIconButton />
            </DatagridConfigurable>
        </List>
    )
}
