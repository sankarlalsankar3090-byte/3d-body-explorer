export interface BodyPart {
  id: string;
  nameEn: string;
  nameHi: string;
  descriptionEn: string;
  descriptionHi: string;
  modelType: string;
}

export interface BodyPartsResponse {
  bodyParts: BodyPart[];
}
