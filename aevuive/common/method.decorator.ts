import { controllerMap } from "./controller.map";

function Get(path: string = "/"): Function {
	return function(
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const constructor: new (...args: any[]) => any = target.constructor;
		const handlerInfos = controllerMap.get(constructor.name);
		const currentHandlerInfo = {
			method: "get" as const,
			path: path,
			handler: descriptor.value
		}

		if (handlerInfos) {
			handlerInfos.push(currentHandlerInfo)
		} else {
			controllerMap.set(constructor.name, [currentHandlerInfo]);
		}
	}
}


function Post(path: string = "/"): Function {
	return function(
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const constructor: new (...args: any[]) => any = target.constructor;
		const handlerInfos = controllerMap.get(constructor.name);
		const currentHandlerInfo = {
			method: "post" as const,
			path: path,
			handler: descriptor.value
		}

		if (handlerInfos) {
			handlerInfos.push(currentHandlerInfo)
		} else {
			controllerMap.set(constructor.name, [currentHandlerInfo]);
		}
	}
}


function Put(path: string = "/"): Function {
	return function(
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const constructor: new (...args: any[]) => any = target.constructor;
		const handlerInfos = controllerMap.get(constructor.name);
		const currentHandlerInfo = {
			method: "put" as const,
			path: path,
			handler: descriptor.value
		}

		if (handlerInfos) {
			handlerInfos.push(currentHandlerInfo)
		} else {
			controllerMap.set(constructor.name, [currentHandlerInfo]);
		}
	}
}


function Patch(path: string = "/"): Function {
	return function(
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const constructor: new (...args: any[]) => any = target.constructor;
		const handlerInfos = controllerMap.get(constructor.name);
		const currentHandlerInfo = {
			method: "patch" as const,
			path: path,
			handler: descriptor.value
		}

		if (handlerInfos) {
			handlerInfos.push(currentHandlerInfo)
		} else {
			controllerMap.set(constructor.name, [currentHandlerInfo]);
		}
	}
}


function Delete(path: string = "/"): Function {
	return function(
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const constructor: new (...args: any[]) => any = target.constructor;
		const handlerInfos = controllerMap.get(constructor.name);
		const currentHandlerInfo = {
			method: "delete" as const,
			path: path,
			handler: descriptor.value
		}

		if (handlerInfos) {
			handlerInfos.push(currentHandlerInfo)
		} else {
			controllerMap.set(constructor.name, [currentHandlerInfo]);
		}
	}
}


function Head(path: string = "/"): Function {
	return function(
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const constructor: new (...args: any[]) => any = target.constructor;
		const handlerInfos = controllerMap.get(constructor.name);
		const currentHandlerInfo = {
			method: "head" as const,
			path: path,
			handler: descriptor.value
		}

		if (handlerInfos) {
			handlerInfos.push(currentHandlerInfo)
		} else {
			controllerMap.set(constructor.name, [currentHandlerInfo]);
		}
	}
}


function Options(path: string = "/"): Function {
	return function(
		target: any,
		propertyKey: string,
		descriptor: PropertyDescriptor
	) {
		const constructor: new (...args: any[]) => any = target.constructor;
		const handlerInfos = controllerMap.get(constructor.name);
		const currentHandlerInfo = {
			method: "options" as const,
			path: path,
			handler: descriptor.value
		}

		if (handlerInfos) {
			handlerInfos.push(currentHandlerInfo)
		} else {
			controllerMap.set(constructor.name, [currentHandlerInfo]);
		}
	}
}


export {
    Get,
	Post,
	Put,
	Patch,
	Delete,
	Head,
	Options
}