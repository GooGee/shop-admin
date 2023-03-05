import { AppBar, Layout } from "react-admin"
import AppError from "./AppError"
import AppMenu from "./AppMenu"
import InputModal from "./Modal/InputModal"
import SelectImageModal from "./Modal/SelectImageModal"
import ToastList from "./Part/ToastList"

export default function AppLayout(props: any) {
    return (
        <>
            <Layout {...props} appBar={AppBar} error={AppError} menu={AppMenu} />

            <InputModal />
            <SelectImageModal />
            <ToastList />
        </>
    )
}
