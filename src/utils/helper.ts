export function formatToLocalDateTime(utcDateTime: string | undefined): string | undefined {
    if (!utcDateTime) return undefined;

    const utcDate = new Date(utcDateTime); // Create Date object with UTC date time
    const options: Intl.DateTimeFormatOptions = {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    };
    const localDateTime: string = utcDate.toLocaleString(undefined, options); // Convert to local date time

    return localDateTime;
}