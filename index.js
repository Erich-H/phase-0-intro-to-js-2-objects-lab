// Write your solution in this file!
const employee = {
    name: "Erich",
    streetAddress: "32 Road Ave",
}



function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}
    newObj[key] = value
    return newObj 
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value
    return obj
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = {...employee}
    delete newObj[key]
    return newObj
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
   return employee
}