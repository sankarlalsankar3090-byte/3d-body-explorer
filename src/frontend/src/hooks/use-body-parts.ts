import type { BodyPart } from "@/types/body-parts";
import { useQuery } from "@tanstack/react-query";

// Static fallback data until backend bindings expose getBodyParts/getBodyPart
const BODY_PARTS_DATA: BodyPart[] = [
  {
    id: "brain",
    nameEn: "Brain",
    nameHi: "मस्तिष्क",
    descriptionEn:
      "The brain is the most important organ of the human body. It controls thinking, memory, emotions, and all body functions. The human brain weighs approximately 1.3–1.4 kg and contains around 86 billion neurons. It is divided into the cerebrum, cerebellum, and brainstem, each responsible for distinct physiological functions.",
    descriptionHi:
      "मस्तिष्क मानव शरीर का सबसे महत्वपूर्ण अंग है। यह हमारे विचार, स्मृति, भावनाओं और शरीर की समस्त क्रियाओं को नियंत्रित करता है। मानव मस्तिष्क का भार लगभग 1.3–1.4 किलोग्राम होता है और इसमें लगभग 86 अरब तंत्रिका कोशिकाएँ होती हैं। इसे प्रमस्तिष्क, अनुमस्तिष्क और मस्तिष्क तने में विभाजित किया गया है।",
    modelType: "brain",
  },
  {
    id: "heart",
    nameEn: "Heart",
    nameHi: "हृदय",
    descriptionEn:
      "The heart is a vital pumping organ located in the chest cavity. It beats approximately 100,000 times per day, pumping about 5 litres of blood per minute through the circulatory system. The heart consists of four chambers — two atria and two ventricles — and is responsible for delivering oxygen and nutrients throughout the body.",
    descriptionHi:
      "हृदय एक महत्वपूर्ण पंपिंग अंग है जो वक्ष गुहा में स्थित होता है। यह प्रतिदिन लगभग 1,00,000 बार धड़कता है और प्रति मिनट लगभग 5 लीटर रक्त पंप करता है। हृदय में चार कक्ष होते हैं — दो आलिंद और दो निलय — जो पूरे शरीर में ऑक्सीजन और पोषक तत्व पहुँचाते हैं।",
    modelType: "heart",
  },
  {
    id: "lungs",
    nameEn: "Lungs",
    nameHi: "फेफड़े",
    descriptionEn:
      "The lungs are the primary organs of the respiratory system, responsible for the exchange of oxygen and carbon dioxide. The right lung has three lobes and the left lung has two lobes to accommodate the heart. An adult breathes approximately 12–20 times per minute, and the lungs process about 11,000 litres of air daily.",
    descriptionHi:
      "फेफड़े श्वसन तंत्र के प्रमुख अंग हैं जो ऑक्सीजन और कार्बन डाइऑक्साइड का आदान-प्रदान करते हैं। दाहिने फेफड़े में तीन पालियाँ और बायें फेफड़े में दो पालियाँ होती हैं। एक वयस्क प्रति मिनट लगभग 12–20 बार श्वास लेता है और फेफड़े प्रतिदिन लगभग 11,000 लीटर वायु का संसाधन करते हैं।",
    modelType: "lungs",
  },
  {
    id: "liver",
    nameEn: "Liver",
    nameHi: "यकृत",
    descriptionEn:
      "The liver is the largest internal organ and gland in the human body, weighing about 1.5 kg. It performs over 500 vital functions including detoxification, protein synthesis, and production of bile for digestion. The liver has a remarkable ability to regenerate — up to 75% of it can be removed and it will regrow to full size.",
    descriptionHi:
      "यकृत मानव शरीर का सबसे बड़ा आंतरिक अंग और ग्रंथि है जिसका भार लगभग 1.5 किलोग्राम होता है। यह विषहरण, प्रोटीन संश्लेषण और पाचन के लिए पित्त उत्पादन सहित 500 से अधिक महत्वपूर्ण कार्य करता है। यकृत में उल्लेखनीय पुनर्जनन क्षमता होती है — इसका 75% भाग हटाने पर भी यह पुनः पूर्ण आकार में विकसित हो जाता है।",
    modelType: "liver",
  },
  {
    id: "kidneys",
    nameEn: "Kidneys",
    nameHi: "गुर्दे",
    descriptionEn:
      "The kidneys are two bean-shaped organs located on either side of the spine. They filter approximately 180 litres of blood per day, removing waste products and excess water to produce urine. The kidneys also regulate blood pressure, electrolyte balance, and produce the hormone erythropoietin which stimulates red blood cell production.",
    descriptionHi:
      "गुर्दे रीढ़ की हड्डी के दोनों ओर स्थित दो राजमा के आकार के अंग हैं। ये प्रतिदिन लगभग 180 लीटर रक्त को छानते हैं, अपशिष्ट पदार्थों और अतिरिक्त जल को निकालकर मूत्र बनाते हैं। गुर्दे रक्तचाप, इलेक्ट्रोलाइट संतुलन को नियंत्रित करते हैं और एरिथ्रोपोइटिन हार्मोन का उत्पादन करते हैं।",
    modelType: "kidneys",
  },
  {
    id: "stomach",
    nameEn: "Stomach",
    nameHi: "आमाशय",
    descriptionEn:
      "The stomach is a muscular, hollow organ that forms part of the digestive system. It receives food from the oesophagus, mixes it with digestive acids and enzymes, and passes the resulting chyme into the small intestine. The stomach can hold up to 1–1.5 litres when full and produces about 1.5 litres of gastric juice daily.",
    descriptionHi:
      "आमाशय एक पेशीय, खोखला अंग है जो पाचन तंत्र का हिस्सा है। यह ग्रासनली से भोजन प्राप्त करता है, उसे पाचक अम्लों और एंजाइमों के साथ मिलाता है, और परिणामी काइम को छोटी आंत में भेजता है। भरा होने पर आमाशय 1–1.5 लीटर तक भोजन धारण कर सकता है और प्रतिदिन लगभग 1.5 लीटर गैस्ट्रिक रस उत्पन्न करता है।",
    modelType: "stomach",
  },
];

export function useBodyParts() {
  return useQuery<BodyPart[]>({
    queryKey: ["bodyParts"],
    queryFn: async () => {
      // Backend bindings will be used once getBodyParts() is exposed via bindgen
      // For now, return curated static data
      return BODY_PARTS_DATA;
    },
    staleTime: Number.POSITIVE_INFINITY,
  });
}

export function useBodyPart(id: string) {
  return useQuery<BodyPart | undefined>({
    queryKey: ["bodyPart", id],
    queryFn: async () => {
      // Backend bindings will be used once getBodyPart(id) is exposed via bindgen
      return BODY_PARTS_DATA.find((part) => part.id === id);
    },
    enabled: !!id,
    staleTime: Number.POSITIVE_INFINITY,
  });
}
