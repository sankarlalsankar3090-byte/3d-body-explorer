import Types "../types/body-parts";
import Map "mo:core/Map";
import Iter "mo:core/Iter";

module {
  public type BodyPart = Types.BodyPart;

  let initialParts : [BodyPart] = [
    {
      id = "brain";
      nameEn = "Brain";
      nameHi = "मस्तिष्क";
      descriptionEn = "The brain is the most vital organ in the human body. It controls thinking, memory, emotions, and all bodily functions. An adult brain weighs approximately 1.4 kilograms.";
      descriptionHi = "मस्तिष्क मानव शरीर का सबसे महत्वपूर्ण अंग है। यह हमारे विचार, स्मृति और शरीर की सभी क्रियाओं को नियंत्रित करता है। यह लगभग 1.4 किलोग्राम का होता है।";
      modelType = "brain";
    },
    {
      id = "heart";
      nameEn = "Heart";
      nameHi = "हृदय";
      descriptionEn = "The heart is a muscular organ that pumps blood throughout the body via the circulatory system. It beats approximately 100,000 times per day, supplying oxygen and nutrients to all tissues.";
      descriptionHi = "हृदय एक पेशीय अंग है जो परिसंचरण तंत्र के माध्यम से पूरे शरीर में रक्त पंप करता है। यह प्रतिदिन लगभग 1,00,000 बार धड़कता है और सभी ऊतकों को ऑक्सीजन तथा पोषक तत्व पहुँचाता है।";
      modelType = "heart";
    },
    {
      id = "lungs";
      nameEn = "Lungs";
      nameHi = "फेफड़े";
      descriptionEn = "The lungs are a pair of spongy, air-filled organs responsible for gas exchange — absorbing oxygen and releasing carbon dioxide. Together they provide the body with the oxygen essential for cellular respiration.";
      descriptionHi = "फेफड़े स्पंजी, वायु से भरे अंगों की एक जोड़ी हैं जो गैस विनिमय के लिए उत्तरदायी हैं — ऑक्सीजन ग्रहण करते हैं और कार्बन डाइऑक्साइड छोड़ते हैं। ये मिलकर शरीर को कोशिकीय श्वसन के लिए आवश्यक ऑक्सीजन प्रदान करते हैं।";
      modelType = "lungs";
    },
    {
      id = "stomach";
      nameEn = "Stomach";
      nameHi = "पेट";
      descriptionEn = "The stomach is a muscular, hollow organ that is part of the digestive system. It receives food from the esophagus, mixes it with gastric acids, and begins the process of chemical digestion before passing it to the small intestine.";
      descriptionHi = "पेट पाचन तंत्र का एक पेशीय, खोखला अंग है। यह अन्नप्रणाली से भोजन प्राप्त करता है, उसे गैस्ट्रिक अम्लों के साथ मिलाता है, और छोटी आंत में भेजने से पहले रासायनिक पाचन की प्रक्रिया शुरू करता है।";
      modelType = "stomach";
    },
  ];

  public func buildMap() : Map.Map<Text, BodyPart> {
    let m = Map.empty<Text, BodyPart>();
    for (part in initialParts.vals()) {
      m.add(part.id, part);
    };
    m;
  };

  public func getAll(store : Map.Map<Text, BodyPart>) : [BodyPart] {
    store.values().toArray();
  };

  public func getById(store : Map.Map<Text, BodyPart>, id : Text) : ?BodyPart {
    store.get(id);
  };
};
