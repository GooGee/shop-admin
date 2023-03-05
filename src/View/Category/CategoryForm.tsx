import Constant from "@/State/Constant"
import { EntityEnum } from "@/TypeScriptEnum"
import { useState } from "react"
import { ChipField, SimpleForm, TextInput, useEditContext } from "react-admin"
import CategoryGroup from "../Part/Input/CategoryGroup"
import SelectImageInput from "../Part/Input/SelectImageInput"

export default function CategoryForm() {
    const { record } = useEditContext<CC.Category>()

    return (
        <SimpleForm>
            <ChipField source="id" variant="outlined" />

            <TextInput source="name" required />

            <SelectImageInput
                source="image"
                itemzz={record?.image ? [record.image] : []}
            />

            <CategoryGroup source="parentId" />
        </SimpleForm>
    )
}
