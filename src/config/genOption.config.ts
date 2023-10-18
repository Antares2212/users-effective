const BASE_URL = 'http://localhost:8080/history'

const handleResponse = async (response: any): Promise<any> => {
  let errorMessage = 'Ошибка при выполнении запроса'

  if (response.ok) {
    return await response.json()
  }

  try { 
    const errorData = await response.json()
    errorMessage = errorData.message || errorMessage
  } catch (error) {
    console.error(error)
  }

  throw new Error(errorMessage)
}

export const getFetch = async (url: string, type: string, data: object = {}): Promise<any> => {
  const header = type == ('GET' || 'DELETE') ? {
    method: type,
    headers: { 'Content-Type': 'application/json' }
  } : {
    method: type,
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' }
  }  

  try {
    const response = await fetch(`${BASE_URL}${url}`, header)
    console.log(response);
    
    return handleResponse(response)
  } catch (error) {
    console.log(error)
    throw error
  }
}