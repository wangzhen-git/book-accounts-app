<template>
   <nav class="nav">
       <router-link to="/money" class="item">
           <Icon name="money"/>
           money
       </router-link>
       <router-link to="/labels" class="item">
           <Icon name="labels"/>
           labels
       </router-link>
       <router-link to="/statistics" class="item">
           <Icon name="statistics"/>
           statistics
       </router-link>
   </nav>
</template>

<script lang="ts">
    export default {
        name: "Nav"
    };
</script>

<style scoped lang="scss">
    .nav{
        display: flex;
        /*用阴影的最高境界就是让人看不出来你用了阴影*/
        box-shadow: 0 0 3px rgba(0,0,0,0.25);
        .item{
            width: 33.3333%;
            display: flex;
            justify-content: center;
            border: 1px solid red;
            align-content: center;
            flex-direction: column;
            text-align: center;

        }

    }

</style>