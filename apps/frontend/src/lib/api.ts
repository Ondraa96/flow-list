import { fetcher } from "./fetcher";

export const MomentsAPI = {
  getAll: (): Promise<Moment[]> => fetcher("/moments"),
  create: (data: { text: string; tags?: string[]; location?: string; isStarred?: boolean }) =>
    fetcher("/moments", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};