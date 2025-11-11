import net from 'node:net';
import fs from 'node:fs';
import path from 'node:path';
function plugin(start) {
	const utf8 = 'utf8';
	const argv1 = process.argv[1];
	const dirname = path.dirname(argv1);
	const path_setting_env = path.join(dirname, 'settings.env');
	const path_setting_json = path.join(dirname, 'settings.json');
	const xettings = process.argv[2] ? JSON.parse(process.argv[2]) : {};
	const env = fs.existsSync(path_setting_env) ? JSON.parse(fs.readFileSync(path_setting_env, utf8)) : {};	
	const setting_json = fs.existsSync(path_setting_json) ? JSON.parse(fs.readFileSync(path_setting_json, utf8)) : {};
	const settings = {interface:{}, port:8085, ...setting_json,...env,...xettings, name:path.basename(dirname)};
	const mount = settings.port;
	const interfaces = settings.interface;	
	if (path.basename(argv1).includes('testing')) return start((name,...valor) => { // modo testing ?
		const callback = valor.pop(), client = require('net').createConnection(mount, () => client.write(JSON.stringify([name,valor])));
		client.on('data', data => {
			callback(JSON.parse(data.toString())[0]), client.end();
		});
		client.on('error', e => callback(console.log('Conexión err',e)));
	});
	start(settings,new Proxy(k=>((m,v)=>['|',k,m,JSON.stringify([v])]),{get:(f,k)=>f(k[0].toUpperCase())}));
	if (fs.existsSync(mount)) {
		fs.unlinkSync(mount);
	}
	const server = net.createServer( connection => {
		connection.on('data', async data => {
			let arr = JSON.parse(data.toString()); // [callbac,params]
			if (interfaces[arr[0]])
				Promise.all([interfaces[arr[0]](...arr[1])]).then(
					respuesta=>connection.write(JSON.stringify(respuesta[0]===undefined?[]:respuesta))
				);
			else connection.write('null');
		});
	});
	server.listen(mount, () => console.log('Plugin', settings.name, 'mount', mount));	
}
export default plugin;