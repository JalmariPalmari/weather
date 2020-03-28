var sayHello = {
    created(){
      console.log("New component created");
    }
  }
  var highlight = Vue.directive('highlight-on-change', {
      update: function(el, binding) {
        prevColor = el.style.backgroundColor;
        el.style.backgroundColor = 'yellow';
        setTimeout(function(){
          el.style.backgroundColor = 'white';
        }, 1500)
      }
  })
  Vue.component('todo-header', {
    render(createElement) {
      return createElement('h1', 'ToDo List')
    }
  })
  Vue.component('todo-item', {
    props: ['todo'],
    mixins: [sayHello],
    template: '#todo-item-template',
    methods: {
      markCompleted : function () {
        this.todo.completed = ! this.todo.completed;
      }
    }
  })
  var app = new Vue({
    el: '#app',
    data: {
      title: "Meija's ToDo-list",
      list: [
        {
          id: 0,
          name: 'Eka tehtävä',
          completed: true
        },
        {
          id: 1,
          name: 'Toka tehtävä',
          completed: false
        }
      ],
      newItem: '',
      answer: '',
      img: '',
      nextID: 2
    },
    computed: {
      description: function() {
        return this.title + ' (' + this.list.length + ' items)';
      }
    },
    methods: {
      addToList: function () {
        this.list.push({ id: this.nextID, name: this.newItem, completed: false});
        this.nextID++;
      },
      getAnswer: function () {
        axios.get('https://yesno.wtf/api')
          .then(function (response) {
            app.answer = response.data.answer;
            app.img = response.data.image;
          })
          .catch(function (error) {
            app.answer = 'Error! Could not reach the API. ' + error
          })
      }
  
    }
  })