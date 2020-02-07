<template>
   <nav class="nav">
       <router-link to="/money" class="item" active-class="active">
           <Icon name="money"/>
           <span>money</span>
       </router-link>
       <router-link to="/labels" class="item" active-class="active">
           <Icon name="labels"/>
           <span>labels</span>
       </router-link>
       <router-link to="/statistics" class="item" active-class="active">
           <Icon name="statistics"/>
           <span>statistics</span>
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
            align-items: center;

            .icon{
                width: 24px;
                height: 24px;
                text-align: center;
                justify-content: center;
            }

        }
        .active{
            .icon{
                color: #fad549;
            }
        }

    }

</style>