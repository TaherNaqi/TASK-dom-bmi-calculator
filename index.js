function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

  //1. BMI calculator

  height = height/100;
  let BMI = (weight/(height*height));
  alert(`Your BMI is ${BMI}`)

  //Challenge 2

  // if(BMI < 18.5){
  //   alert(`You are underweight`)
  // }
  // else if(BMI < 24.9){
  //   alert(`You are healthy Weight`)
  // }
  // else if(BMI < 30){
  //   alert(`You are Overweight`)
  // }
  // else{
  //   alert(`You are above obesity`)
  
  // Challenge 3:

  if(age < 24){
    if(BMI < 18.5){
      alert(`You are underweight`)
    }
    else if(BMI < 24.9){
      alert(`You are healthy Weight`)
    }
    else if(BMI < 30){
      alert(`You are Overweight`)
    }
    else{
      alert(`You are above obesity`)
  }
}
  else if(age < 34){
    if(BMI < 18.5){
      alert(`You are underweight`)
    }
    else if(BMI < 24.9){
      alert(`You are healthy Weight`)
    }
    else if(BMI < 30){
      alert(`You are Overweight`)
    }
    else{
      alert(`You are above obesity`)
  }
}

  else if(age < 44){
    if(BMI < 18.5){
      alert(`You are underweight`)
    }
    else if(BMI < 24.9){
      alert(`You are healthy Weight`)
    }
    else if(BMI < 30){
      alert(`You are Overweight`)
    }
    else{
      alert(`You are above obesity`)

  }
}
  else if(age < 54){
    if(BMI < 18.5){
      alert(`You are underweight`)
    }
    else if(BMI < 24.9){
      alert(`You are healthy Weight`)
    }
    else if(BMI < 30){
      alert(`You are Overweight`)
    }
    else{
      alert(`You are above obesity`)
  }
}

  else if(age < 64){
    if(BMI < 18.5){
      alert(`You are underweight`)
    }
    else if(BMI < 24.9){
      alert(`You are healthy Weight`)
    }
    else if(BMI < 30){
      alert(`You are Overweight`)
    }
    else{
      alert(`You are above obesity`)

  }

}
}

