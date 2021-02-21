import { controllerMap } from "./controller.map";
import { ClassControllerType } from "./types";

export function Controller(routeBase: string): Function {
	return function(constructor: ClassControllerType) {
		const handlerInfos = controllerMap.get(constructor.name);

		constructor.metadata = {
			type: "constructor" as const,
			routeBase: routeBase,
			handlerInfos: handlerInfos
		}
	}
}

