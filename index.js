const express = require('express')
const cors  = require('cors')

const app = express()

//Middleware
app.use(express.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send('deepshikha yadav api')
})

app.use('/notification', require('./routers/notification'))
app.use('/auth', require('./routers/auth'))

// private route
app.use('/post', require('./routers/post'))



//server creation
const PORT = process.env.PORT || 9000;


app.listen(PORT, () => {
    console.log('server is running at localhost:'+PORT)
});
