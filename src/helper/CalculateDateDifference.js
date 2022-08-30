import moment from "moment";

export const CalculateDateDifference = () => {
let currentDate = new Date();
let startDate = moment(currentDate)?.startOf("month");
let previousMonth = moment(currentDate)?.subtract(1, "months");
let diff = moment(currentDate)?.diff(startDate, "days");

return diff + 1 < 16 ? new Date(previousMonth) : currentDate
}