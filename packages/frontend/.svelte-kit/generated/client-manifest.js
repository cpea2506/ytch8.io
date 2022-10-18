export { matchers } from './client-matchers.js';

			export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5')];

			export const server_loads = [];

			export const dictionary = {
	"": [2],
	"login": [4],
	"register": [5],
	"game/new": [3]
};

			export const hooks = {
				handleError: (({ error }) => { console.error(error) }),
			};