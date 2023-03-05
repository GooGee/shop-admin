import { EntityEnum } from "@/TypeScriptEnum"
import { Box } from "@mui/material"
import {
    SimpleShowLayout,
    NumberField,
    DateField,
    TextField,
    ImageField,
    ReferenceField,
    RichTextField,
} from "react-admin"
import ImageList from "../Part/Field/ImageList"
import PriceField from "../Part/Field/PriceField"
import RatingStar from "../Part/Field/RatingStar"
import PublishButton from "./PublishButton"

export default function ProductDetail() {
    return (
        <SimpleShowLayout>
            <NumberField source="id" />

            <DateField source="dtCreate" label="Date Create" />

            <DateField source="dtPublish" label="Date Publish" />

            <TextField source="name" />

            <PriceField source="price" />

            <NumberField source="stock" />

            <NumberField source="discount" />

            <ImageField source="image" />

            <ImageList source="imagezz" label="Images" />

            <NumberField source="aaLiked" label="Liked" />

            <NumberField source="aaSold" label="Sold" />

            <RatingStar source="rating" />

            <ReferenceField
                source="categoryId"
                reference={EntityEnum.Category}
                link="show"
            >
                <TextField source="name" />
            </ReferenceField>

            <RichTextField source="detail" />

            <Box sx={{ marginBottom: 3 }}>
                <PublishButton variant="outlined" />
            </Box>
        </SimpleShowLayout>
    )
}
