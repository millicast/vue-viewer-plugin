<template>
  <h6 class="dropdown-header back-header" @click="setDropup('settings')">
    <i class="bi ml-viewer-bi-chevron-left p-0"></i> {{ title }}
  </h6>
  <template v-for="item in items" :key="item.selectId">
    <a
      :class="{ disabled: item.disabled }"
      class="dropdown-item"
      @click="handleSelect(item)"
    >
      <div class="form-check p-0">
        <div class="row">
          <div class="col-1 mr-1">
            <i
              class="bi ml-viewer-bi-check p-0"
              v-show="compare(selected, item)"
            ></i>
          </div>
          <div
            class="item-name"
            :class="[item?.sourceId === null ? 'main' : '']"
          >
            <div
              v-if="unsupportedFlagEmoji(item?.name)"
              v-html="sourceFlagEmojiToPng(item?.name)"
            ></div>
            <div v-else>{{ item?.name }}</div>
          </div>
        </div>
      </div>
    </a>
  </template>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'VideoPlayerControlsSettingsDropdown',
  components: {},
  props: {
    title: String,
    handleClick: Function,
    selected: Object,
    items: Array,
    compare: Function,
    unsupportedFlagEmoji: Function,
    sourceFlagEmojiToPng: Function,
  },
  computed: {},
  methods: {
    ...mapMutations('Controls', ['setDropup']),

    handleSelect(media) {
      this.handleClick(media)
      this.setDropup('')
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  background-color: #343a40;
  margin-bottom: 0.8rem;

  .dropdown-header {
    color: rgb(235, 235, 235);
  }

  .back-header {
    &:hover {
      cursor: pointer;
    }
  }

  .item-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .dropdown-item {
    color: rgb(235, 235, 235);
    cursor: pointer;

    &:hover {
      background-color: #ffffff;
      color: #212529;
    }
  }

  .disabled {
    color: #505050;
  }

  .row {
    flex-wrap: nowrap;
  }

  .main {
    font-style: italic;
  }
}
</style>
