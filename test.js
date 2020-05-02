const test = require('ava');
const {getHarmonographSettings, getColor} = require('.');

test('getHarmonographSettings: no settings returns defaults', t => {
	t.deepEqual(getHarmonographSettings({
		strokeColor: '',
		backgroundColor: '',
		strokeWidth: '',
		size: '',
		animationDuration: ''
	}), {
		animatePath: {
			duration: '60s'
		}
	});

	t.deepEqual(getHarmonographSettings({}), {
		animatePath: {
			duration: '60s'
		}
	});
});

test('getHarmonographSettings: values get formatted correctly', t => {
	t.deepEqual(getHarmonographSettings({
		strokeColor: '000',
		backgroundColor: 'fff',
		strokeWidth: '0.1',
		size: '100',
		animationDuration: '0'
	}), {
		backgroundColor: '#FFFFFF',
		size: '100',
		strokeColor: '#000000',
		strokeWidth: '0.1',
		animatePath: {
			duration: '0s'
		}
	});

	t.deepEqual(getHarmonographSettings({
		strokeColor: '000',
		backgroundColor: 'fff',
		strokeWidth: '0.1',
		size: '100',
		animationDuration: '1'
	}), {
		backgroundColor: '#FFFFFF',
		size: '100',
		strokeColor: '#000000',
		strokeWidth: '0.1',
		animatePath: {
			duration: '1s'
		}
	});
});

test('getColor: returns valid colors', t => {
	t.is(getColor('transparent'), '#000000');
	t.is(getColor('red'), '#FF0000');
	t.is(getColor('rebeccapurple'), '#663399');
	t.is(getColor('fff'), '#FFFFFF');
	t.is(getColor('omadisnjoijaso'), null);
});
