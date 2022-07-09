<template>
  <div class="toast" v-show="isShow">
    {{message}}
  </div>
</template>

<script>
export default {
    name: "Toast",
    data(){
        return {
            message: "",
            isShow: false
        }
    },
    methods: {
        show(res, duration=1500){
            this.message = res
            this.isShow = true;
            setTimeout(()=> {
                this.isShow = false;
                this.message = ""
            }, duration)
        }
    }
}
</script>

<style scoped>
.toast {
    padding:7px;
    background-color: rgba(0, 0, 0, 0.7);
    color: white;
    z-index: 999;
    position: fixed;
    top:50%;
    left: 50%;
    transform: translate(-50%, -50%);

}
</style>