import { ExternalLinkButton } from "./ExternalLinkButton";
import { SocialLinks } from "../config/links";
import { Linkedin } from "lucide-react";

export function LinkedInLinkButton() {
  return (
    <ExternalLinkButton
      icon={<Linkedin />}
      href={SocialLinks.linkedin}
      label="LinkedIn"
      target="_blank"
    />
  );
}
