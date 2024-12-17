// import Vue from "vue";
import { createApp } from "vue";
import App from "./App";
import router from "./routes/index.ts";
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

// main.ts
const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}

app.use(router).mount("#app");