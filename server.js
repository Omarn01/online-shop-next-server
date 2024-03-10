import express, { json } from 'express'
import cors from 'cors'

import {
  catalog,
  electricHobs,
  categoryHobs,
  categoryPhonesAndPhotos,
  categoryAppliance,
  reviews,
  discussions,
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
app.get('/electricHobs/:id', (req, res) => {
  res
    .status(200)
    .json(electricHobs.data.filter(({ id }) => id == req.params.id))
})
app.get('/reviews/:id', (req, res) => {
  const reviewsArr = electricHobs.data[req.params.id - 1].reviews.map(id => {
    return reviews.find(review => review.id === id)
  })

  res.status(200).json(reviewsArr)
})

app.get('/discussion/:id', (req, res) => {
  const discussionArr = electricHobs.data[req.params.id - 1].discussions.map(
    id => {
      return discussions.find(discussion => discussion.id === id)
    }
  )

  res.status(200).json(discussionArr)
})

app.listen(PORT, () => {
  try {
    console.log(`Server has been started on port: ${PORT}`)
  } catch (e) {
    throw e
  }
})
