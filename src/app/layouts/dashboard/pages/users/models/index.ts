export type UserRole = 'ADMIN' | 'USER' | 'PROFESOR' | 'ESTUDIANTE' | 'ABOGADO' ;

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  sanciones: number;
  role: UserRole;
  createdAt: Date;
}
