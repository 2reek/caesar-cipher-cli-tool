const { Transform } = require('stream');
const doCipherText = require('../utilities/cipher');

const createTransformStream = (action, shift) => {
	class TransformStream extends Transform {
		constructor(options = {}) {
			options = Object.assign({}, options, {
				decodeStrings: false,
			});
			super(options);
		}

		_transform(chunk, encoding, callback) {
			if (action === 'encode') {
				this.push(doCipherText(chunk.toString('utf-8'), Number(shift)));
			} else if (action === 'decode') {
				this.push(doCipherText(chunk.toString('utf-8'), -Number(shift)));
			}

			callback();
		}
	}

	return new TransformStream();
};

module.exports = createTransformStream;
