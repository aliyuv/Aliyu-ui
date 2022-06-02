import {createWebHashHistory, createRouter} from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import Intro from "./views/Intro.vue";
import GetStared from "./views/GetStared.vue";
import Install from "./views/Install.vue";

const history = createWebHashHistory();
export const router = createRouter({
    history: history, routes: [
        {
            path: "/",
            component: Home
        },
        {
            path: "/doc",
            component: Doc,
            children: [
                {
                    path: "",
                    component: DocDemo
                },
                {
                    path: "switch",
                    component: SwitchDemo
                },
                {
                    path: "button",
                    component: ButtonDemo
                },
                {
                    path: "dialog",
                    component: DialogDemo
                },
                {
                    path: "tabs",
                    component: TabsDemo
                },
                {
                    path: "intro",
                    component: Intro
                },
                {
                    path: "get-started",
                    component: GetStared
                },
                {
                    path: "install",
                    component: Install
                }
            ]
        }
    ]
});
router.afterEach(() => {
    console.log("路由切换了");
});
