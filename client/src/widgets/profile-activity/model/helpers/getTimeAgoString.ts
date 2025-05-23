export const getTimeAgoString = (createdAt: string | Date): string => {
	const createdDate = new Date(createdAt);
	const now = new Date();
	const diffMs = now.getTime() - createdDate.getTime();

	const diffMinutes = Math.floor(diffMs / (1000 * 60));
	const diffHours = Math.floor(diffMinutes / 60);
	const diffDays = Math.floor(diffHours / 24);

	if (diffMinutes < 60) {
		return `${diffMinutes} minute${diffMinutes !== 1 ? "s" : ""} ago`;
	} else if (diffHours < 24) {
		return `${diffHours} hour${diffHours !== 1 ? "s" : ""} ago`;
	} else {
		return `${diffDays} day${diffDays !== 1 ? "s" : ""} ago`;
	}
};
