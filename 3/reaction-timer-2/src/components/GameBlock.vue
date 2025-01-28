<template>
    <div class="block" v-if="showBlock">
        click me
    </div>
</template>

<script>
export default {
    name: 'GameBlock',
    props: ['delay'],
    methods: {

    },
    data() {
        return {
            showBlock: false,
        }
    },
    mounted (){
        // console.log('block mounted')
        // console.log(this.delay)
        setTimeout(() => {
            this.showBlock = true
        }, this.delay);
    },
    // updated (){
    //     console.log('block updated')
    // },
    // unmounted(){
    //     console.log('block unmounted')
    // }

}

</script>

<style>
.block{
    width: 400px;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
}
</style>