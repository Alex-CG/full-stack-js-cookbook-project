import * as constants from '../util/constants.js'

export function listen(app){

	app.listen(constants.SERVER_PORT, () => {
		console.log('Cookbook listening on http://localhost:%s.', constants.SERVER_PORT);
	});

}