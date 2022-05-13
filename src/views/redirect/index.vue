<script>
export default {
  created() {
    const { params: { path = '' } = {}, query } = this.$router
    this.$router.replace({ path: `/${path}`, query })
  }
}
</script>
