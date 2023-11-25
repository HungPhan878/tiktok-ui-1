import { get } from "~/utils"; 

export const search = async (q, type = "less") => {
  try {
    const res = await get("users/search", {
        params: {
          q,
          type,
        },
      });
    
      // console.log(res);
      return res.data;
  } catch (error) {
    console.log(error)
  }
};
