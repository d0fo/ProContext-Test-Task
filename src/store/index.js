import { createStore } from 'vuex'

const store = createStore({
    state () {
      return {
        listOfLists: [{listNumber:1, items: []}, {listNumber:2, items: []}, {listNumber:3, items: []}, {listNumber:4, items: []}, {listNumber:5, items: []}, ],
        isRightListOpen: [false, false, false, false, false],
        randomSortList: [],
        
      }
    },
    mutations: {
      fillList (state, payload) {
        let item = {
            itemNumber:payload.itemNumber,
            checkedColor: payload.checkedColor,
            checkedNumber: payload.checkedNumber
        }

        let list = state.listOfLists[payload.listNumber-1]
        
        if(list.items.length===0) {
            list.items.push(item)
        } else if(list.items.length>0) {
            if(!list.items.map(el=>el.itemNumber).includes(payload.itemNumber)) {
                list.items.push(item)
            } else if(list.items.map(el=>el.itemNumber).includes(payload.itemNumber)) {
                for(let i=0; i<list.items.length; i++) {
                        if(list.items[i].itemNumber === payload.itemNumber) {
                            list.items[i] = item
                        }
                }
            }
        }
      },
      openRightList(state, payload) {
        state.isRightListOpen[payload[1]-1] = payload[0]
      },
      randomSorting(state) {
        state.randomSortList = []
        for (let list of state.listOfLists) {
          for (let items of list.items) {
            for (let i=0; i<items.checkedNumber; i++) {
              state.randomSortList.push(items.checkedColor)
            }
            
          }
        }
        function shuffle(arr){
          let j, temp;
          for(var i = arr.length - 1; i > 0; i--){
            j = Math.floor(Math.random()*(i + 1));
            temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
          }
          return arr;
        }
        shuffle(state.randomSortList)
        console.log(shuffle(state.randomSortList))
      }
    }
  })

export default store