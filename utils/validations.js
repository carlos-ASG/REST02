function validatedKeys(reqBody){
    const requiredKeys = ['name', 'startDate', 'endDate', 'status', 'teamMembers', 'budget'];
    for (const key of requiredKeys) {
        if (!reqBody.hasOwnProperty(key)) {
            console.error(`Missing required key: ${key}`);
            return false;
        }
    }
    return true;
}

function validateDateRange(reqBody) {
    const { startDate, endDate } = reqBody;

    const start = new Date(startDate);
    const end = new Date(endDate);

    return start < end;
}

function validateStatus(reqBody){
    const { status } = reqBody;
    const posibleStatus = ["pendiente", "en progreso", "completado"];

    return posibleStatus.includes(status);
}

module.exports = {
    validatedKeys,
    validateDateRange,
    validateStatus,
};