import http from 'http'
import { router } from './routes/main.js'
import { RotersHeandler } from './core/RoutersHeandler.js'

const routesHandler = new RotersHeandler(router)

http.createServer( (req, res) => {
    routesHandler.heandlerreq(res, req)
}).listen(3000)