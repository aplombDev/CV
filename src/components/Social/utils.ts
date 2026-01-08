import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { SocialMediaEnum } from "./SocialIcon";

export function getIconDefinition(media: SocialMediaEnum) {
  switch (media) {
    case SocialMediaEnum.GITHUB:
      return faGithub;
    case SocialMediaEnum.LINKEDIN:
      return faLinkedinIn;
    case SocialMediaEnum.MAIL:
      return faEnvelope;
    default:
      return faEnvelope;
  }
}

export function getLink(media: SocialMediaEnum) {
  switch (media) {
    case SocialMediaEnum.GITHUB:
      return "https://github.com/aplombDev";
    case SocialMediaEnum.LINKEDIN:
      return "https://www.linkedin.com/in/ayusjoshi/";
    case SocialMediaEnum.MAIL:
      return "mailto:aayushj2001@gmail.com";
    default:
      return "mailto:aayushj2001@gmail.com";
  }
}

export function getMessage(media: SocialMediaEnum | null) {
  switch (media) {
    case null:
      return "";
    case SocialMediaEnum.GITHUB:
      return "/aplombDev";
    case SocialMediaEnum.LINKEDIN:
      return "/ayusjoshi";
    case SocialMediaEnum.MAIL:
      return "aayushj2001@gmail.com";
    default:
      return "aayushj2001@gmail.com";
  }
}
