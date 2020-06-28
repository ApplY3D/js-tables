import {storage} from '@core/utils'
import {defaultStyles, defaultTitle} from '@/constants';

const defaultState = {
  rowState: {},
  colState: {},
  dataState: {},
  stylesState: {},
  title: defaultTitle,
  currentText: '',
  currentStyle: defaultStyles
}

const normalize = s => ({
  ...s,
  currentStyles: defaultStyles,
  currentText: ''
})

export const initialState = storage('excel-state')
  ? normalize(storage('excel-state'))
  : defaultState
