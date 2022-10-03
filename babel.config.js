module.exports = {
  presets: [['@vue/app']],
  assumptions: {
    setSpreadProperties: true,
  },
  plugins: [['@babel/plugin-proposal-object-rest-spread']],
}
