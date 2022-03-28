/*
 * Complete the 'mostActive' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY customers as parameter.
 */
const percentage = 5

function mostActive(customers) {
    // Write your code here
    const customersTotal = {}
    const minimum = (percentage * customers.length) / 100
    
     customers.forEach((customerName) => {
         customersTotal[customerName] = (customersTotal[customerName] || 0) + 1
     })
     
     const result = Object.keys(customersTotal)
        .map((customerName) => customerName)
        .filter((customerName) => customersTotal[customerName] >= minimum)
        .sort()
        
    return result
}