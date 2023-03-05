import { EntityEnum, PermissionEnum } from "@/TypeScriptEnum"
import CanAccess from "../CanAccess"
import ReviewList from "./ReviewList"
import ReviewShow from "./ReviewShow"

export default function makeReviewResource() {
    return {
        name: EntityEnum.Review,
        list: (
            <CanAccess permission={PermissionEnum.ReadPageReview}>
                <ReviewList></ReviewList>
            </CanAccess>
        ),
        show: (
            <CanAccess permission={PermissionEnum.ReadOneReview}>
                <ReviewShow></ReviewShow>
            </CanAccess>
        ),
    }
}