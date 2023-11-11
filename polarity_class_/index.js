import { class_ } from '@ctx-core/html'
import { isNumber_ } from '@ctx-core/number'
/**
 * Class list returning one in set {positive, negative, neutral}
 * @param number
 * @returns {string}
 * @see [@link https://www.wikiwand.com/en/Sentiment_analysis]
 */
export function polarity_class_(number) {
	return class_({
		positive: number > 0,
		neutral: !isNumber_(number) || number == 0,
		negative: number < 0,
		polarity: true
	})
}
export {
	polarity_class_ as _class__polarity
}
