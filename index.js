require('dotenv').config()
const { json } = require('express')
const Person = require('./models/person')
const morgan=require('morgan')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(express.static('build'))
app.use(cors());

//stackoverflow
morgan.token('person', (req) => {
    if (req.method === 'POST') return JSON.stringify(req.body)
    return null
  })
  
app.use(express.json())
// app.use(morgan('tiny'))
app.use(
    morgan(
      ':method :url :status :res[content-length] - :response-time ms :person',
    ),
  )

// let persons = [
//     {   
//         id: 1,
//         name: "Arto Hellas",
//         number: "850384583085",
        
//       },
//       {
//         id: 2,
//         name: "Dan Ambrabov",
//         number: "435353534545",
        
//       },
//       {
//         id: 3,
//         name: "Ada Lovelace",
//         number: "880384435497",
        
//       },
//       {
//         id: 4,
//         name: "Mary Poppendieck",
//         number: "88038408007",
        
//       }
// ]

//fetching home resource
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  //fetching all resources
  // app.get('/api/persons', (request, response) => {
  //   response.json(persons)
  // })

  //fetching all resources mongo db
  app.get('/api/persons', (request, response) => {
    Person.find({}).then(notes => {
      response.json(notes)
    })
  })

 //fetching a single resource
  app.get('/api/persons/:id', (request, response) => {
    Person.findById(request.params.id)
    .then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => {
      console.log(error)
      response.status(400).send({error:"malformed error"})
    })
  })

  //fetching local host info
  app.get('/info', (request, response) => {
    const id = persons.map(person => person.id)
    var d = new Date();
    response.send('<div>Phonebook has info for '+id.length+' people</div>'+d);
    console.log(response.send) 
     })
  
     //fetching delete resource
     app.delete('/api/persons/:id', (request, response) => {
        Person.findByIdAndRemove(request.params.id)
        .then(result=>{response.status(204).end()})
        .catch(error=>next(error))
      })

   //receiving data adding new note
  
  app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name) {
      return response.status(400).json({ 
        error: 'content missing' 
      })
    }
   
    if (!body.number) {
        return response.status(400).json({ 
          error: 'content missing' 
        })
      }
   
     const name =  persons.map(note => note.name)
    //  console.log(name)
     const checkInclude = name.includes(body.name)
      if (checkInclude) {
        return response.status(400).json({ 
          error: 'name already exists' 
        })
      }

    const addperson = new Person({
      name: body.name,
      number: body.number,
     
    })
  
    addperson.save().then(savePerson => {
    response.json(addperson)})
  })

  const errorHandler = (error, request, response, next) => {
    console.error(error.message)
  
    if (error.name === 'CastError') {
      return response.status(400).send({ error: 'malformatted id' })
    } 
  
    next(error)
  }
  // this has to be the last loaded middleware.
  app.use(errorHandler)


  const PORT = process.env.PORT
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })