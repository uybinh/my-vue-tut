import GitHubInput from "../GitHubInput/index.vue"
import GitHubOutput from "../GitHubOutput/index.vue"

export default {
  name: "App",
  components: {
    "github-input": GitHubInput,
    "github-output": GitHubOutput
  },
  data() {
    return {
      todo: "Hello"
    }
  }
}
