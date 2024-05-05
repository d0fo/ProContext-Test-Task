<script>
export default {
    props: []
}
</script>
<template>
    <div class="items-wrapper">
        <div class="item-colored--shuffled" :style="{'background-color': item}"
            v-for="(item, index) in $store.state.randomSortList"
            :key="index"
        >
        </div>
    </div>
</template>
<style>
.items-wrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
}
.item-colored--shuffled {
    width: 10px;
    height: 10px;
}

</style>