import { isNumber } from '@ctx-core/number'
export function _polarity_text(value:number|string) {
	if (!isNumber(value) && !value) return ''
	const value_float = parseFloat(value as string)
	const value_float_abs_text = value_float.toFixed(2)
	return (
		value_float > 0
		? `+${value_float_abs_text}`
		: value_float_abs_text
	)
}
export {
	_polarity_text as _text__polarity
}
