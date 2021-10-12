import { createApp } from "vue";
import App from "./App.vue";
import less from "less";
import router from "./router/index";
import naive from "naive-ui";

createApp(App).use(less).use(router).use(naive).mount("#app");
