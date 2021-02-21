import express, { Application, Response, Request, Router, NextFunction } from "express";
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

	set(setting: string, value: any): void {
		this.app.set(setting, value);
	}

	disable(setting: string): void {
		this.app.disable(setting);
	}

	enable(setting: string): void {
		this.app.enable(setting)
	}

	disabled(setting: string): boolean {
		return this.app.disabled(setting);
	}

	enabled(setting: string): boolean {
		return this.app.enabled(setting);
	}

	listen(port: number, callback?: () => void): void {
		this.app.listen(port, callback);
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

	applyMiddleware(
		middleware: (req: Request, res: Response, next: NextFunction) => any 
	) {
		this.app.use(middleware);
	}
}
