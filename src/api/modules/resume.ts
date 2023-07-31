export interface IResumeConfig {
  content: string
  style: string
  link: string
}

const UPSTASH_BASE_URL = import.meta.env.VITE_UPSTASH_BASE_URL as string

export async function resumeExport(data: IResumeConfig) {
  const res = await fetch(import.meta.env.VITE_EXPORT_URL as string, {
    method: 'POST',
    body: JSON.stringify(data)
    // headers: {
    //   'Content-Type': 'application/json'
    // }
  })
  return await res.json()
}

export function getExportCount() {
  return new Promise((resolve, reject) => {
    fetch(`${UPSTASH_BASE_URL}/get/count`, {
      headers: {
        Authorization: import.meta.env.VITE_UPSTASH_GET_TOKEN as string
      }
    })
      .then(response => response.json())
      .then(data => resolve(data.result))
      .catch(reject)
  })
}

export async function setExportCount() {
  let count: string
  try {
    count = (await getExportCount()) as string
  } catch {
    return Promise.resolve('获取失败...')
  }
  return new Promise(resolve => {
    fetch(`${UPSTASH_BASE_URL}/set/count/${parseInt(count) + 1}`, {
      headers: {
        Authorization: import.meta.env.VITE_UPSTASH_SET_TOKEN as string
      }
    })
      .then(response => response.json())
      .then(data => resolve(data.result))
      .catch(resolve)
  })
}
