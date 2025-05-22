export const getStartOfWeek = (date: Date) => {
	const d = new Date(date);
	const day = d.getDay();
	const diff = d.getDate() - ((day + 6) % 7);
	return new Date(d.setDate(diff));
};
