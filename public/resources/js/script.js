// All javascript code in this project for now is just for demo DON'T RELY ON IT


const setup = () => {
  const getTheme = () => {
    if (window.localStorage.getItem('dark')) {
      return JSON.parse(window.localStorage.getItem('dark'))
    }

    return !!window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  const setTheme = (value) => {
    window.localStorage.setItem('dark', value)
  }

  const getColor = () => {
    if (window.localStorage.getItem('color')) {
      return window.localStorage.getItem('color')
    }
    return 'cyan'
  }

  const setColors = (color) => {
    const root = document.documentElement
    root.style.setProperty('--color-primary', `var(--color-${color})`)
    root.style.setProperty('--color-primary-50', `var(--color-${color}-50)`)
    root.style.setProperty('--color-primary-100', `var(--color-${color}-100)`)
    root.style.setProperty('--color-primary-light', `var(--color-${color}-light)`)
    root.style.setProperty('--color-primary-lighter', `var(--color-${color}-lighter)`)
    root.style.setProperty('--color-primary-dark', `var(--color-${color}-dark)`)
    root.style.setProperty('--color-primary-darker', `var(--color-${color}-darker)`)
    this.selectedColor = color
    window.localStorage.setItem('color', color)
    //
  }

  return {
    loading: true,
    isDark: getTheme(),
    toggleTheme() {
      this.isDark = !this.isDark
      setTheme(this.isDark)
    },
    setLightTheme() {
      this.isDark = false
      setTheme(this.isDark)
    },
    setDarkTheme() {
      this.isDark = true
      setTheme(this.isDark)
    },
    color: getColor(),
    selectedColor: 'cyan',
    setColors,
    toggleSidbarMenu() {
      this.isSidebarOpen = !this.isSidebarOpen
    },
    isSettingsPanelOpen: false,
    openSettingsPanel() {
      this.isSettingsPanelOpen = true
      this.$nextTick(() => {
        this.$refs.settingsPanel.focus()
      })
    },
    isNotificationsPanelOpen: false,
    openNotificationsPanel() {
      this.isNotificationsPanelOpen = true
      this.$nextTick(() => {
        this.$refs.notificationsPanel.focus()
      })
    },
   
    isMobileSubMenuOpen: false,
    openMobileSubMenu() {
      this.isMobileSubMenuOpen = true
      this.$nextTick(() => {
        this.$refs.mobileSubMenu.focus()
      })
    },
    isMobileMainMenuOpen: false,
    openMobileMainMenu() {
      this.isMobileMainMenuOpen = true
      this.$nextTick(() => {
        this.$refs.mobileMainMenu.focus()
      })
    },
  }
}

const random = (max = 100) => {
  return Math.round(Math.random() * max) + 20
}

const randomData = () => {
  return [
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
    random(),
  ]
}

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

const cssColors = (color) => {
  return getComputedStyle(document.documentElement).getPropertyValue(color)
}

const getColor = () => {
  return window.localStorage.getItem('color') ?? 'cyan'
}

const colors = {
  primary: cssColors(`--color-${getColor()}`),
  primaryLight: cssColors(`--color-${getColor()}-light`),
  primaryLighter: cssColors(`--color-${getColor()}-lighter`),
  primaryDark: cssColors(`--color-${getColor()}-dark`),
  primaryDarker: cssColors(`--color-${getColor()}-darker`),
}

let randomUserCount = 0

const usersCount = document.getElementById('usersCount')


