<script>
export default {
    props: ['item', 'listNumber']
}
</script>
<template>
    <li class="item-right" :class="{'item-right--open': $store.state.isRightListOpen[listNumber-1]}">
        <div class="item-colored" 
        v-for="(color, index) in item.checkedNumber"
        :key="index"
        :style="{'background-color': item.checkedColor}"
        ></div>
    </li>
</template>
<style>
.item-right {
    display: none;
    gap: 10px;
    flex-wrap: wrap;
}
.item-right--open {
    display: flex;
}
.item-colored {
    width: 10px;
    height: 10px;
}
.item-right:not(:last-child) {
    margin-bottom: 10px;
}
</style>