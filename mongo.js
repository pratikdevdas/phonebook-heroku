const mongoose = require('mongoose')

// if (process.argv.length < 3) {
//   console.log('Please give password as argument')
//   process.exit(1)
// }



const url = `mongodb://fullstack:worngpasswordxd@cluster0-shard-00-00.sr3ja.mongodb.net:27017,cluster0-shard-00-01.sr3ja.mongodb.net:27017,cluster0-shard-00-02.sr3ja.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-t6qs9f-shard-0&authSource=admin&retryWrites=true&w=majority`

mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('connected to db')
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
  name: process.argv[3],
  number: process.argv[4],
  
})
console.log(person)

// CLI arguement additions
if (process.argv.length === 5) {
  person.save().then(() => {
    console.log(`Added ${process.argv[3]} ${process.argv[4]} to phonebook`)
    mongoose.connection.close()
  })
}

if (process.argv.length === 3) {
  Person.find({}).then((result) => {
    console.log('Phonebook:')
    result.forEach((person) => {
      console.log(`${person.name} ${person.number}`)
    })
    mongoose.connection.close()
  })
}
       //here its important to close the connection in call back function because ... (ex 3.12 NB fullstack open)
if (process.argv.length === 4 || process.argv.length > 5) {
  console.log(
    'Please provide the right number of arguments. If the name you are trying to add containes spaces, wrap it in quotes.',
  )
  mongoose.connection.close()
}