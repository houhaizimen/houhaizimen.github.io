<script>
export default {
    // 方法1
    props: {
        level: ''
    },
    // render(createElement) {
    //     return createElement (
    //         'h' + this.level,
    //         this.$slots.default
    //     )
    // }
    render (h) {
        let childheader = this.$slots.childheader, // <=> <slot name='childHeader></slot>
            childbody = this.$slots.childbody,
            childfooter = this.$slots.childfooter;
        return h(
            'h' + this.level, {
                style: {
                    width: '100%'
                },
            }, [
                h('div', childheader),
                h('div', childbody),
                h('div', childfooter),
            ]
        )
    }
}
</script>
