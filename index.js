const { json } = require('express')
const morgan=require('morgan')
const express = require('express')
const cors = require('cors')
const app = express()

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

let persons = [
    {   
        id: 1,
        name: "Arto Hellas",
        number: "850384583085",
        
      },
      {
        id: 2,
        name: "Dan Ambrabov",
        number: "435353534545",
        
      },
      {
        id: 3,
        name: "Ada Lovelace",
        number: "880384435497",
        
      },
      {
        id: 4,
        name: "Mary Poppendieck",
        number: "88038408007",
        
      }
]

//fetching home resource
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
  //fetching all resources
  app.get('/api/persons', (request, response) => {
    response.json(persons)
  })

 //fetching a single resource 
  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(note => note.id === id)
    if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    response.json(person)
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
        const id = Number(request.params.id)
        persons = persons.filter(note => note.id !== id)
        response.status(204).end()
      })
   //receiving data adding new note
   const generateId = () => {
    const maxId = persons.length > 0
    console.log(persons.length)
      ? Math.floor(Math.random(...persons.map(n => n.id)) * 5)
      : 0
    return maxId + 1
  }
  
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

    const addperson = {
      name: body.name,
      number: body.number,
      id: generateId(),
    }
  
    persons = persons.concat(addperson)
    response.json(addperson)
  })
 
  const PORT = process.env.PORT || 3001
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
  })