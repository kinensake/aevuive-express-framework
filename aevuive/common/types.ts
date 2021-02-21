import { Response, Request, NextFunction } from "express";

type ClassControllerName = string;
type ClassControllerType = {
	new (...args: any[]): any,
	metadata: {
		type: "constructor",
		routeBase: string,
		handlerInfos: HandlerInfo[] | undefined
	}
}

type HandlerInfo = {
	method: "get" | "post" | "put" | "patch" | "delete" | "head" | "options",
	path: string,
	handler: (req: Request, res: Response, next?: NextFunction) => any
}

export {
    ClassControllerName,
    ClassControllerType,
    HandlerInfo,
}