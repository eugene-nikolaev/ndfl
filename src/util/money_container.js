export default class MoneyContainer {
  constructor(number) {
    let numberText = number.toString()
    let frags = numberText.split('.')
    if (frags.length == 1) {
      this.whole = numberText
      this.fraction = ""
      this.hasPoint = false
    } else if (frags.length == 2) {
      this.whole = frags[0]
      this.fraction = frags[1]
      this.hasPoint = true
    }
  }
  append(symbol) {
    let sym = symbol.toString()
    if ('.' === sym) {
      if (!this.hasPoint) {
        this.hasPoint = true
      }
    } else {
      console.log(parseInt(this.whole))
      if ((parseInt(this.whole) >= 100000) && !this.hasPoint) {
        return this
      }
      if (this.hasPoint) {
        if (this.fraction.length < 2) {
          this.fraction += sym
        }
      } else {
        if ("0" == this.whole) {
          this.whole = sym
        } else {
          this.whole += sym
        }
      }
    }
    return this
  }
  deleteFromTail() {
    if (this.hasPoint) {
      if (this.fraction.length > 0) {
        this.fraction = this.fraction.substring(0, this.fraction.length - 1)
      } else {
        this.hasPoint = false
      }
    } else {
      if (1 == this.whole.length) {
        this.whole = "0"
      } else {
        this.whole = this.whole.substring(0, this.whole.length - 1)
      }
    }
    return this
  }
  toString() {
    let fractionPart = ""
    if (this.hasPoint) {
      fractionPart = '.'
    }
    fractionPart += this.fraction
    return this.whole + fractionPart
  }
  toFloat() {
    let text = this.toString()
    return parseFloat(text)
  }
}