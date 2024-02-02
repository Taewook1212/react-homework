export function timeAgo(postTime) {
  const postDate = new Date(postTime);
  const now = new Date();
  const diffMs = now - postDate;
  const diffSec = diffMs / 1000;
  const diffMin = diffSec / 60;
  const diffHour = diffMin / 60;
  const diffDay = diffHour / 24;

  if (diffSec < 60) {
    return Math.round(diffSec) + '초 전';
  } else if (diffMin < 60) {
    return Math.round(diffMin) + '분 전';
  } else if (diffHour < 24) {
    return Math.round(diffHour) + '시간 전';
  } else {
    return Math.round(diffDay) + '일 전';
  }
}
