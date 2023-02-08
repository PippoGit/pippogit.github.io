import { Github } from "lucide-react";
import { ExternalLinkButton } from "./ExternalLinkButton";

export function GithubLinkButton() {
  return (
    <ExternalLinkButton
      icon={<Github />}
      label="Github"
      href="https://github.com/pippogit"
      target="_blank"
    />
  );
}
