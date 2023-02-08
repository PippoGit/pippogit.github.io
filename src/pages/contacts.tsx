import { Linkedin } from "lucide-react";
import type { NextPage } from "next";
import Head from "next/head";
import { GithubLinkButton } from "../components/GithubLinkButton";

import { ContactForm } from "../components/ContactForm";
import { ExternalLinkButton } from "../components/ExternalLinkButton";
import { PageContent } from "../components/PageContent";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>PippoGit</title>
        <meta name="description" content="a software engineer from italy" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PageContent title="Contacts">
        <div className="flex flex-col items-start gap-4">
          <div className="font-light  text-zinc-400">
            <p className="text-lg tracking-wide">
              If you want to know more about me, please send me an email.
            </p>
          </div>

          <ContactForm />

          <div className="mt-2 w-full border-t border-zinc-800 pt-4 text-zinc-400">
            <p className="text-md tracking-wide text-zinc-400">
              {"By the way, you can also find me here:"}
            </p>
          </div>

          <div className="flex w-full flex-col justify-start  gap-4 md:flex-row md:items-center md:gap-8">
            <ExternalLinkButton
              icon={<Linkedin />}
              href={"https://www.linkedin.com/in/filippo-undefined-248034262/"}
              label="LinkedIn"
              target="_blank"
            />
            <GithubLinkButton />
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Contacts;
