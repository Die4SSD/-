import path from 'path/posix';
import url from 'url'

export class RotersHeandler {
    constructor(router){
        this.routes = router.routes
    }

    heandlerreq(res,req){
        const urlParsed = url.parse(req.url ,true)
        const pastName = urlParsed.pathname.split('/');

        let route = this.getRoute(pastName)


        if (!route){
            res.statusCode = 404;
            res.end("No such routs")
            return
        }

        const cb = route[req.method] || route[''][req.method]
        cb(req, res)
    }

    getRoute(pathname){
        let route = this.routes

        pathname.forEach((path, i) => {
            if (i){
                route = route[path];
            }
        })

        return route
    }
}