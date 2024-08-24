import { legacy_createStore as createStore} from 'redux'
import { personReducer } from './reducer'

export const store = createStore(personReducer);