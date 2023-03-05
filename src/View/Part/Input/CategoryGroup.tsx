import Constant from "@/State/Constant"
import { EntityEnum } from "@/TypeScriptEnum"
import { useState } from "react"
import { ReferenceInput, SelectInput, useEditContext } from "react-admin"
import CategoryRootInput from "./CategoryRootInput"

interface Property {
    source: string
}

export default function CategoryGroup(property: Property) {
    const { record } = useEditContext<CC.Category>()

    const [value, setValue] = useState(Constant.CategoryRootId)

    return (
        <>
            {record ? null : (
                <CategoryRootInput
                    change={(item) => setValue(item)}
                    value={value}
                ></CategoryRootInput>
            )}

            <ReferenceInput
                filter={{ parentId: record?.parentId ?? value }}
                reference={EntityEnum.Category}
                sort={{ field: "name", order: "ASC" }}
                source={property.source}
            >
                <SelectInput
                    emptyText="----"
                    isRequired
                    optionText="name"
                ></SelectInput>
            </ReferenceInput>
        </>
    )
}
