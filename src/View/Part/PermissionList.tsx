import { EntityEnum } from "@/TypeScriptEnum"
import { Box } from "@mui/material"
import { lightBlue } from "@mui/material/colors"
import { useGetList } from "react-admin"
import AppError from "../AppError"
import RefreshPage from "../RefreshPage"
import PermissionGroup from "./PermissionGroup"

interface Property {
    owner: CC.AdminDetail | CC.RoleDetail
    onCreate(permission_id: number): void
    onDelete(permission_id: number): void
}

export default function PermissionList(property: Property) {
    const result = useGetList<CC.Permission>(EntityEnum.Permission, {
        pagination: { page: 1, perPage: 1222 },
        sort: { field: "moderator", order: "ASC" },
    })

    if (result.isLoading || property.owner.permissionzz === undefined) {
        return <RefreshPage loading={result.isLoading} />
    }

    if (result.error) {
        return <AppError error={result.error} />
    }

    const idSet = new Set(property.owner.permissionzz.map((item) => item.id))

    const groupMap = new Map<string, CC.Permission[]>()
    result.data!.forEach(function (item) {
        let found = groupMap.get(item.moderator)
        if (found === undefined) {
            found = []
            groupMap.set(item.moderator, found)
        }
        found.push(item)
    })

    const groupzz = Array.from(groupMap)
    groupzz.forEach(([name, itemzz]) =>
        itemzz.sort((aa, bb) => aa.name.localeCompare(bb.name)),
    )

    return (
        <Box sx={{ m: 1 }}>
            <h3>{property.owner.name}</h3>

            <div>
                {groupzz.map(([name, itemzz]) => (
                    <div key={name}>
                        <Box
                            sx={{
                                color:
                                    name === property.owner.name
                                        ? lightBlue["A700"]
                                        : "dark",
                                marginTop: 2,
                            }}
                        >
                            {name}
                        </Box>

                        <PermissionGroup
                            idSet={idSet}
                            itemzz={itemzz}
                            onCreate={property.onCreate}
                            onDelete={property.onDelete}
                        />
                    </div>
                ))}
            </div>
        </Box>
    )
}
