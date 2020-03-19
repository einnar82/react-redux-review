import { httpClient } from "../../../helpers/network";

export const fetchPostsService = async () => {
  const data = await httpClient({
    url: "/posts",
    method: "get"
  });
  return data;
};

export const deletePostService = async id => {
  await httpClient({
    url: `/posts/${id}`,
    method: "delete"
  });
  return id;
};
