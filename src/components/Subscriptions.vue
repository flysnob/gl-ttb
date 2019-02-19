<template>
  <div id="subscriptions">
    <div v-for="(subscription, index) in subscriptions" :key="subscription.id">
      <p>{{subscription.name}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      subscriptions: [],
      name: [],
      errors: []
    }
  },
  created() {
    axios.get('http://localhost:3000/subscriptions')
    .then(response => {
      this.subscriptions = response.data
    })
    .catch(e => {
      this.error.push(e)
    })
  },
}
</script>
