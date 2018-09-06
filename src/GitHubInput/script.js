import bus from "../bus"

export default {
  name: "GitHubInput",
  methods: {
    onSubmit(event) {
      if (this.username && this.username !== "") {
        bus.$emit("new-username", this.username)
      }
    }
  },
  data() {
    return {}
  }
}
