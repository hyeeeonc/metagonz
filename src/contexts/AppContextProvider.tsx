import { combineComponents } from '../common/combineComponents'
import AboutTabProvider from './AboutTabProvider'
import AudioProvider from './AudioProvider'
import DarkmodeProvider from './DarkmodeProvider'
import SpreadsheetProvider from './SpreadsheetProvider'

const providers = [
  AudioProvider,
  DarkmodeProvider,
  AboutTabProvider(4),
  SpreadsheetProvider,
]

const AppContextProvier = combineComponents(...providers)

export default AppContextProvier
