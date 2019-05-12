function login() {
  return new Promise((resolve, reject) => {
    wx.login({ success: resolve, fail: reject })
  })
}

/**
 * 得到用户基本信息
 */
function getUserInfo() {
  return new Promise((resolve, reject) => {
    wx.getUserInfo({ success: resolve, fail: reject })
  })
}

/**
 * 获取用户手机号
 */
function getPhoneNumber(){
  return new Promise((resolve,reject)=>{
    wx.getPhoneNumber({
      success:resolve,
      fail:reject
    })
  })
}

function setStorage(key, value) {
  return new Promise((resolve, reject) => {
    wx.setStorage({ key: key, data: value, success: resolve, fail: reject })
  })
}

function getStorage(key) {
  return new Promise((resolve, reject) => {
    wx.getStorage({ key: key, success: resolve, fail: reject })
  })
}

function getLocation(type) {
  return new Promise((resolve, reject) => {
    wx.getLocation({ type: type, success: resolve, fail: reject })
  })
}

module.exports = {
  login,
  getUserInfo,
  getPhoneNumber,
  setStorage,
  getStorage,
  getLocation,
  original: wx
}