import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface BodyPart {
    id: string;
    nameEn: string;
    nameHi: string;
    descriptionEn: string;
    descriptionHi: string;
    modelType: string;
}
export interface backendInterface {
    getBodyPart(id: string): Promise<BodyPart | null>;
    getBodyParts(): Promise<Array<BodyPart>>;
}
