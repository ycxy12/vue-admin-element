import { createApp } from "vue"
import App from "./App.vue"
import "reset-css" // 重置样式表
// import "virtual:svg-icons-register" //svg icon
import ElementPlus from "element-plus" //引入element-plus
import "element-plus/dist/index.css" //引入样式
import * as ElementPlusIconsVue from "@element-plus/icons-vue" //导入所有element图标
import "@/styles/index.scss"
import router from "@/routers"
import pinia from "@/stores"

const app = createApp(App)

// 注册element-icons组件
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(ElementPlus).use(router).use(pinia).mount("#app")
