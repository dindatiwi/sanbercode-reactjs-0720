//soal satu
console.log("===Soal satu===")
{
    const newFunction = function literal(firstName, lastName){
        return {
          firstName,
          lastName,
          fullName: function(){
            console.log(firstName + " " + lastName)
            return 
          }
        }
      }
       
      //Driver Code 
      newFunction("William", "Imoh").fullName() 
}

//soal dua
console.log("===Soal dua===")
{
    const newObject = {
        firstName: "Harry",
        lastName: "Potter Holt",
        destination: "Hogwarts React Conf",
        occupation: "Deve-wizard Avocado",
        spell: "Vimulus Renderus!!!"
      }
    const {firstName,lastName,destination,occupation} = newObject
    console.log(firstName, lastName, destination, occupation)
}

//soal dua
console.log("===Soal tiga===")
{
    const west = ["Will", "Chris", "Sam", "Holly"]
    const east = ["Gill", "Brian", "Noel", "Maggie"]
    const combined = [...west, ...east]
    //Driver Code
    console.log(combined)
}