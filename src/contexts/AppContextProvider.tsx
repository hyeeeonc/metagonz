import { combineComponents } from '../common/combineComponents'
import AboutTabProvider from './AboutTabProvider'
import AudioProvider from './AudioProvider'
import DarkmodeProvider from './DarkmodeProvider'
import JsonDataProvider from './JsonDataProvider'

const providers = [
  AudioProvider,
  DarkmodeProvider,
  AboutTabProvider(4),
  JsonDataProvider,
]

const AppContextProvier = combineComponents(...providers)

export default AppContextProvier
