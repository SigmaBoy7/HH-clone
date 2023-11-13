export async function getExampleJobsName(){
    const request = await fetch('http://localhost:3000/resum-jobs-example')
    const data = await request.json()
    return data
}

export async function getJobByCommonName(commonName){
    const request = await fetch(`http://localhost:3000/jobs?commonName=${commonName}`)
    const data = await request.json()
    return data[0]
}

export async function getJobByQ(q){
    const request = await fetch(`http://localhost:3000/all-jobs?q=${q}`)
    const allData = await request.json()
    const firstFiveElem = allData.slice(0, 5)
    return firstFiveElem
}

