<script>
import { h } from 'vue'
export default {
  created() {
    const { params: { path = '' } = {}, query } = this.$router
    this.$router.replace({ path: `/${path}`, query })
  },
  render() {
    return h()
  }
}
</script>
