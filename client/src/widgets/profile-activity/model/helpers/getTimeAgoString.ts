export const getTimeAgoString = (createdAt: string | Date): string => {
	const createdDate = new Date(createdAt);
	const now = new Date();
	const diffMs = now.getTime() - createdDate.getTime();
	const diffHours = Math.floor(diffMs / (1000 * 60 * 60));

	if (diffHours < 24) {
		return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
	} else {
		const diffDays = Math.floor(diffHours / 24);
		return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
	}
};
