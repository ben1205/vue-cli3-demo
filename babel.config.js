module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      "import",
      {
        "libraryName": "vant",
        "styleLibraryName": "es",
        "style": true
      }
    ]
  ]
}
