// Add your Circle class here
class Circle {
    constructor(radius){
        this.radius = radius
    }
    get diameter(){
        return this.radius * 2
    }
    get circumference(){
        return this.diameter * Math.PI
    }
    get area(){
        return Math.PI * Math.pow(this.radius, 2)
    }
    set diameter(newDiameter){
        return this.radius = newDiameter / 2
    }
    set circumference(newCircumference){
        return this.diameter = newCircumference / Math.PI
    }
    set area(newArea){
        return this.radius = Math.sqrt(newArea/Math.PI)
    }
}