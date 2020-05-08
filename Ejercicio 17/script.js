const checkAge = (age) => {
return new Promise((resolve,reject) => {
  (age >=18) ? resolve(`He/She have a legal age with ${age} years old`)
  : resolve(`He/She doesn't have a legal age, has  ${age} years old`);
})
}


const print = (age) => {
  checkAge(age)
  .then(message => console.log(message))
  .catch(error => console.error(error))
  .finally(() => console.log("End of the process"))
  }

print(18)