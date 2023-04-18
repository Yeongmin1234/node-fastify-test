import db from "./src/models";
import App from "./src/app";

const app = App({
	//logger: true
});

const PORT = 5000

db.sequelize.sync().then(() => {
    app.listen({port:Number(PORT)}, (err) => {
        if (err) {
            console.error(err);
            process.exit(1);
        }
        app.log.info(`SERVE ON ${PORT}`);
    });
})