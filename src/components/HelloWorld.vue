<template>
  <div class="kalastus">
    <h1>{{ kalastusScript }}</h1>
  <todo-header>
      </todo-header>
      <ul v-highlight-on-change>
        <!--<li v-for="item in list" :class="{ completed: item.completed }" @click="item.completed=!item.completed">{{ item.name }}</li>-->
        <todo-item v-for="item in list" v-bind:key="item.id" :todo="item"></todo-item>
      </ul>
      <input type="text" name="" value="" v-model="newItem" @keyup.enter="addToList()">
      <button type="button" name="button" @click.stop ="addToList()">Lisää uusi</button>
      <button type="button" name="button" @click="list.pop()">Poista viimeinen</button>
      <h6>{{ description }}</h6>
      <button type="button" name="button" @click="getAnswer()">Is this fun?</button>
      <h6>{{ answer }}</h6>
      <img :src="img" alt="" />
    </div>
</template>

<script>
export default {
  name: 'KalastusKirja ',
  props: {
    kalastusScript: String
  }
}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
