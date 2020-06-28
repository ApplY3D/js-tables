import {DomListener} from '@core/DomListener'

export class ExcelComponent extends DomListener {
  constructor($root, options = {}) {
    super($root, options.listeners)
    this.name = options.name || ''
    this.emitter = options.emitter
    this.subscribe = options.subscribe || []
    this.unsubscribers = []
    this.store = options.store

    this.prepare()
  }

  // Перед иниит
  prepare() {}

  // Возвращает шаблон компонента
  toHTML() {
    return ''
  }

  // Инициализация компонента и слушателей
  init() {
    this.initDOMListeners()
  }

  // Уведомление слушателей
  $emit(event, ...args) {
    this.emitter.emit(event, ...args)
  }

  // Подписываемся
  $on(event, fn) {
    const unsub = this.emitter.subscribe(event, fn)
    this.unsubscribers.push(unsub)
  }

  $dispatch(action) {
    this.store.dispatch(action)
  }

  // сюда приходят только изменения по полям, на которые подписались
  storeChanged() {
  }

  isWatching(key) {
    return this.subscribe.includes(key)
  }

  // Удаление компонента и слушателей
  destroy() {
    this.removeDOMListeners()
    this.unsubscribers.forEach(unsub => unsub())
  }
}
