import { EntityEnum } from "@/TypeScriptEnum"
import { Box, FormControlLabel, FormGroup, Switch } from "@mui/material"
import { Loading, useGetList } from "react-admin"
import AppError from "../AppError"

interface Property {
    itemzz: CC.IdNameItem[]
    resource: EntityEnum
    onCreate(id: number): void
    onDelete(id: number): void
}

export default function ManyToManyList(property: Property) {
    const result = useGetList<CC.IdNameItem>(property.resource, {
        pagination: { page: 1, perPage: 1222 },
        sort: { field: "name", order: "ASC" },
    })

    if (result.isLoading) {
        return <Loading />
    }

    if (result.error) {
        return <AppError error={result.error} />
    }

    const data = result.data ?? []

    const idSet = new Set(property.itemzz.map((item) => item.id))

    return (
        <FormGroup sx={{ paddingLeft: 3 }}>
            {data.map((item) => (
                <FormControlLabel
                    key={item.id}
                    label={item.name}
                    sx={{ marginTop: 1 }}
                    control={
                        <Switch
                            checked={idSet.has(item.id)}
                            size="small"
                            onChange={function (event, checked) {
                                if (checked) {
                                    property.onCreate(item.id)
                                } else {
                                    property.onDelete(item.id)
                                }
                            }}
                        />
                    }
                />
            ))}
        </FormGroup>
    )
}
