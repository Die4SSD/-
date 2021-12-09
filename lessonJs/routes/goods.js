import { categoriesRouter } from "../categoryes.js";
import { Router } from "../core/Router.js";

export const goodRouter = new Router();
goodRouter.use('catygories', categoriesRouter)
const goods = {
    item1: '12345',
    item2: '54321'
}

goodRouter.get('', (req,res) => {

    let json = JSON.stringify(goods)
    res.end(json)
    
})