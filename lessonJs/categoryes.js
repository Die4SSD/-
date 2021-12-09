import { Router } from "../lessonJs/core/Router.js";

export const categoriesRouter = new Router();

categoriesRouter.get('', (req,res) => {
    console.log("I categoryes GET router")
    res.end();
})