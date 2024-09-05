//colors imports
import { neutralTheme, blueTheme, greenTheme } from './colors';

//fonts imports
import { family, weight, size } from './fonts';

//utils imports
import { dimensions, opacity, zIndices } from './utils';

export const theme = {
	colors: {
		neutralTheme,
		blueTheme,
		greenTheme,
	},
	font: { family, weight, size },
	utils: {
		dimensions,
		opacity,
		zIndices,
	},
};
