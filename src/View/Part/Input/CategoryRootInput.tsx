import Constant from "@/State/Constant"
import { EntityEnum } from "@/TypeScriptEnum"
import { MenuItem, TextField } from "@mui/material"
import { useEffect } from "react"
import { useGetList } from "react-admin"

interface Property {
    value: number
    change(id: number): void
}

export default function CategoryRootInput(property: Property) {
    const { data: itemzz, isLoading } = useGetList<CC.Category>(EntityEnum.Category, {
        filter: { parentId: Constant.CategoryRootId },
    })

    useEffect(() => {
        if (isLoading) {
            return
        }

        if (itemzz?.length) {
            property.change(itemzz[0].id)
        }
    }, [isLoading])

    if (isLoading) {
        return null
    }

    if (itemzz === undefined) {
        return null
    }

    itemzz.sort((aa, bb) => aa.name.localeCompare(bb.name))

    return (
        <TextField
            label={"Main " + EntityEnum.Category}
            helperText=" "
            select
            size="small"
            type="number"
            value={property.value}
            onChange={(event) => property.change(parseInt(event.target.value))}
        >
            {itemzz.map((item) => (
                <MenuItem key={item.id} value={item.id}>
                    {item.name}
                </MenuItem>
            ))}
        </TextField>
    )
}
