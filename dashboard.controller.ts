import { Request, Response } from "express";
import { Controller, Get } from "./aevuive/common";

@Controller("/dashboard")
export class DashboardController {
    @Get()
    displayDashboard(req: Request, res: Response) {
        res.send("Dashboard");
    }
}