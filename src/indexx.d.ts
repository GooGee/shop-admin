namespace CC {
    interface AdminDetail extends Admin {
        permissionzz: (Permission & WithPivot<ModelHasPermission>)[]
        rolezz: (Role & WithPivot<ModelHasRole>)[]
    }

    interface ApiDataResponse<T = null> {
        message: string
        data: T
    }

    interface ApiErrorResponse {
        message: string
        errorzz: Record<string, string[]>
    }

    interface ApiItemResponse<T extends IdItem = IdItem> {
        message: string
        item: T
    }

    interface ApiItemzzResponse<T extends IdItem = IdItem> {
        message: string
        itemzz: T[]
    }

    interface ApiPageResponse<T extends IdItem = IdItem> {
        message: string
        page: Paginator<T>
    }

    interface IdItem {
        id: number
    }

    interface IdNameItem extends IdItem {
        name: string
    }

    interface Me extends Admin {
        id: number
        permissionzz: string[]
    }

    interface Paginator<T> {
        data: T[]
        total: number
        current_page: number
        first_page_url: string
        from: string
        next_page_url: string
        path: string
        per_page: number
        prev_page_url: string
        to: number
        last_page: number
        last_page_url: string
        links: string[]
    }

    interface PostDetail extends Post {
        admin: Admin
        user: User
    }

    interface ProductDetail extends Product {
        voucherzz: (Voucher & WithPivot<ProductVoucher>)[]
    }

    interface RoleDetail extends Role {
        permissionzz: (Permission & WithPivot<RoleHasPermission>)[]
    }

    interface WithPivot<T extends IdItem> {
        pivot: T
    }
}
