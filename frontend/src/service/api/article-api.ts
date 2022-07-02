// 类型
import type { AxiosResponse } from 'axios';

import { apiServerInstance } from '../ajax';

export interface ArticleType4Create {
	title: string;
	content: string;
}

export interface ArticleType4CreateSingle {
	_id: string;
	title: string;
	content: string;
}

export interface ArticleType4Read {
	_id: string;
	__v: number;
	title: string;
	content: string;
}

export interface ErrorResponseType {
	message: string;
}

// Create
export const reqCreateArticle = (
	data: ArticleType4Create,
): Promise<AxiosResponse<ArticleType4Read, ErrorResponseType>> =>
	apiServerInstance.post('/api/articles/', data);

// Read
export const reqGetArticles = (): Promise<
	AxiosResponse<ArticleType4Read[], ErrorResponseType>
> => apiServerInstance.get('/api/articles/');

// Update
export const reqUpdateArticle = (
	data: ArticleType4CreateSingle,
): Promise<AxiosResponse<ArticleType4Read, ErrorResponseType>> =>
	apiServerInstance.put(`/api/articles/${data._id}`, data);

// Delete
export const reqRemoveArticle = (
	_id: string,
): Promise<AxiosResponse<{}, ErrorResponseType>> =>
	apiServerInstance.delete(`/api/articles/${_id}`);
