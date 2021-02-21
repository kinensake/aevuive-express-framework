import { Request, Response } from "express";
import { Controller, Get } from "./aevuive/common";

@Controller("/helloworld")
export class HelloWorldController {
    @Get()
    sayHello(req: Request, res: Response) {
        res.send("Hello World");
    }
}