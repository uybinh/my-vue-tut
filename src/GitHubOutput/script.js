import bus from "../bus"
import Vue from "vue"
import githubUserdata from "../GitHubUserData/index.vue"

export default {
  name: "GithubOutput",
  components: {
    "github-user-data": githubUserdata
  },
  methods: {
    onUsernameChange(name) {
      this.currentUsername = name
      this.fetchGithubData(name)
    },
    fetchGithubData(name) {
      if (this.githubData.hasOwnProperty(name)) return
      const url = `https://api.github.com/users/${name}`
      fetch(url)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          Vue.set(this.githubData, name, data)
        })
    }
  },
  created() {
    bus.$on("new-username", this.onUsernameChange)
  },
  destroy() {
    bus.$off("new-username", this.onUsernameChange)
  },
  data() {
    return {
      currentUsername: null,
      githubData: {}
    }
  }
}
