<script>
import path from 'path'
import { h } from 'vue'
export default {
  created() {
    const { params: { path = '' } = {}, query } = this.$route
    console.log(this.$route)
    this.$router.replace({ path: this.resolve(path), query })
  },
  render() {
    return h()
  },
  methods: {
    resolve(p) {
      return path.resolve('/', p)
    }
  }
}
</script>
