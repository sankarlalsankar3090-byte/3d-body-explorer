import Types "../types/body-parts";
import BodyPartsLib "../lib/body-parts";
import Map "mo:core/Map";

mixin (store : Map.Map<Text, Types.BodyPart>) {
  public query func getBodyParts() : async [Types.BodyPart] {
    BodyPartsLib.getAll(store);
  };

  public query func getBodyPart(id : Text) : async ?Types.BodyPart {
    BodyPartsLib.getById(store, id);
  };
};
