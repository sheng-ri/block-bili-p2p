// ==UserScript==
// @name         干掉B站直播P2P传输
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  干掉B站直播P2P传输, https://nga.178.com/read.php?&tid=25285579
// @author       xfgryujk, sheng-ri
// @match        *://live.bilibili.com/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
  delete window.RTCPeerConnection
  delete window.mozRTCPeerConnection
  delete window.webkitRTCPeerConnection
  delete window.RTCDataChannel
  delete window.DataChannel
})();
