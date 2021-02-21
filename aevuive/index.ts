import express, { Application, Response, Request, Router } from "express";
import { ClassControllerType } from "./common/types";

export class Aevuive {
	private app: Application;
	private constructor(){
		this.app = express();
	}
	private static instance: Aevuive | null = null;

	static createApp(): Aevuive {
		if (!this.instance) {
			this.instance = new Aevuive();
		}
		return this.instance;
	}

	applyController(controller: new (...args: any[]) => any): void {
		try {
			let { routeBase, handlerInfos } = (controller as ClassControllerType).metadata;
			const router: Router = express.Router();

			if (handlerInfos === undefined) return;

			for (let { method, path, handler } of handlerInfos ) {
				router[method](path, handler);
			}

			this.app.use(routeBase, router);
		}
		catch(err) {
			throw new Error("You must put a correct controller");
		}
	}

	listen(port: number, callback?: () => void): void {
		this.app.listen(port, callback);
	}
}
