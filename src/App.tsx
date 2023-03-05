import ArticleIcon from "@mui/icons-material/Article"
import CommentIcon from "@mui/icons-material/Comment"
import FolderIcon from "@mui/icons-material/Folder"
import GroupsIcon from "@mui/icons-material/Groups"
import LanguageIcon from "@mui/icons-material/Language"
import ListIcon from "@mui/icons-material/List"
import LockOpenIcon from "@mui/icons-material/LockOpen"
import PeopleIcon from "@mui/icons-material/People"
import PercentIcon from "@mui/icons-material/Percent"
import SegmentIcon from "@mui/icons-material/Segment"
import SellIcon from "@mui/icons-material/Sell"
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import { Admin, Resource, CustomRoutes } from "react-admin"
import { QueryClient } from "react-query"
import { Route } from "react-router"
import makeAuthProvider from "./Service/makeAuthProvider"
import makeDataProvider from "./Service/makeDataProvider"
import makeTheme from "./Service/makeTheme"
import makeAdminResource from "./View/Admin/makeAdminResource"
import AppLayout from "./View/AppLayout"
import AppLoginPage from "./View/AppLoginPage"
import makeAttributeResource from "./View/Attribute/makeAttributeResource"
import makeCategoryResource from "./View/Category/makeCategoryResource"
import makeCountryResource from "./View/Country/makeCountryResource"
import Dashboard from "./View/Dashboard"
import makeFileInfoResource from "./View/FileInfo/makeFileInfoResource"
import makeOperationResource from "./View/Operation/makeOperationResource"
import makeOrderResource from "./View/Order/makeOrderResource"
import makePermissionResource from "./View/Permission/makePermissionResource"
import makeProductResource from "./View/Product/makeProductResource"
import makeReviewResource from "./View/Review/makeReviewResource"
import makeRoleResource from "./View/Role/makeRoleResource"
import SettingPage from "./View/Setting/SettingPage"
import makeTagResource from "./View/Tag/makeTagResource"
import makeUserResource from "./View/User/makeUserResource"
import makeVoucherResource from "./View/Voucher/makeVoucherResource"

const ap = makeAuthProvider()
const dp = makeDataProvider()

const theme = makeTheme()

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: 11000,
            retry: 1,
            refetchOnWindowFocus: "always",
        },
    },
})

export default function App() {
    return (
        <Admin
            authProvider={ap}
            dataProvider={dp}
            dashboard={Dashboard}
            layout={AppLayout}
            loginPage={AppLoginPage}
            queryClient={queryClient}
            theme={theme}
        >
            <Resource icon={GroupsIcon} {...makeAdminResource()} />

            <Resource icon={ListIcon} {...makeAttributeResource()} />

            <Resource icon={SegmentIcon} {...makeCategoryResource()} />

            <Resource icon={LanguageIcon} {...makeCountryResource()} />

            <Resource icon={FolderIcon} {...makeFileInfoResource()} />

            <Resource icon={ShoppingCartIcon} {...makeOrderResource()} />

            <Resource icon={LockOpenIcon} {...makeOperationResource()} />

            <Resource icon={LockOpenIcon} {...makePermissionResource()} />

            <Resource icon={CommentIcon} {...makeReviewResource()} />

            <Resource icon={LockOpenIcon} {...makeRoleResource()} />

            <Resource icon={ShoppingBagIcon} {...makeProductResource()} />

            <Resource icon={SellIcon} {...makeTagResource()} />

            <Resource icon={PeopleIcon} {...makeUserResource()} />

            <Resource icon={PercentIcon} {...makeVoucherResource()} />

            <CustomRoutes>
                <Route path="/Setting" element={<SettingPage />} />
            </CustomRoutes>
        </Admin>
    )
}
