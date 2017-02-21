var express = require('express')
var methodOverride = require('method-override')
var bodyParser = require('body-parser')
var exphbs = require('express-handlebars')

var routes = require('./controllers/burgers_controller.js')
var app = express()
const PORT = 3030

app.use(express.static(process.cwd() + '/public'))
app.use(bodyParser.urlencoded({extended:false}))
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.use(methodOverride('_method'))
app.use('/', routes)
app.get('/', function(req, res) {
	res.render('index')
})

app.listen(PORT);