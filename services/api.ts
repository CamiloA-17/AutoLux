import { fetchData } from "@/utils/api";

export async function getData<T>(endpoint: string): Promise<T> {
  return fetchData<T>(endpoint, { method: 'GET' });
}


export async function postData<T, R>(endpoint: string, data: T): Promise<R> {
  return fetchData<R>(endpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function putData<T, R>(endpoint: string, data: T): Promise<R> {
  return fetchData<R>(endpoint, {
    method: 'PUT',
    body: JSON.stringify(data),
  });
}

export async function deleteData<R>(endpoint: string): Promise<R> {
  return fetchData<R>(endpoint, { method: 'DELETE' });
}
