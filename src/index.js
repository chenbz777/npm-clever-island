// components/NavBar/index.ts
Component({
  properties: {
    title: { // 标题
      type: String,
      value: 'hello world',
    },
    position: { // 是否开启绝对定位
      type: Boolean,
      value: false,
    },
    bgColor: { // 导航栏背景颜色
      type: String,
      value: 'white',
    },
    showGoBack: { // 显示返回按钮
      type: Boolean,
      value: false,
    },
    showHome: { // 显示返回主页按钮
      type: Boolean,
      value: false,
    },
    islandBgColor: { // 灵动岛背景颜色
      type: String,
      value: 'white',
    },
  },

  data: {
    statusBarHeight: 20,
    navBarPadding: 4,
    navBarHeight: 40,
    navBarBodyHeight: 30,
    navBarBodyTempHeight: 32,
    navBarXPadding: 8,
    rightCapsuleWidth: 87,

    showIslandContent: false,
  },

  lifetimes: {
    async attached() {
      // console.log(await wx.getSystemInfo());
      // console.log(wx.getMenuButtonBoundingClientRect());

      const systemInfo = await wx.getSystemInfo()

      const {
        statusBarHeight,
        windowWidth
      } = systemInfo

      const rightCapsule = wx.getMenuButtonBoundingClientRect()

      const {
        top,
        right,
        width,
        height
      } = rightCapsule

      const navBarYPadding = top - statusBarHeight

      const navBarXPadding = windowWidth - right

      const navBarHeight = height + (navBarYPadding * 2)

      const navBarBodyHeight = height - 2

      const navBarBodyTempHeight = height

      const rightCapsuleWidth = width

      this.setData({
        statusBarHeight,
        navBarYPadding,
        navBarHeight,
        navBarBodyHeight,
        navBarBodyTempHeight,
        navBarXPadding,
        rightCapsuleWidth,
      })
    },
  },

  methods: {
    goBack() {
      // console.log('goBack');

      const pages = getCurrentPages()

      // 单曲页面栈小于等于一个页面，直接返回首页
      if (pages.length <= 1) {
        this.goHome()
      } else {
        wx.navigateBack()
      }
    },

    goHome() {
      // console.log('goHome');

      // 小程序中页面栈最多十层
      // 返回的页面数，如果 delta 大于现有页面数，则返回到首页。
      wx.navigateBack({
        delta: 10
      })
    },

    backTop() {
      wx.pageScrollTo({
        scrollTop: 0,
        duration: 300
      })
    },

    async hidesIslandContent() {
      if (this.data.showIslandContent) {
        const {
          height
        } = await this.getDomInfo('.island__content')

        this.setData({
          showIslandContent: false,
          navBarBodyTempHeight: this.data.navBarBodyTempHeight - height
        })
      }
    },

    async showIslandContent() {
      if (!this.data.showIslandContent) {
        const {
          height
        } = await this.getDomInfo('.island__content')

        this.setData({
          showIslandContent: true,
          navBarBodyTempHeight: this.data.navBarBodyTempHeight + height
        })
      }
    },

    getDomInfo(className) {
      return new Promise((resolve, reject) => {
        const query = wx.createSelectorQuery().in(this)
        query.select(className).boundingClientRect(rect => {
          if (rect) {
            resolve(rect)
          } else {
            reject(rect)
          }
        }).exec()
      })
    }
  }
})
