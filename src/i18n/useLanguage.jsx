import { useContext } from 'react'
import { LanguageContext } from './LanguageContext_test.jsx'

export function useLanguage() {
	const context = useContext(LanguageContext)
	if (!context) throw new Error('useLanguage must be used inside LanguageProvider')
	return context
}
