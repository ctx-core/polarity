import { isNumber } from '@ctx-core/number'
export function polarity_text_(value:number|string) {
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
	polarity_text_ as _text__polarity
}
