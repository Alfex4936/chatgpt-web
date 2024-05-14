import { computed } from 'vue'
import { enUS, koKR, frFR } from 'naive-ui'
import { useAppStore } from '@/store'
import { setLocale } from '@/locales'

export function useLanguage() {
  const appStore = useAppStore()

  const language = computed(() => {
    setLocale(appStore.language)
    switch (appStore.language) {
      case 'en-US':
        return enUS
      case 'ko-KR':
        return koKR
			case 'fr-FR':
				return frFR
      default:
        return enUS
    }
  })

  return { language }
}
