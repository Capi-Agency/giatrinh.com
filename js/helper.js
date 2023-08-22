function changeDate(gmtTimeString) {
	var gmtDate = new Date(gmtTimeString);
	return `${gmtDate.getUTCHours()}:${gmtDate.getUTCMinutes()}:${gmtDate.getUTCSeconds()} ${gmtDate.getUTCDate()}/${gmtDate.getUTCMonth() + 1}/${gmtDate.getUTCFullYear()}`;
}