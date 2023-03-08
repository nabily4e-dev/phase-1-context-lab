/* Your Code Here */
const createEmployeeRecord = (employeeArr) => {
	return {
		firstName: employeeArr[0],
		familyName: employeeArr[1],
		title: employeeArr[2],
		payPerHour: employeeArr[3],
		timeInEvents: [],
		timeOutEvents: [],
	}
}

const createEmployeeRecords = (employees) => {
	return employees.map(createEmployeeRecord)
}

const createTimeInEvent = function (dateStamp) {
	const [date, hour] = dateStamp.split(' ')

	this.timeInEvents.push({
		type: 'TimeIn',
		hour: parseInt(hour, 10),
		date,
	})

	return this
}

const createTimeOutEvent = function (dateStamp) {
	const [date, hour] = dateStamp.split(' ')

	this.timeOutEvents.push({
		type: 'TimeOut',
		hour: parseInt(hour, 10),
		date,
	})

	return this
}

const hoursWorkedOnDate = function (date) {
	const timeIn = this.timeInEvents.find((event) => event.date === date)
	const timeOut = this.timeOutEvents.find((event) => event.date === date)

	return (timeOut.hour - timeIn.hour) / 100
}

const wagesEarnedOnDate = function (date) {
	const hoursWorked = hoursWorkedOnDate.call(this, date)
	const payRate = this.payPerHour

	return hoursWorked * payRate
}

const totalWagesFor = function () {
	const datesWorked = this.timeInEvents.map((event) => event.date)
	const totalWages = datesWorked.reduce(
		(total, date) => total + wagesEarnedOnDate.call(this, date),
		0
	)

	return totalWages
}

const calculatePayroll = function (employees) {
	const totalWages = employees.reduce(
		(total, employee) => total + allWagesFor.call(employee),
		0
	)

	return totalWages
}

const findEmployeeByFirstName = function (employees, firstName) {
	return employees.find((employee) => employee.firstName === firstName)
}

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
	const eligibleDates = this.timeInEvents.map(function (e) {
		return e.date
	})

	const payable = eligibleDates.reduce(
		function (memo, d) {
			return memo + wagesEarnedOnDate.call(this, d)
		}.bind(this),
		0
	) // <== Hm, why did we need to add bind() there? We'll discuss soon!

	return payable
}
