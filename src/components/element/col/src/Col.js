export default {
    name: "ElCol",
    props: {
        tag: {
            type: String,
            default: 'div'
        },
        span: {
            type: Number,
            default: 24,
        },
        offset: {
            type: Number,
            default: 0,
        },
        push: {
            type: Number,
            default: 0,
        },
        pull: {
            type: Number,
            default: 0,
        },
        xs: [Number, Object],
        sm: [Number, Object],
        md: [Number, Object],
        lg: [Number, Object],
        xl: [Number, Object],

    },
    computed: {
        gutter() {
            let parent = this.$parent;
            // 处理以便获取到col上一层的保证一定是row元素
            while (parent && parent.$options.name !== 'ElRow') {
                parent = this.$parent;
            }
            return parent ? parent.gutter : 0;
        },
        style() {
            const style = {};
            if (this.gutter) {
                style.paddingLeft = `${this.gutter / 2}px`;
                style.paddingRight = style.paddingLeft;
            }
            return style;
        },
        classList() {
            const propList = ['span', 'offset', 'push', 'pull'];
            const classList = [];
            const sizeList = ['xs', 'xm', 'md', 'lg', 'xl'];
            propList.forEach((prop) => {
                if (this[prop]) {
                    classList.push(
                        prop === 'span' ? `el-col-${this[prop]}` : `el-col-${prop}-${this[prop]}`,
                    );
                }
            });
            sizeList.forEach((size) => {
                if (typeof this[size] === 'number') {
                    classList.push(`el-col-${size}-${this[size]}`);
                } else if (typeof this[size] === 'object') {
                    // xs
                    // {
                    //     span:6,      el-col-xs-6
                    //     offset:8,    el-col-xs-offset-8
                    //     push:7,      el-col-xs-push-7
                    //     pull:9       el-col-xs-pull-9
                    // }
                    const props = this[size];
                    Object.keys(props).forEach((prop) => {
                        classList.push(
                            prop === 'span' ? `el-col-${size}-${props[prop]}` : `el-col-${size}-${prop}-${props[prop]}`,
                        );
                    });
                }
            });

            return classList;
        },
    },
    render(h) {
        return h(this.tag, {
            class: [
                'el-col',
                this.classList
            ],
            style: this.style
        }, this.$slots.default);
    }
};
