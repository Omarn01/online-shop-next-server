import express, { json } from 'express'
import cors from 'cors'

import {
  catalog,
  electricHobs,
  categoryHobs,
  categoryPhonesAndPhotos,
  categoryAppliance,
} from './data.js'

const app = express()
const PORT = 3001

const corsOptions = {
  origin: '*',
  credentials: true,
  optionSuccessStatus: 200,
}

app.use(cors(corsOptions))

app.use(json())

app.get('/catalog', (req, res) => {
  console.log(req.url)
  res.status(200).json(catalog)
})

app.get('/appliance', (req, res) => {
  console.log(req.url)
  res.status(200).json(categoryAppliance)
})

app.get('/phonesAndPhotos', (req, res) => {
  console.log(req.url)
  res.status(200).json(categoryPhonesAndPhotos)
})

app.get('/hobs', (req, res) => {
  console.log(req.url)
  res.status(200).json(categoryHobs)
})

app.get('/electricHobs', (req, res) => {
  console.log(req.url)
  res.status(200).json(electricHobs)
})

app.listen(PORT, () => {
  try {
    console.log(`Server has been started on port: ${PORT}`)
  } catch (e) {
    throw e
  }
})
