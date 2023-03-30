import Ibutton from "./button/index";
import ElementPlus from "element-plus";
import locale from "element-plus/lib/locale/lang/zh-cn";
import "element-plus/dist/index.css";
const install = function (Vue, options) {
    ElementPlus.install(Vue, { locale });
    // mergeOptions(options);
    // components.forEach((item) => {
        Vue.component(Ibutton.name, Ibutton);
    // });
};
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}
// export default {
//   install,
// };
// const install = app => {
//     app.use(Ibutton)
// }
const IUI = {
    install,
};
export { Ibutton };
export default IUI;
