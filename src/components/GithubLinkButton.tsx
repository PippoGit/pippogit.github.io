import { Github } from "lucide-react";
import { ExternalLinkButton } from "./ExternalLinkButton";
import { SocialLinks } from "../config/links";

export function GithubLinkButton() {
  return (
    <ExternalLinkButton
      icon={<Github />}
      label="Github"
      href={SocialLinks.github}
      target="_blank"
    />
  );
}
