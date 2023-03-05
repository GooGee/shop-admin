namespace CC {


    interface Address {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        countryId: number
        userId: number
        zip: number
        name: string
        phone: string
        text: string
    }

    interface Admin {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        name: string
        email: string
        password: string
        remember_token: string
        permissionzz: Wu[]
        rolezz: Wu[]
        dtSuspend: string
    }

    interface AdminSession {
        id: number
        dtCreate: string
        dtUpdate: string
        adminId: number
    }

    interface ApiResponse {
        code: number
        message: string
        data: WuParameter
        errors: Wu
        item: WuParameter
        itemzz: WuParameter[]
        page: Wu
    }

    interface Attribute {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        categoryId: number
        name: string
    }

    interface AttributeValue {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        attributeId: number
        text: string
    }

    interface CartProduct {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        userId: number
        productSkuId: number
        amount: number
    }

    interface Category {
        id: number
        dtCreate: string
        dtUpdate: string
        name: string
        parentId: number
        dtDelete: string
        image: string
    }

    interface Chart {
        id: number
        length: number
    }

    interface Country {
        id: number
        dtCreate: string
        dtUpdate: string
        name: string
        dtDelete: string
    }

    interface EmptyEntity {
    }

    interface File {
        id: number
        file: string
    }

    interface FileInfo {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        location: string
        uri: string
        mime: string
        width: number
        height: number
    }

    interface Liked {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        userId: number
        productId: number
    }

    interface Me {
        id: number
    }

    interface Menu {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        name: string
        parentId: number
    }

    interface ModelHasPermission {
        permission_id: number
        model_type: string
        model_id: number
        id: number
    }

    interface ModelHasRole {
        role_id: number
        model_type: string
        model_id: number
        id: number
    }

    interface Notification {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        text: string
    }

    interface Operation {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        name: string
        text: string
        adminId: number
    }

    interface Order {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        userId: number
        sum: string
        dtCancel: string
        dtExpire: string
        dtFulfill: string
        dtPay: string
        dtReceive: string
        dtRefund: string
        dtReturn: string
        status: string
        statusPayment: string
        addressId: number
    }

    interface OrderProduct {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        orderId: number
        amount: number
        price: number
        productSkuId: number
    }

    interface Page {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        title: string
        content: string
    }

    interface Paginator {
        current_page: number
        data: WuParameter[]
        first_page_url: string
        from: string
        next_page_url: string
        path: string
        per_page: number
        prev_page_url: string
        to: number
        total: number
        last_page: number
        last_page_url: string
        links: string
    }

    interface ParameterInPath {
        id: number
    }

    interface ParameterInQuery {
        id: number
        page: number
        adminId: number
        dtStart: string
        dtEnd: string
    }

    interface Permission {
        id: number
        name: string
        guard_name: string
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        moderator: string
    }

    interface Post {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        reviewId: number
        adminId: number
        userId: number
        text: string
    }

    interface Product {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        name: string
        price: number
        stock: number
        discount: number
        image: string
        imagezz: string[]
        categoryId: number
        aaLiked: number
        aaSold: number
        rating: number
        ratingzz: string
        dtPublish: string | null
        detail: string
        shopId: number
    }

    interface ProductSku {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        productId: number
        price: number
        stock: number
        variationzz: Wu[]
    }

    interface ProductVariant {
        id: number
        attribute: string
        value: string
        attributeId: number
        attributeValueId: number
    }

    interface ProductVoucher {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        productId: number
        voucherId: number
    }

    interface Review {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        userId: number
        productId: number
        text: string
        rating: number
        soi: number
    }

    interface Role {
        id: number
        name: string
        guard_name: string
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        isUserCreated: boolean
    }

    interface RoleHasPermission {
        permission_id: number
        role_id: number
        id: number
    }

    interface Setting {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        name: string
        value: string
        type: string
        rac: string
    }

    interface Tag {
        id: number
        dtCreate: string
        dtUpdate: string
        name: string
        dtDelete: string
    }

    interface Trend {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        amount: number
        type: string
    }

    interface User {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        name: string
        email: string
        password: string
        remember_token: string
        remember: boolean
        passwordOld: string
        aaOrder: number
        aaSpend: number
    }

    interface Verification {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        userId: number
        code: number
    }

    interface Voucher {
        id: number
        dtCreate: string
        dtUpdate: string
        dtDelete: string
        type: string
        amount: number
        limit: number
        code: string
        dtStart: string
        dtEnd: string
        name: string
    }


}