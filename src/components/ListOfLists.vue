<script>
import ItemOfList from "@/components/ItemOfList.vue"
export default {
    components: {ItemOfList},
    props: ['listNumber', 'itemsCount', 'listofItemColors', 'listOfItemsNumber'],
    data() {
        return {
            listChecked: false,
            itemCheckList: [],
            isSomeItemChecked: true,
            isAllItemsAreChecked: null
        }
    },
    methods: {
        ItemIsChecked(data) {
            this.itemCheckList.splice(data[1]-1, 1, data[0])
            this.itemCheckList.includes(true) ? this.isSomeItemChecked = true : this.isSomeItemChecked = false
        },
        listOpen() {
            this.$store.commit(
            'openRightList', [this.listChecked, this.listNumber]
                )
        }
    },
    mounted() {
        for( let i = 0; i < this.listOfItemsNumber[this.listNumber-1]; i++) {
            this.itemCheckList[i] = true
        }
    },
    watch: {
        itemCheckList: {
            handler(val) {
                if(!val.includes(false)) {
                    setTimeout(()=>{ //без setTimeout не увидеть выполнение требования снятия выделения при раскрытии списка
                        this.isItemChecked = false
                        for(let i in val) {
                            if(val[i]===true) {
                                val.splice(i,1, false)
                            }
                        }
                        this.isAllItemsAreChecked = false
                        this.isSomeItemChecked = false
                    },2000)
                } else if (val.includes(true)) {
                    this.isAllItemsAreChecked = true
                }
            },
            deep: true
        }
    }
}
</script>
<template>
    <li class="lists-list">
        <div class="list-checkbox-wrapper">
            <input class="list-checkbox" type="checkbox" v-model="listChecked" @change="listOpen">
            <img v-if="listChecked" class="list-img" src="../assets/img/ios7-arrow-right_icon-icons.com_50349.png" alt="arrow">
            <img v-if="!listChecked" class="list-img" src="../assets/img/ios7-arrow-down_icon-icons.com_50352.png" alt="arrow">
            <div class="nested-items-checked">
                <img class="nested-items-img" src="../assets/img/checkbox_blank_outline_icon_139814.png" alt="nested item dont checked">
                <img v-if="isSomeItemChecked" class="nested-items-checked-img" src="../assets/img/square_small_icon_135158.png" alt="nested items checked">
            </div>
            <p>List {{ listNumber }}</p>
        </div>
        <div class="items-list-dropdown" :class="{'dropdown-open': listChecked}">
            <ul class="items-list">
                <ItemOfList 
                v-for="(item, index) in itemsCount[listNumber - 1]" 
                :key="index" 
                :item="item" 
                :listofItemColors="listofItemColors"
                @listItemChecked="ItemIsChecked"
                :listNumber="listNumber"
                :itemCheckList="itemCheckList"
                :isAllItemsAreChecked="isAllItemsAreChecked"
                />
            </ul>
        </div>
    </li>
</template>
<style>
.lists-list {
    display: flex;
    flex-direction: column;
}
.list-checkbox-wrapper {
    display: flex;
    position: relative;
    align-items: center;
}
.list-checkbox {
    margin-right: 20px;
    width: 20px;
    height: 20px;
    transform: scale(1.1);
    z-index: 10;
}
.list-img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
}
.items-list-dropdown {
    display: none;
}
.dropdown-open {
    display: block;
}
.nested-items-checked {
    position: relative;
    width: 20px;
    height: 20px;
    margin-right: 20px;
}
.nested-items-img, .nested-items-checked-img {
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
}
</style>