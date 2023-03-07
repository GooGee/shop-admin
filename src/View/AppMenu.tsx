import { PermissionEnum } from "@/TypeScriptEnum"
import SettingsIcon from "@mui/icons-material/Settings"
import { CircularProgress, Grid } from "@mui/material"
import { Menu, useAuthenticated, useGetIdentity } from "react-admin"
import makeAdminResource from "./Admin/makeAdminResource"
import makeAttributeResource from "./Attribute/makeAttributeResource"
import makeCategoryResource from "./Category/makeCategoryResource"
import makeCountryResource from "./Country/makeCountryResource"
import makeFileInfoResource from "./FileInfo/makeFileInfoResource"
import makeOperationResource from "./Operation/makeOperationResource"
import makeOrderResource from "./Order/makeOrderResource"
import makePermissionResource from "./Permission/makePermissionResource"
import makeProductResource from "./Product/makeProductResource"
import makeReviewResource from "./Review/makeReviewResource"
import makeRoleResource from "./Role/makeRoleResource"
import makeTagResource from "./Tag/makeTagResource"
import makeUserResource from "./User/makeUserResource"
import makeVoucherResource from "./Voucher/makeVoucherResource"

export default function AppMenu() {
    useAuthenticated()
    const result = useGetIdentity()

    if (result.isLoading) {
        return (
            <Grid
                alignItems="center"
                container
                direction="column"
                marginTop={11}
                width={222}
            >
                <CircularProgress />
            </Grid>
        )
    }

    if (result.data === undefined) {
        return null
    }

    const user = result.data as CC.Me

    return (
        <Menu>
            <Menu.DashboardItem />

            {user.permissionzz.includes(PermissionEnum.ReadPageAttribute) ? (
                <Menu.ResourceItem {...makeAttributeResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageCategory) ? (
                <Menu.ResourceItem {...makeCategoryResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageCountry) ? (
                <Menu.ResourceItem {...makeCountryResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageFileInfo) ? (
                <Menu.ResourceItem {...makeFileInfoResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageOrder) ? (
                <Menu.ResourceItem {...makeOrderResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageProduct) ? (
                <Menu.ResourceItem {...makeProductResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageReview) ? (
                <Menu.ResourceItem {...makeReviewResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageTag) ? (
                <Menu.ResourceItem {...makeTagResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageUser) ? (
                <Menu.ResourceItem {...makeUserResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageVoucher) ? (
                <Menu.ResourceItem {...makeVoucherResource()} />
            ) : null}

            <Menu.Item disabled primaryText="--------------------------------" to="/" />

            {user.permissionzz.includes(PermissionEnum.ReadPageAdmin) ? (
                <Menu.ResourceItem {...makeAdminResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageOperation) ? (
                <Menu.ResourceItem {...makeOperationResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPagePermission) ? (
                <Menu.ResourceItem {...makePermissionResource()} />
            ) : null}

            {user.permissionzz.includes(PermissionEnum.ReadPageRole) ? (
                <Menu.ResourceItem {...makeRoleResource()} />
            ) : null}

            {/* <Menu.Item
                to="/Setting"
                primaryText="Setting"
                leftIcon={<SettingsIcon />}
            /> */}
        </Menu>
    )
}
