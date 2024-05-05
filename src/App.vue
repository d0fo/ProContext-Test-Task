<script>
import ListOfLists from '@/components/ListOfLists.vue'
import ListOfListsRight from '@/components/ListOfListsRight.vue'

export default {
  components: {
    ListOfLists,
    ListOfListsRight
  },
  data() {
    return {
      listOfLists: [1,2,3,4,5],
      listOfItemsNumber: [],
      listofItemColors: ['black', 'blue', 'yellow', 'green', 'red', 'gray', 'white', 'Purple', 'Maroon', 'Olive', 'Teal', 'Navy', 'Aqua','Fuchsia'],
    }
  },
  created() {
        for(let i=0; i<5; i++) {
          let rundomNumber = Math.floor(Math.random()*11+4)
          this.listOfItemsNumber.push(rundomNumber)
        }
        
    },
}

</script>

<template>
  <div class="container">
    <div class="wrapper">
      <div class="left-block">
        <ul class="list-of-lists">
          <ListOfLists 
          v-for="(list, index) in listOfLists " 
          :key="index" 
          :listNumber="list" 
          :itemsCount="listOfItemsNumber" 
          :listofItemColors="listofItemColors"
          :listOfItemsNumber="listOfItemsNumber"
          />
        </ul>
      </div>
      <div class="right-block">
        <ul class="list-of-lists">
          <ListOfListsRight 
          v-for="(list, index) in $store.state.listOfLists " 
          :key="index" 
          :listNumber="list.listNumber"
          />
        </ul> 
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 50px;
}
.wrapper {
  min-height: 100px;
  border: 1px black solid;
  display: flex;
  gap: 100px;
  padding: 20px;
}
.left-block {
  width: 50%;
  padding: 20px;
  border: 1px black solid;
}
.right-block {
  width: 50%;
  border: 1px black solid;
}
.list-of-lists {
  display: flex;
  flex-direction: column;
}
.right-block {
  border: 1px solid black;
  padding: 20px;
}
</style>
