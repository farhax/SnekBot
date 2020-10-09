const { naruto } = require('./data.json');

module.exports = {
	getName(args) {
		const first = args[0];

		if (first === 'naruto') {
			const i = this.getRandomNumber(0, naruto.length - 1);
			const suffix = naruto[i];
			return `${suffix}Snek`;
		}
		return "Currently only supported argument: naruto"
	},

	getRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min + 1) + min);
	}
};