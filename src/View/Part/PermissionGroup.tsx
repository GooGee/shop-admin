import { FormControlLabel, FormGroup, Switch } from "@mui/material"

interface Property {
    idSet: Set<number>
    itemzz: CC.Permission[]
    onCreate(permission_id: number): void
    onDelete(permission_id: number): void
}

export default function PermissionGroup(property: Property) {
    function getColor(item: CC.Permission) {
        if (item.name.startsWith("Create")) {
            return "secondary"
        }
        if (item.name.startsWith("Delete")) {
            return "error"
        }
        if (item.name.startsWith("Update")) {
            return "warning"
        }
        return "primary"
    }

    return (
        <FormGroup sx={{ paddingLeft: 3 }}>
            {property.itemzz.map((item) => (
                <FormControlLabel
                    key={item.id}
                    label={item.name}
                    sx={{ marginTop: 1 }}
                    control={
                        <Switch
                            checked={property.idSet.has(item.id)}
                            color={getColor(item)}
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
