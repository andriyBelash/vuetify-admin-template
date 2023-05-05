<script setup>
const props = defineProps({
  show: Boolean,
  title: String,
  maxWidth: [String, Number]
})

const emit = defineEmits(['close'])

</script>

<template>
  <div @click="emit('close')" class="modal-mask" v-if="show" transition="modal">
    <div class="modal-wrapper">
      <div :style="{maxWidth: maxWidth}" @click.stop class="modal-container">
        <div class="modal-header">
          <h3>{{title}}</h3>
        </div>

        <div class="modal-body">
          <slot name="body"></slot>
        </div>

        <div class="modal-footer">
          <slot name="footer">

          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-mask {
  position: fixed;
  z-index: 100000;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease
}
.modal-wrapper{
  display: table-cell;
  vertical-align: middle
}
.modal-container{
  width: 100%;
  margin: 0 auto;
  padding: 20px 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
  transition: all .3s ease
}
.modal-header{
  margin-top: 0;
  h3{
    color: rgb(17, 24, 49)
  }
}

.modal-body{
  margin: 20px 0
}


.modal-button{
  float: right
}


.modal-enter,
.modal-leave {
  opacity: 0
}


.modal-enter .modal-container,
.modal-leave .modal-container{
  transform: scale(1.1)
}



</style>
