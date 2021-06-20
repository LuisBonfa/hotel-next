export const normalizeText = (text) => {
	return text.replace(/[^A-Z0-9]/gi, '')
}
