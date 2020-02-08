<template>
    <div id="app">
        <router-view/>
    </div>
</template>

<style lang="scss">
    @import "~@/assets/style/helper.scss";

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    a{
        text-decoration: none;
        color: inherit;
    }
    ul,ol{
        list-style: none;
    }
    button,input{
        font:inherit;
    }
    :focus{
        outline: none;
    }

    /*像这种共用的样式，如果这个项目是你一个人开发的，你可以放在body上，如果是多个部门协作的，*/
    /*最好不要放在body上面，因为这可能影响他人放进来的组件*/

    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #333;
        font-family: $font-hei;
        line-height: 1.5;
        background-color: $color-background-color;
        font-size: 14px;
    }

    #nav {
        padding: 30px;

        a {
            font-weight: bold;
            color: #2c3e50;

            &.router-link-exact-active {
                color: #42b983;
            }
        }
    }
</style>
