export interface ICategoryImage {
	alternativeText: string | null;
	caption: string | null;
	createdAt: string;
	documentId: string;
	ext: string;
	formats: any;
	hash: string;
	height: number;
	id: number;
	mime: string;
	name: string;
	previewUrl: string | null;
	provider: string;
	provider_metadata: any;
	publishedAt: string;
	size: number;
	updatedAt: string;
	url: string;
	width: number;
}

export interface ICategory {
	id: number;
	name: string;
	documentId: string;
	createdAt: string;
	updatedAt: string;
	publishedAt: string;
	image: ICategoryImage;
}
