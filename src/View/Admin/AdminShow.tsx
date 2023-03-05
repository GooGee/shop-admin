import { Show, TabbedShowLayout } from "react-admin"
import AdminDetail from "./AdminDetail"
import AdminPermission from "./AdminPermission"
import AdminRole from "./AdminRole"

enum TabEnum {
    Detail = "Detail",
    Permission = "Permission",
    Role = "Role",
}

export default function AdminShow() {
    return (
        <Show>
            <TabbedShowLayout>
                <TabbedShowLayout.Tab label={TabEnum.Detail}>
                    <AdminDetail></AdminDetail>
                </TabbedShowLayout.Tab>

                <TabbedShowLayout.Tab label={TabEnum.Permission}>
                    <AdminPermission></AdminPermission>
                </TabbedShowLayout.Tab>

                <TabbedShowLayout.Tab label={TabEnum.Role}>
                    <AdminRole></AdminRole>
                </TabbedShowLayout.Tab>
            </TabbedShowLayout>
        </Show>
    )
}
