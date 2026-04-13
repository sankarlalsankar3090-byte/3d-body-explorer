import BodyPartsLib "lib/body-parts";
import BodyPartsMixin "mixins/body-parts-api";
import Map "mo:core/Map";
import Types "types/body-parts";

actor {
  let bodyPartsStore : Map.Map<Text, Types.BodyPart> = BodyPartsLib.buildMap();
  include BodyPartsMixin(bodyPartsStore);
};
