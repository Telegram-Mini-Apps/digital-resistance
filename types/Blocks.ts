import { TWAApplication, TWACategory } from './entities'

interface ImageFormats {
    ext: string;
    url: string;
    hash: string;
    mime: string;
    name: string;
    path: string | null;
    size: number;
    width: number;
    height: number;
}

interface ImageAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: {
        large?: ImageFormats;
        small?: ImageFormats;
        medium?: ImageFormats;
        thumbnail?: ImageFormats;
    };
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
}

export interface ImageData {
    id: number;
    attributes: ImageAttributes;
}

interface IconAttributes {
    name: string;
    alternativeText: string | null;
    caption: string | null;
    width: number;
    height: number;
    formats: any | null;
    hash: string;
    ext: string;
    mime: string;
    size: number;
    url: string;
    previewUrl: string | null;
    provider: string;
    provider_metadata: any | null;
    createdAt: string;
    updatedAt: string;
}

interface IconData {
    id: number;
    attributes: IconAttributes;
}

interface CategoryAttributes {
    title: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    path: string;
    order: number | null;
    endpoint: string | null;
    visible: boolean;
    icon?: {
        data: IconData | null;
    };
    applications?: {
        data: TWAApplication[];
    };
}

interface CategoryData {
    id: number;
    attributes: CategoryAttributes;
}

interface PlatformAttributes {
    name: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
}

interface PlatformData {
    id: number;
    attributes: PlatformAttributes;
}

interface FeatureBanner {
    id: number;
    tags: string;
    title: string;
    description: string;
    background: string;
}

interface Entity {
    id: number;
    label: string;
    url: string;
}


export interface Feature {
    id: number;
    banner: FeatureBanner;
    entity: Entity | null;
    application?: {
        data: TWAApplication;
    };
}

interface BlockAttributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    category?: {
        data: TWACategory | null;
    };
    feature?: Feature | null;
}

export interface BlockData {
    id: number;
    attributes: BlockAttributes;
}

interface Blocks {
    data: BlockData[];
}

interface MainAttributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    blocks: Blocks;
}

export interface MainPageBlockData {
    id: number;
    attributes: MainAttributes;
}

export interface MainPageBlocksResponse {
    data: MainPageBlockData;
    meta: any;
}
