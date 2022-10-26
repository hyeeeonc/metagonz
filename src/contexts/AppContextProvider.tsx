import { combineComponents } from '../common/combineComponents'
import AudioProvider from './AudioProvider'
import DarkmodeProvider from './DarkmodeProvider'

const providers = [AudioProvider, DarkmodeProvider]

const AppContextProvier = combineComponents(...providers)

export default AppContextProvier
