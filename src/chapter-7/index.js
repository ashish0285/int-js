export const text_truncate = (text, chars = 0, truncStr = '...') => {
	if (chars === 0) return text;
	if (truncStr.length === 0) truncStr = '...';
	if (chars < 0) throw new Error('Number of characters should be non negative');
    const reqdLength = chars - truncStr.length;
    return text.substr(0,reqdLength).concat(truncStr);
}