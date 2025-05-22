export interface IUser {
	name: string;
	email: string;
	picture: string;
	createdAt?: string;
}

export interface UserContextType {
	user: IUser | null;
	setUser: (user: IUser | null) => void;
}
