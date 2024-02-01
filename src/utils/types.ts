// types.ts
export interface Template {
    _id?: string;
    user?: Partial<UserInfo>;
    title: string;
    badge: string;
    tech: string[];
    responsive: boolean;
    image: string;
    status: string;
    stacks: string[];
    url: string;
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
    description: string;
    features: string[];
    price: number,
    discount: number;
    images: string[];
    sourceCode: {
        frontend?: string,
        backend?: string
    }
    createdAt?: string | undefined
    updatedAt?: string | undefined
}


export interface UserInfo {
    _id?: string;
    name?: string;
    email?: string;
}

export type OutletContextType = [UserInfo, boolean];
