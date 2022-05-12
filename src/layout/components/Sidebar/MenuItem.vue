<script>
// render 函数通常只需要对全局注册的组件使用 resolveComponent
// 局部注册的组件可直接使用
import { h, resolveComponent } from 'vue'
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    isOnlyTop: {
      type: Boolean,
      default: false
    }
  },
  render() {
    const vnodes = []
    if (this.icon) {
      if (this.isOnlyTop) {
        vnodes.push(h(resolveComponent('el-tooltip'), {
          content: this.title,
          placement: 'right',
          offset: 26
        }, [
          h(resolveComponent('svg-icon'), { 'icon-class': this.icon })
        ]))
      } else {
        vnodes.push(h(resolveComponent('svg-icon'), { 'icon-class': this.icon }))
      }
    }
    if (this.title) {
      vnodes.push(h('span', { class: ['sidebar-title'] }, this.title))
    }
    return vnodes
  }
}
</script>

<style lang="scss" scoped>
.sidebar-title {
  padding-left: 6px;
}
</style>
