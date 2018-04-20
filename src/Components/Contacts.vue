<template>
   <ul>
    <li v-for="item in blocks" :key="item.id"> {{item.age}}</li>
    <li> {{y}}</li>
    <li> {{x+y}}</li>
   </ul>
</template>

<script>
export default {
    data(){
        return {
            x: 100,
            y: 200,
            blocks:[
                {age : 30},
                {age : 330},
                {age : 320},
                {age : 10},
                {age : 30},
                {age : 330},
                {age : 320},
                {age : 10},
                {age : 30},
                {age : 330},
                {age : 320},
                {age : 10},
                {age : 30},
                {age : 330},
                {age : 320},
                {age : 10},
                {age : 30},
                {age : 330},
                {age : 320},
                {age : 10},
                {age : 30},
                {age : 330},
                {age : 320},
                {age : 10},
            ]
        }
    }

}
</script>

<style scoped>

</style>
