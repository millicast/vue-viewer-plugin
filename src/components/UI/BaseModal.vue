<template>
  <div
    class="modal fade show"
    tabindex="-1"
    role="dialog"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    style="display: block"
  >
    <Teleport to="#viewer-container">
      <div @click="toggle" class="backdrop"></div>
    </Teleport>
    <div class="modal-dialog modal-dialog-scrollable" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="modal-header">
            <h5 class="modal-title" v-text="title"></h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
              @click="toggle"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </slot>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <slot name="modal-footer">
            <base-button btype="btn-p" @click="toggle">OK</base-button>
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    title: String,
    toggle: Function,
  },
}
</script>

<style lang="scss" scoped>
.modal-content {
  color: black;
}
.modal {
  overflow: auto;
  word-wrap: break-word;
}
.modal-dialog {
  animation: modal 0.3s ease-out forwards;
}
.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 0;
}

@keyframes modal {
  from {
    opacity: 0;
    transform: translateY(-30px) scale(0.9);
  }

  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
</style>
