<template>
  <div v-if="pubnubSettled" id="chat" class="col-lg-3">
    <div id="chat-container" class="card">
      <div class="card-header msg-head">
        <div class="d-flex bd-highlight">
          <div class="img-cont">
            <div
              class="header-profile-image d-flex align-items-center justify-content-center"
            >
              <p>{{ initialUserName(userName) }}</p>
            </div>
          </div>
          <div class="user-info">
            <span>Live chat</span>
            <p>{{ userName }}</p>
          </div>
        </div>
        <!-- Uncomment to add a gear icon that displays a list of options to be implemented 
        <span id="action-menu-btn" @click=toggleActionMenu><i class="bi bi-gear"></i></span>
        <div v-if="showActionMenu" class="action-menu">
          <ul>
            <li><i class="bi bi-images"></i>Add photo</li>
            <li><i class="bi bi-pen"></i>Change name</li>
          </ul>
        </div> -->
      </div>
      <div id="chat-list" class="card-body msg-card-body pb-0">
        <div
          v-for="message in messages"
          :key="message.id"
          :id="message.id"
          class="d-flex mb-4"
          :class="messageAligne(message.userName)"
        >
          <div v-if="!isUser(message.userName)" class="img-cont-msg mr-2">
            <div
              class="profile-image d-flex align-items-center justify-content-center"
            >
              <p>{{ initialUserName(message.userName) }}</p>
            </div>
          </div>
          <div v-if="!isUser(message.userName)" class="msg-container">
            <div class="message-content">
              <span class="user-name">{{ message.userName }}</span>
              <p>{{ message.text }}</p>
            </div>
            <span class="msg-time">{{ message.time }}</span>
          </div>
          <div v-else class="msg-container-send">
            <p>
              {{ message.text }}
            </p>
            <span class="msg-time-send">{{ message.time }} </span>
          </div>
        </div>
      </div>
      <div class="card-footer">
        <div class="input-group">
          <div class="input-group-append">
            <button id="emoji-btn" class="input-group-text">
              <!-- Uncomment to add an emoji icon that displays the available emojis, this needs to be implemented. -->
              <!-- <i class="bi bi-emoji-smile-fill"></i>  -->
            </button>
          </div>
          <input
            id="text-msg"
            type="text"
            v-model="textMsg"
            @keyup.enter="publishSampleMessage"
            class="form-control"
            placeholder="Type your message..."
          />
          <div class="input-group-append">
            <button
              id="send-btn"
              @click="publishSampleMessage"
              class="input-group-text"
            >
              <i class="bi bi-arrow-right-circle"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="alert alert-danger fade show">
      You have not settled your PubNub credentials in the .ENV file.
    </div>
  </div>
</template>

<script>
import faker from '@faker-js/faker'
const PubNub = require('pubnub')
const PubNubCredentials = process.env.VUE_APP_PUBNUB_PUBLISH_KEY && process.env.VUE_APP_PUBNUB_SUBSCRIBE_KEY && process.env.VUE_APP_PUBNUB_UUID
const pubnub = PubNubCredentials ? new PubNub({
  publishKey: process.env.VUE_APP_PUBNUB_PUBLISH_KEY,
  subscribeKey: process.env.VUE_APP_PUBNUB_SUBSCRIBE_KEY,
  uuid: process.env.VUE_APP_PUBNUB_UUID,
}) : null
export default {
  data() {
    return {
      showActionMenu: false,
      userName: faker.internet.userName(),
      messages: [],
      textMsg: '',
      streamId:
        process.env.VUE_APP_MILLICAST_ACCOUNT_ID +
        '/' +
        process.env.VUE_APP_MILLICAST_STREAM_NAME,
      pubnubSettled: PubNubCredentials
    }
  },
  methods: {
    async publishSampleMessage() {
      if (this.textMsg !== '') {
        await pubnub.publish({
          channel: this.streamId,
          message: {
            userName: this.userName,
            text: this.textMsg,
            time: this.formatTime(),
          },
        })
        this.resetInput()
      }
    },
    subscribe() {
      pubnub.subscribe({
        channels: [this.streamId],
      })
    },
    pubnubListeners() {
      let that = this
      pubnub.addListener({
        message: function (messageEvent) {
          that.messages.push({
            id: that.messages.length,
            userName: messageEvent.message.userName,
            text: messageEvent.message.text,
            time: messageEvent.message.time,
          })
        },
      })
    },
    messageAligne(name) {
      if (this.isUser(name)) {
        return { 'justify-content-end': this.isUser }
      }
      return { 'justify-content-start': this.isUser }
    },
    resetInput() {
      this.textMsg = ''
    },
    isUser(name) {
      return this.userName === name
    },
    initialUserName(name) {
      return name.charAt(0)
    },
    formatTime() {
      var date = new Date()
      var hours = date.getHours()
      var minutes = date.getMinutes()
      var ampm = hours >= 12 ? 'p.m' : 'a.m'
      hours = hours % 12
      hours = hours ? hours : 12
      minutes = minutes < 10 ? '0' + minutes : minutes
      var time = hours + ':' + minutes + ' ' + ampm
      return time
    },
    toggleActionMenu() {
      this.showActionMenu = !this.showActionMenu
    },
  },
  mounted() {
    if (this.pubnubSettled) {
      this.pubnubListeners()
      this.subscribe()
    }
  },
}
</script>

<style>
body,
html {
  margin: 0;
  background: #121217;
  background: -webkit-linear-gradient(to right, #d05dbf, #a529b8, #1e1628);
  background: linear-gradient(to left, #d05dbf, #a529b8, #1e1628);
}

#chat {
  margin: 0;
  padding: 0;
}

#chat-container {
  background-color: rgba(34, 32, 34, 0.2);
  border-radius: 0;
  height: 100%;
}

/* for big screens */
@media only screen and (min-width: 990px) {
  #chat {
    height: 100vh;
  }
}

/* for small screens */
@media only screen and (max-width: 990px) {
  #chat {
    height: 50vh;
  }
}

.msg-card-body {
  overflow-y: auto;
  overflow-wrap: break-word;
}

.card-footer {
  border-top: 0;
}

#text-msg {
  background-color: #0000004d;
  border: 0;
  color: white;
  height: 3.75rem;
  overflow-y: auto;
}

#text-msg::placeholder {
  color: rgba(255, 255, 255, 0.553);
}

#text-msg:focus {
  box-shadow: none;
  outline: none;
}

#emoji-btn {
  border-radius: 0.94rem 0 0 0.94rem;
  background-color: #0000004d;
  border: 0;
  color: white;
  cursor: pointer;
}

#send-btn {
  border-radius: 0 0.94rem 0.94rem 0;
  background-color: #0000004d;
  border: 0;
  color: white;
  cursor: pointer;
}

.user-name {
  font-size: 0.9rem;
}

.img-cont {
  position: relative;
  height: 4rem;
  width: 4rem;
}

.img-cont-msg {
  height: 2.5rem;
  width: 2.5rem;
}

.user-info {
  margin-top: auto;
  margin-bottom: auto;
  margin-left: 0.94rem;
}

.user-info span {
  font-size: 1.25rem;
  color: white;
}

.user-info p {
  font-size: 1.05rem;
  color: #ffffff99;
  margin-bottom: 0;
}

.msg-container p {
  margin-bottom: 0;
  color: white;
}

.msg-container span {
  color: #ffffff99;
}

.msg-container-send {
  min-width: 3rem;
  overflow-wrap: anywhere;
  border-radius: 10px;
  background-color: #3a393a;
  padding: 0.6rem;
  position: relative;
}

.msg-container-send p {
  margin-bottom: 0;
  color: white;
}

.message-content {
  overflow-wrap: anywhere;
  border-radius: 10px;
  background-color: #3a393a;
  padding: 0.6rem;
}

.msg-time {
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
}

.msg-time-send {
  position: absolute;
  right: 0;
  bottom: -1.1rem;
  color: rgba(255, 255, 255, 0.5);
  font-size: 0.7rem;
}

.msg-head {
  position: relative;
}

#action-menu-btn {
  display: inline-block;
  position: absolute;
  right: 0.75rem;
  top: 0.75rem;
  color: white;
  cursor: pointer;
  font-size: 1.5rem;
}

.action-menu {
  z-index: 1;
  position: absolute;
  padding: 0.9rem 0;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border-radius: 0.9rem;
  top: 3rem;
  right: 0.9rem;
}

.action-menu ul {
  margin: 0;
  list-style: none;
  padding: 0;
}

.action-menu ul li {
  width: 100%;
  padding: 0.6rem 1.8rem 0.6rem 1.3rem;
}

.action-menu ul li:hover {
  cursor: pointer;
  background-color: rgba(0, 0, 0, 0.2);
}

.header-profile-image {
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  background: #3a393a;
  color: #fff;
  text-align: center;
}

.profile-image {
  width: 2.7rem;
  height: 2.7rem;
  border-radius: 50%;
  background: #1d2021;
  color: #fff;
  text-align: center;
}

.header-profile-image p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 2rem;
  margin-top: auto;
  margin-bottom: auto;
}

.profile-image p {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
  margin-top: auto;
  margin-bottom: auto;
}
</style>

<style>
@import 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.min.css';
@import 'https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css';
@import 'vue-toastification/dist/index.css';
</style>
