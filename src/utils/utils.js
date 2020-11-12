export function formatPointsForChart(jsonObject) {
  if (!jsonObject.points || !jsonObject.points.value.values || !Array.isArray(jsonObject.points.value.values)) {
    return [];
  }
  return jsonObject.points.value.values.map((points, index) => ({name: `week ${index + 1}`, points}));
}

const specificFormatDateRegex = /^(0[1-9]|[12][0-9]|3[01])[- /.](0[1-9]|1[012])[- /.](19|20)\d\d$/;

export function getAgeFromDOB(jsonObject) {
  if (!jsonObject.dob || !jsonObject.dob.value || !specificFormatDateRegex.test(jsonObject.dob.value)) {
    return 'N/A';
  }
  const dobParts = jsonObject.dob.value.split('-');
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const dobCurrentYear = `${dobParts[0]}-${dobParts[1]}-${currentYear}`;
  const todayIsDOB = currentDate.getMonth() === Number.parseInt(dobParts[0], 10) && currentDate.getDate() === Number.parseInt(dobParts[1], 10)
  if (dobCurrentYear > currentDate || todayIsDOB) {
    return currentYear - Number.parseInt(dobParts[2]);
  }
  return currentYear - Number.parseInt(dobParts[2]) - 1;
}