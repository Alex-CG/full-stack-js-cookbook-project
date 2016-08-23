export default function(app){

	let PORT = 4578;

	app.listen(PORT, () => {
		console.log('Cookbook listening on http://localhost:%s.', PORT);
	});

}