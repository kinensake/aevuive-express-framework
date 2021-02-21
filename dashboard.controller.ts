import { Request, Response } from "express";
import { Controller, Get, Post } from "./aevuive/common";

@Controller("/dashboard")
export class DashboardController {
    @Get()
    displayDashboard(req: Request, res: Response) {
        res.send("Dashboard");
    }
}