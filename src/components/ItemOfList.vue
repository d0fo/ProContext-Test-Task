<script>
export default {
    props: ['item', 'listofItemColors', 'listNumber', 'isAllItemsAreChecked'],
    data() {
        return {
            checkedColor: "#e66465",
            checkedNumber: 3,
            isItemChecked: true,
            allItemsChecked: false
        }
    },
    methods:{
        
        itemChecked(item) {
            this.$emit('listItemChecked', [this.isItemChecked, item])
            this.$store.commit(
                'fillList', {
                    listNumber: this.listNumber,
                    itemNumber: this.item,
                    checkedColor: this.checkedColor,
                    checkedNumber: this.checkedNumber
                    }
                )
        },
        changes(e) {
            if(e.type === 'input') {
                e.target.value = e.target.value.replace(/[^\d.]/g, '');
            }
            this.$store.commit(
                'fillList', {
                    listNumber: this.listNumber,
                    itemNumber: this.item,
                    checkedColor: this.checkedColor,
                    checkedNumber: this.checkedNumber
                    }
                ) 
        }
    },
    created() {
        this.$store.commit(
                'fillList', {
                    listNumber: this.listNumber,
                    itemNumber: this.item,
                    checkedColor: this.checkedColor,
                    checkedNumber: this.checkedNumber
                    }
                )
    },
    watch: {
        isAllItemsAreChecked(newv) {
            this.allItemsChecked = newv
            if(!newv) {
                this.isItemChecked = false
            }

        }
    }
}
</script>
<template>
    <li class="item">
        <div class="item-checkbox-wrapper">
            <input class="item-checkbox" type="checkbox" v-model="isItemChecked" @change="itemChecked(item)">
            <img class="item-checkbox-img" src="../assets/img/checkbox_blank_outline_icon_139814.png" alt="item-checkbox">
            <img v-if="isItemChecked" class="item-checkbox-flag" src="../assets/img/checkbox_mark_icon_160923.png" alt="item-checkbox-flag">
            <p>Item {{ item }}</p>
        </div>
        <div class="item-params">
            <input class="item-number-input" type="text" v-model.number="checkedNumber" @input="changes" >
            <input class="color-input" type="color" value="#e66465" v-model="checkedColor" @change="changes"/>
        </div>
    </li>
</template>
<style>
.item {
    display: flex;
    justify-content: space-between;
    padding-left: 80px;
    padding-right: 20px;
}
.item-checkbox-wrapper {
    position: relative;
    display: flex;
}
.item-checkbox {
    margin-right: 20px;
    width: 20px;
    height: 20px;
    transform: scale(1.1);
    z-index: 10;
}
.item-checkbox-img {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
}
.item-checkbox-flag {
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0;
    left: 0;
}
.item-number-input {
    width: 30px;
    margin-right: 20px;
    opacity: 1;
}
.item-color-select {
    width: 30px;
}
.item-color {
    width: 10px;
    height: 10px;
}
.color-input {
    opacity: 1;
    width: 20px;
    height: 20px;
}
</style>