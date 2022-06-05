import {createWebHashHistory, createRouter} from "vue-router";
import Home from "./views/Home.vue";
import Doc from "./views/Doc.vue";
import SwitchDemo from "./components/SwitchDemo.vue";
import ButtonDemo from "./components/ButtonDemo.vue";
import DialogDemo from "./components/DialogDemo.vue";
import TabsDemo from "./components/TabsDemo.vue";
import DocDemo from "./components/DocDemo.vue";
import {h} from "vue";
import Markdown from "./components/Markdown.vue";

const history = createWebHashHistory();
const md = fileName => h(Markdown, {path: `../markdown/${fileName}.md`, key: fileName});
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
                { path: "", redirect: '/doc/intro' },
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
                    component: md("intro")
                },
                {
                    path: "get-started",
                    component: md("get-started")
                },
                {
                    path: "install",
                    component: md("Install")
                }
            ]
        }
    ]
});
router.afterEach(() => {
    console.log("路由切换了");
});
