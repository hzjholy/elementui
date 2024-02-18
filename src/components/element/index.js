import Row from "@element/row";
import Col from "@element/col";
import Container from "@element/container";
import Main from "@element/main";
import Header from "@element/header";
import Footer from "@element/footer";
import Aside from "@element/aside";

const components = [
    Row,
    Col,
    Container,
    Main,
    Header,
    Footer,
    Aside
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
    Col,
    Container,
    Main,
    Header,
    Footer,
    Aside
}

// 按需导出

export {
    install,
    Row,
    Col,
    Container,
    Main,
    Header,
    Footer,
    Aside
}