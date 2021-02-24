let units = document.getElementById("units").value
let height_span = document.getElementById("height_span")
let weight_span = document.getElementById("weight_span")


function unit_check(units) {
  if (units == "metric") {
    height_span.innerHTML = "cm"
    weight_span.innerHTML = "kg"
  }
  else if (units == "imperial") {
    height_span.innerHTML = "in"
    weight_span.innerHTML = "lb"
  }
}
unit_check(units)


function CalculateBMI() {

  let units = document.getElementById("units").value
  let height = Number(document.getElementById("height").value)
  let weight = Number(document.getElementById("weight").value)
  let output = document.getElementById("output")
  let comment = document.getElementById("comment")


  function unit_result(unit, weight_of_body, height_of_body) {
    if (unit === "metric") {
      let height = height_of_body / 100
      let BMI_height = height * height
      let BMI = weight_of_body / BMI_height
      return BMI
    }
    else {
      let BMI_height = height_of_body * height_of_body
      let BMI = (weight_of_body / BMI_height) * 703
      return BMI
    }
  }


  function BMI_Categorization(BMI) {
    let result = ''
    if (BMI <= 15)
      return result = "Very severely underweight"
    else if (BMI > 15 && BMI <= 16)
      return result = "Severely underweight"
    else if (BMI > 16 && BMI <= 18.5)
      return result = "Underweight"
    else if (BMI > 18.5 && BMI <= 25)
      return result = "Normal (healthy weight)"
    else if (BMI > 25 && BMI <= 30)
      return result = "Overweight"
    else if (BMI > 30 && BMI <= 35)
      return result = "Moderately obese"
    else if (BMI > 35 && BMI <= 40)
      return result = "Severely obese"
    else if (BMI > 40)
      return result = "Very severely obese"
    else
      return result = "Something went error"
  }

  const unitvalue = unit_result(units, weight, height)
  output.innerText = unitvalue.toFixed(2)
  comment.innerText = BMI_Categorization(unitvalue)
}
