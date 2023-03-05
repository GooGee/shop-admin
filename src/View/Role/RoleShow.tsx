import { Show, TabbedShowLayout } from "react-admin"
import RoleDetail from "./RoleDetail"
import RolePermission from "./RolePermission"

enum TabEnum {
    Detail = "Detail",
    Permission = "Permission",
}

export default function RoleShow() {
    return (
        <Show>
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label={TabEnum.Detail}>
                    <RoleDetail></RoleDetail>
                </TabbedShowLayout.Tab>

                <TabbedShowLayout.Tab label={TabEnum.Permission}>
                    <RolePermission></RolePermission>
                </TabbedShowLayout.Tab>
            </TabbedShowLayout>
        </Show>
    )
}
