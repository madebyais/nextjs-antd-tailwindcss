const Fetch = async (method: string = 'GET', url: string = '', data: any = undefined, headers: any = undefined) => {
  let opts: RequestInit = {
    method,
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  }

  if (headers) {
    opts.headers = {
      ...headers,
      'Content-Type': 'application/json'
    }
  }

  if (method !== 'GET' && data) {
    opts.headers = {
      ...opts.headers,
      'Content-Type': 'application/json'
    }
    opts.body = JSON.stringify(data)
  }

  const response = await fetch(url, opts)
  return response.json()
}

export default Fetch