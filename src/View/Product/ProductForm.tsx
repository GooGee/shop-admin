import Constant from "@/State/Constant"
import { EntityEnum } from "@/TypeScriptEnum"
import { RichTextInput } from "ra-input-rich-text"
import { useState } from "react"
import {
    ChipField,
    NumberInput,
    SimpleForm,
    TextInput,
    useEditContext,
} from "react-admin"
import CategoryGroup from "../Part/Input/CategoryGroup"
import PriceInput from "../Part/Input/PriceInput"
import SelectImageInput from "../Part/Input/SelectImageInput"
import SelectImagezzInput from "../Part/Input/SelectImagezzInput"

export default function ProductForm() {
    const { record } = useEditContext<CC.Product>()

    return (
        <SimpleForm>
            <ChipField source="id" variant="outlined" />

            <TextInput source="name" required />

            <PriceInput source="price" />

            <NumberInput source="stock" min={0} required />

            <SelectImageInput
                source="image"
                itemzz={record?.image ? [record.image] : []}
            />

            <SelectImagezzInput source="imagezz" amount={11} />

            <NumberInput source="discount" min={0} required />

            <CategoryGroup source="categoryId" />

            <RichTextInput source="detail" isRequired />
        </SimpleForm>
    )
}
