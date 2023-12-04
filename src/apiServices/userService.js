import { get } from "~/utils";

export const suggested = async ({ page, perPage }) => {
  try {
    const res = await get("users/suggested", {
      params: {
        page,
        per_page: perPage,
      },
    });

    // console.log(res);
    return res.data;
  } catch (error) {
    console.log(error);
  }
};
