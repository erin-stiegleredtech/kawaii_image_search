'use server'

const key = 'AIzaSyDfn6y7m6nGw1ZyF1xSqHRsOO-a_29_Ns8';
const base_url = 'https://www.googleapis.com/customsearch/v1?fileType=png&hq=kawaii&imgSize=medium&num=10&searchType=image';
const cx_search_id = 'a5e294d2fa70b4915';


async function getData(searchTerm) {
  const request_url = base_url + '&key=' + key + '&cx=' + cx_search_id + "&q=" + searchTerm;
  console.log(searchTerm);
    const res = await fetch(request_url)
   
    if (!res.ok) {
      console.log(res);
      throw new Error('Failed to fetch data')
    }
   
    return res.json()
  }
   


export default getData;