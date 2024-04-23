const express = require('express')
const session = require('express-session')
const path = require('path')

const errorRoutes = require('./routes/error')
const userRoutes = require('./routes/user')
const bookRoutes = require('./routes/book')

const PORT = 3000
const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.resolve(__dirname, 'public')))
app.set('view engine', 'ejs')
app.set('views', path.resolve(__dirname, 'views'))

app.use(session({
  secret: 'secret',
  resave: false,
  saveUninitialized: true
}));
app.use('*', errorRoutes)
app.use('/user', userRoutes)
app.use('/books', bookRoutes)

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`)
})