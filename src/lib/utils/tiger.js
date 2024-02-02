const END_POINT = 'https://jsonplaceholder.typicode.com/users';

const defaultOptions = {
  method: 'GET',
  body: null,
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
};

export const tiger = async (options) => {
  const { url, ...restOptions } = {
    ...defaultOptions,
    ...options,
    headers: {
      ...defaultOptions.headers,
      ...options.headers,
    },
    //headers{ }객체는 없어도 되는거 아닌가... 이미 defaultOptions에 다있는데?
  };
  // console.log(url, restOptions);
  // 구조분해에서 왼쪽 변수는 아무거나
  // 오른쪽 속성의 순서는 중요하지않고 속성의 이름이 일치하는것이 중요

  const response = await fetch(url, restOptions);
  // console.log(fetch(url, restOptions));
  // console.log(await fetch(url, restOptions));

  if (response.ok) {
    response.data = await response.json();
  }

  return response;
};

// const user = await tiger({ url:END_POINT, });
// console.log( user.data );

// tiger.get()
// tiger.post()
// tiger.put()
// tiger.delete()

tiger.get = (url, options) => {
  return tiger({
    url,
    ...options,
  });
};

tiger.post = (url, body, options) => {
  return tiger({
    method: 'POST',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

tiger.delete = (url, options) => {
  return tiger({
    method: 'DELETE',
    url,
    ...options,
  });
};

tiger.put = (url, body, options) => {
  return tiger({
    method: 'PUT',
    url,
    body: JSON.stringify(body),
    ...options,
  });
};

// tiger.get('www.naver.com',{})
