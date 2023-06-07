export const GetProductList = async () => {
  const res = await fetch(
    "https://h6uc5l8b1g.execute-api.ap-northeast-2.amazonaws.com/dev/products"
  );
  const data = await res.json();

  return data;
};
