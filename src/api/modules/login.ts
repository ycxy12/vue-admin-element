import { Login } from "@/api/interface/index"
import { Menu } from "@/routers/interface/index"
import http from "@/api"

/**
 * @name 登录模块
 */
// 用户登录
export const loginApi = (params: Login.ReqLoginForm) => {
    return http.post<Login.ResLogin>("/api/login", params, { noLoading: true }) // 正常 post json 请求  ==>  application/json
    // return http.post<Login.ResLogin>("/api/login", params, { noLoading: true }); // 控制当前请求不显示 loading
    // return http.post<Login.ResLogin>("/api/login", {}, { params }); // post 请求携带 query 参数  ==>  ?username=admin&password=123456
    // return http.post<Login.ResLogin>("/api/login", qs.stringify(params)); // post 请求携带表单参数  ==>  application/x-www-form-urlencoded
    // return http.get<Login.ResLogin>(`/api/login?${qs.stringify(params, { arrayFormat: "repeat" })}`); // get 请求可以携带数组等复杂参数
}

// 获取菜单列表
export const getAuthMenuListApi = () => {
    return http.get<Menu.MenuOptions[]>("/api/menu/list", {}, { noLoading: true })
}

// 获取按钮权限
export const getAuthButtonListApi = () => {
    return http.get<Login.ResAuthButtons>("/api/auth/buttons", {}, { noLoading: true })
}

// 用户户退出登录
export const logoutApi = () => {
    return http.post("/api/geeker/logout")
}
