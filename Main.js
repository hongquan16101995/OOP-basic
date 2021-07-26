let gas = new Gasoline("thơm", "xanh", 0)
let car = new Car("BMW", 1000, 1.5, 4, gas)


car.start()
car.go()
car.doxang(5)
car.go()
document.write(gas.getWeight())
