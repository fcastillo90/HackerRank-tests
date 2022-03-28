/*
 * Complete the 'getMinCost' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY crew_id
 *  2. INTEGER_ARRAY job_id
 * 
 */

function getMinCost(crew_id, job_id) {
  // Write your code here
  let distance = 0
  const crewPosition = crew_id.sort((a, b) => a-b)
  const jobPosition = job_id.sort((a, b) => a-b)
  
  crewPosition.forEach((crew, index) => {
      distance += Math.abs(crew - jobPosition[index])
  })
  return distance
}
