<template>
  <Teleport to="#viewer-container" v-if="dropup !== ''">
    <div class="backdrop" @click="setDropup('')"></div>
  </Teleport>
  <span class="dropup">
    <i
      class="ml-viewer-bi-gear-fill h3 align-middle control-icon"
      @click="setDropup('settings')"
    >
      <span v-if="trackWarning" class="badge bg-light ms-2">
        <i class="bi ml-viewer-bi-exclamation-circle-fill p-0"></i
      ></span>
    </i>
    <div
      ref="settings"
      class="dropdown-menu dropdown-menu-right"
      :class="{ show: dropup === 'settings' }"
      style="margin-bottom: 0.9rem"
    >
      <div class="dropdown-header d-flex m-0 col-12">
        <h6 class="p-0 m-0">Settings</h6>
        <div class="p-0 ml-auto" style="color: #9e9e9e">
          {{ viewerVersion }}
        </div>
      </div>
      <VideoPlayerControlsSettingsQuality v-if="getActiveMainTransceiverMedias.length > 1" />
      <VideoPlayerControlsSettingsLayout v-if="getVideoSources.length > 1 && isSplittedView"/>
      <VideoPlayerControlsSettingsSplitView v-if="getVideoSources.length > 1" />
      <VideoPlayerControlsSettingsVideoTrack
        v-if="
          getVideoSources.length > 1 ||
          (!getVideoHasMain && getVideoSources.length)
        "
        :unsupportedFlagEmoji="unsupportedFlagEmoji"
        :sourceFlagEmojiToPng="sourceFlagEmojiToPng"
      />
      <VideoPlayerControlsSettingsAudioTrack
        v-if="
          getAudioSources.length > 1 ||
          (!getAudioHasMain && getAudioSources.length)
        "
        :unsupportedFlagEmoji="unsupportedFlagEmoji"
        :sourceFlagEmojiToPng="sourceFlagEmojiToPng"
      />
      <VideoPlayerControlsSettingsStats />
      <VideoPlayerControlsSettingsReportIssue :streamId="streamId" />
    </div>
    <div
      class="dropdown-menu dropdown-menu-right"
      :class="{ show: showDropup }"
      :style="{ width: settingsWidth }"
      style="margin-bottom: 0.9rem"
    >
      <VideoPlayerControlsSettingsDropdown
        :selected="selected"
        :items="items"
        :compare="compare"
        :handleClick="handleClick"
        :title="dropupTitle"
        :unsupportedFlagEmoji="unsupportedFlagEmoji"
        :sourceFlagEmojiToPng="sourceFlagEmojiToPng"
      />
    </div>
  </span>
</template>

<script>
import { selectQuality, selectSource } from '../../service/sdkManager'

import VideoPlayerControlsSettingsVideoTrack from './VideoPlayerControlsSettingsVideoTrack.vue'
import VideoPlayerControlsSettingsAudioTrack from './VideoPlayerControlsSettingsAudioTrack.vue'
import VideoPlayerControlsSettingsQuality from './VideoPlayerControlsSettingsQuality.vue'
import VideoPlayerControlsSettingsStats from './VideoPlayerControlsSettingsStats.vue'
import VideoPlayerControlsSettingsReportIssue from './VideoPlayerControlsSettingsReportIssue.vue'
import VideoPlayerControlsSettingsDropdown from './VideoPlayerControlsSettingsDropdown.vue'
import VideoPlayerControlsSettingsSplitView from './VideoPlayerControlsSettingsSplitView.vue'
import VideoPlayerControlsSettingsLayout from './VideoPlayerControlsSettingsLayout.vue'

import { mapGetters, mapState, mapMutations } from 'vuex'
import CustomToast from '../../service/utils/toast'
import { version } from '../../../package.json'

export default {
  name: 'VideoPlayerControlsSettings',
  components: {
    VideoPlayerControlsSettingsVideoTrack,
    VideoPlayerControlsSettingsAudioTrack,
    VideoPlayerControlsSettingsQuality,
    VideoPlayerControlsSettingsStats,
    VideoPlayerControlsSettingsReportIssue,
    VideoPlayerControlsSettingsDropdown,
    VideoPlayerControlsSettingsSplitView,
    VideoPlayerControlsSettingsLayout
  },
  props: {
    streamId: String,
  },
  data() {
    return {
      viewerVersion: '',
      showDropup: false,
      settingsWidth: '0px',
      selected: {},
      items: [],
      dropupTitle: '',
      handleClick: function () {},
      compare: function () {},
      audioFollowVideoData: {
        mid: null,
        name: 'AudioFollowVideo',
        sourceId: 'AudioFollowVideo',
        trackId: null,
      },
      toast: null,
    }
  },
  computed: {
    ...mapGetters('Layers', ['getActiveMainTransceiverMedias']),
    ...mapGetters('Sources', [
      'getVideoSources',
      'getAudioSources',
      'getVideoHasMain',
      'getAudioHasMain',
    ]),
    ...mapState('Layers', {
      selectedQuality: (state) => state.selectedQuality,
    }),
    ...mapState('Sources', {
      selectedVideoSource: (state) => state.selectedVideoSource,
      selectedAudioSource: (state) => state.selectedAudioSource,
      audioFollowsVideo: (state) => state.audioFollowsVideo,
    }),
    ...mapState('Controls', {
      dropup: (state) => state.dropup,
      trackWarning: (state) => state.trackWarning,
      isSplittedView: (state) => state.isSplittedView
    }),
  },
  methods: {
    ...mapMutations('Controls', [
      'setDropup', 
      'toggleFullscreen'
    ]),
    ...mapMutations('Sources', [
      'setMainLabel',
      'setAudioFollowsVideo',
    ]),
    compareItems(entry, current) {
      return entry?.name === current?.name && (entry?.id === current?.id || current?.name === 'Auto')
    },
    compareSources(entry, current) {
      return entry?.sourceId === current?.sourceId
    },
    setDropupSettings(selected, items, title, click, compare) {
      this.selected = selected
      this.items = items
      this.dropupTitle = title
      this.handleClick = click
      this.compare = compare
    },
    unsupportedFlagEmoji(sourceId) {
      let nAgt = navigator.userAgent
      let isChrome = nAgt.indexOf('Chrome') !== -1
      let isFlagEmoji =
        sourceId.match(/[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g) !==
        null
      let isWindows

      // navigator.userAgentData is not supported for Firefox/Safari
      if (isChrome) {
        isWindows = navigator.userAgentData.platform == 'Windows'
        return isFlagEmoji && isWindows
      } else {
        return false
      }
    },
    sourceFlagEmojiToPng(sourceId) {
      let selectedSourceFlagEmojis = sourceId.match(
        /[\uD83C][\uDDE6-\uDDFF][\uD83C][\uDDE6-\uDDFF]/g
      )

      // replace emojis  for img
      selectedSourceFlagEmojis.forEach((emoji) => {
        // get emoji flag code, example france=fr
        let flagCode = Array.from(emoji, (codeUnit) => codeUnit.codePointAt())
          .map((char) => String.fromCharCode(char - 127397).toLowerCase())
          .join('')

        sourceId = sourceId.replace(
          emoji,
          ` <img src='https://flagcdn.com/20x15/${flagCode}.png' alt="FlagEmoji"}>`
        )
      })

      return sourceId
    },
  },
  mounted() {
    this.viewerVersion = version ? 'v' + version : ''
    this.toast = new CustomToast()
  },
  watch: {
    dropup: function (dropup) {
      if (
        dropup === 'videoTracks' ||
        dropup === 'audioTracks' ||
        dropup === 'qualities'
      ) {
        this.settingsWidth = this.$refs.settings.clientWidth + 'px'
        switch (dropup) {
          case 'videoTracks': {
            const videoTrackChange = async (source) => {
              try {
                await selectSource({ kind: 'video', source })
                await this.setMainLabel(source.name)
              } catch (error) {
                this.toast.showToast('error','There was an error selecting the desired source, try again', { timeout: 5000 })
              }
            }
            this.setDropupSettings(
              this.selectedVideoSource,
              this.getVideoSources,
              'Video Source',
              videoTrackChange,
              this.compareSources
            )
            break
          }
          case 'audioTracks': {
            const audioTrackChange = async (source) => {
              if(source.name === 'AudioFollowVideo') {
                this.setAudioFollowsVideo(true)
              } else {
                this.setAudioFollowsVideo(false)
                try {
                  await selectSource({ kind: 'audio', source })
                } catch (error) {
                  this.toast.showToast('error','There was an error selecting the desired source, try again',  { timeout: 5000 })
                }
              }
            }
            const getAudioTracks = () => {
              return [this.audioFollowVideoData, ...this.getAudioSources]
            }
            const getAudioSourceSelected = () => {
              if (this.audioFollowsVideo) {
                return this.audioFollowVideoData
              }
              return this.selectedAudioSource
            }
            this.setDropupSettings(
              getAudioSourceSelected(),
              getAudioTracks(),
              'Audio Source',
              audioTrackChange,
              this.compareSources
            )
            break
          }
          case 'qualities': {
            const qualityChange = (media) => {
              selectQuality(media)
            }
            this.setDropupSettings(
              this.selectedQuality,
              this.getActiveMainTransceiverMedias,
              'Video Quality',
              qualityChange,
              this.compareItems
            )
            break
          }
        }
        this.showDropup = true
      } else {
        this.showDropup = false
      }
    },
    getActiveMainTransceiverMedias() {
      if (this.dropup === 'qualities') {
        this.items = this.getActiveMainTransceiverMedias
      }
    },
    getVideoSources() {
      if (this.dropup === 'videoTracks') {
        this.items = this.getActiveMainTransceiverMedias
      }
    },
    getAudioSources() {
      if (this.dropup === 'audioTracks') {
        this.items = this.getAudioSources
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.dropdown-menu {
  background-color: #343a40 !important;
  margin-bottom: 0.8rem;
  width: 20rem;

  .dropdown-header {
    color: rgb(235, 235, 235);
  }

  .back-header {
    &:hover {
      cursor: pointer;
    }
  }

  .dropdown-item {
    color: rgb(235, 235, 235);
    cursor: pointer;
    &:hover {
      background-color: #ffffff;
      color: #212529;
    }
  }
}

.ml-viewer-bi-gear-fill .badge {
  position: absolute;
  left: 1.5rem;
  bottom: 0.75rem;
  border-radius: 70%;
  padding: 0;
  color: #dc3545;
  font-size: 1rem;
}

.backdrop {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 0;
}

.dropdown-item-name {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
