<template>
    <div id="app">
        Test
    </div>
</template>
<script>
import headify from "headify";

export default {
    mixins: [
        headify
    ],
    head: function(object){
        return {
            meta: `
                <script src="https://unpkg.com/vue/dist/vue.js"><\/script>
            `,//MIGHT HAVE ISSUES HERE
            title: `<title>Test - My Website': 'My Website'</title>`
        }
    }
}
</script>