export class MomentDto {
  id: string;
  text: string;
  tags: string[];
  location: string | null;
  isStarred: boolean;
  date: Date;
  time: string | null;
  createdAt: Date;
}
