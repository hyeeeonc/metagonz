import { combineComponents } from '../common/combineComponents'
import AboutTabProvider from './AboutTabProvider'
import AudioProvider from './AudioProvider'
import DarkmodeProvider from './DarkmodeProvider'

const providers = [AudioProvider, DarkmodeProvider, AboutTabProvider(4)]

const AppContextProvier = combineComponents(...providers)

export default AppContextProvier
