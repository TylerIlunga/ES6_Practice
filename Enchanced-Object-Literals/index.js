const color = 'red',
      brand = 'Ferrari',
      year = '2020'

const Car = {
  color,
  brand,
  year,
  drive() { return Vroom! },
  getData() {
    return {
      color: this.color,
      brand: this.brand,
      year: this.year
    }
  }
}
