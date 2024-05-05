<script>
import ItemOfListRight from './ItemOfListRight.vue';
import ItemsOfListsShuffled from '@/components/ItemsOfListsShuffled.vue'
export default {
    props: ['listNumber'],
    components: {
        ItemOfListRight,
        ItemsOfListsShuffled
    },
    data() {
        return {
            sort: 'Перемешать',
            sorted: true
        }
    },
    methods: {
        randomSorting() {
            this.sorted = !this.sorted
            this.sorted ? this.sort = 'Перемешать': this.sort = 'Сортировать'
            this.$store.commit(
                'randomSorting'
            )
        }
    }
    
}
</script>
<template>
    <li class="list-right">
        <p class="list-title" :class="{'list-title--open': $store.state.isRightListOpen[listNumber-1]}">List {{ listNumber }}</p>
        <button class="sort-btn" @click="randomSorting">{{ sort }}</button>
        <div v-if="sorted" >
            <ItemOfListRight
            v-for="(item, index) in $store.state.listOfLists[listNumber-1].items"
            :key="index"
            :item="item"
            :listNumber="listNumber"
            />
        </div>
        <ItemsOfListsShuffled v-if="!sorted"/>
    </li>
</template>
<style>
.list-right {
    position: relative;
    padding: 10px;
    border: 1px solid black;
}
.list-right:not(:last-child) {
    margin-bottom: 10px;
}
.tems-of-list-right{
    display: none;
}
.list-title--open {
    margin-bottom: 15px;
}
.sort-btn {
    position: absolute;
    min-width: 120px;
    top: 9px;
    right: 10px;
    padding: 3px 10px;
    background-color: rgb(100, 175, 232);
    border: none;
    border-radius: 5px;
    color: white;

}
</style>