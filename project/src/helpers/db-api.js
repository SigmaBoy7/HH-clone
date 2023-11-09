export async function getExampleJobsName(){
    const request = await fetch('http://localhost:3000/resum-jobs-example')
    const data = await request.json()
    return data
}