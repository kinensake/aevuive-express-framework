import { Request, Response } from "express";
import { Controller, Get, Post } from "./aevuive/common";

@Controller("/helloworld")
export class HelloWorldController {
    @Get()
    sayHello(req: Request, res: Response) {
        res.send("Hello World");
    }

    @Post()
    postHello(req: Request, res: Response) {
        console.log(req.body);
        res.json(req.body);
    }
}