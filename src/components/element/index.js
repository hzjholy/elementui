import Row from "@element/row";
import Col from "@element/col";

const components = [
    Row,
    Col
]

const install = (Vue) => {
    components.forEach((component) => {
        Vue.component(component.name,component)
    })
}
// 注意区分！默认导出与export导出的事项

// 全部导出

export default {
    install,
    Row,
    Col
}

// 按需导出

export {
    install,
    Row,
    Col
}