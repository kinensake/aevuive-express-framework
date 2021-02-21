import bodyParser from "body-parser";
import { Aevuive } from "./aevuive"
import { DashboardController } from "./dashboard.controller";
import { HelloWorldController } from "./helloworld.controller";

const app = Aevuive.createApp();

app.applyMiddleware(bodyParser.json());

app.applyController(HelloWorldController);
app.applyController(DashboardController);

app.listen(3000, () => {
    console.log("listening on 3000")
});

