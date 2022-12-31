import { makeAutoObservable } from 'mobx'

class Words {

  value = '🍭 Welcome to React Template!'

  constructor() {
    makeAutoObservable(this)
  }

  get size(): number {
    return this.value.length
  }

  setValue(val: string) {
    this.value = val
  }

}

export default new Words()