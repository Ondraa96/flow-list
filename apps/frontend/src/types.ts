export type Moment = {
  id: string;
  text: string;
  tags: string[];
  location?: string;
  isStarred: boolean;
  date: Date;
  time?: string;
  createdAt: Date;
  updatedAt: Date;
}
