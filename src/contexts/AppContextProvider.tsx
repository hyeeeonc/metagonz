import { combineComponents } from '../common/combineComponents'
import AboutTabProvider from './AboutTabProvider'
import AudioProvider from './AudioProvider'
import DarkmodeProvider from './DarkmodeProvider'
import PublicDataProvider from './PublicDataProvider'

const providers = [
  AudioProvider,
  DarkmodeProvider,
  AboutTabProvider(4),
  PublicDataProvider,
]

const AppContextProvier = combineComponents(...providers)

export default AppContextProvier
