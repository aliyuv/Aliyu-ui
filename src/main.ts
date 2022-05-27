import {createApp} from "vue";
import App from "./App.vue";
import "./index.css";
import {createWebHashHistory, createRouter} from "vue-router";
import Aliyu from "./components/Aliyu.vue";
import Aliyu2 from "./components/Aliyu2.vue";

const history = createWebHashHistory();
const router = createRouter({
    history: history, routes: [
        {
            path: "/",
            component: Aliyu
        },
        {
            path: "/aliyu",
            component: Aliyu2
        }
    ]
});
const app = createApp(App);
app.use(router);
app.mount("#app");
