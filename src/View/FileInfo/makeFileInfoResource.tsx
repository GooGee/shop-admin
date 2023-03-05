import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import { Create, Edit } from "react-admin"
import CanAccess from "../CanAccess"
import FileInfoList from "./FileInfoList"

export default function makeFileInfoResource() {
    return {
        name: EntityEnum.FileInfo,
        list: (
            <CanAccess permission={PermissionEnum.ReadPageFileInfo}>
                <FileInfoList></FileInfoList>
            </CanAccess>
        ),
    }
}
