const generateHarmonographSVG = require('@harmonograph/svg');
const color = require('color');

const getColor = colorValue => {
	if (/^[A-Fa-f\d]{3,6}$/.test(colorValue)) {
		colorValue = '#' + colorValue;
	}

	try {
		return color(colorValue).hex();
	} catch {
		return null;
	}
};

const getHarmonographSettings = ({
	strokeColor = '',
	backgroundColor = '',
	strokeWidth = '',
	size = '',
	animationDuration = ''
}) => ({
	...(strokeColor && {strokeColor: getColor(strokeColor)}),
	...(backgroundColor && {backgroundColor: getColor(backgroundColor)}),
	...(strokeWidth && {strokeWidth}),
	...(size && {size}),
	animatePath: {
		duration: `${animationDuration === '' ? 60 : animationDuration}s`
	}
});

module.exports = (request, response) => {
	const settings = getHarmonographSettings(request.query);
	const svg = generateHarmonographSVG(settings);

	response.setHeader('Content-Type', 'image/svg+xml;charset=utf-8');
	response.send(svg);
};

module.exports.getHarmonographSettings = getHarmonographSettings;
module.exports.getColor = getColor;
