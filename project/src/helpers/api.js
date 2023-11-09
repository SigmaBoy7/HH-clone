const APPKEY = '3c11fb161b9fa698a07005dae234bb40'
const IDKEY = '4ba751f2'


function addParamsToURL(url){
    url.searchParams.append('app_id', IDKEY)
    url.searchParams.append('app_key', APPKEY)

    return url
}

export async function getVacancy(what=null){
    const url = new URL(`https://api.adzuna.com/v1/api/jobs/gb/search/`);
    url.searchParams.append('app_id', IDKEY)
    url.searchParams.append('app_key', APPKEY)
    url.searchParams.append('results_per_page',10)


    if (what){
        console.log(what)
        url.searchParams.append('what', what)
    }

    const request = await fetch(url)
    const response = await request.json()
    console.log(response)
    return response
}

export async function getMostPaidVacancy(){
    const url = new URL(`https://api.adzuna.com/v1/api/jobs/gb/search?sort_by=salary&results_per_page=6`);
    const urlWithParams = addParamsToURL(url)
    const request = await fetch(urlWithParams)
    const response = await request.json()
    return response
}