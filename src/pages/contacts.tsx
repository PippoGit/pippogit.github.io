import type { NextPage } from "next";
import Head from "next/head";
import { GithubLinkButton } from "../components/GithubLinkButton";

import { ContactForm } from "../components/ContactForm";
import { PageContent } from "../components/PageContent";
import { LinkedInLinkButton } from "../components/LinkedInLinkButton";

const Contacts: NextPage = () => {
  return (
    <>
      <Head>
        <title>PippoGit</title>
        <meta name="description" content="a software engineer from italy" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <PageContent title="Contacts">
        <div className="flex w-full flex-col items-start gap-4 overflow-hidden">
          <ContactForm />
          <div className="mt-4 w-full border-t border-zinc-800 pt-4 text-zinc-400">
            <p className="text-md tracking-wide text-zinc-400">
              {"By the way, you can also find me here:"}
            </p>
          </div>

          <div className="flex w-full flex-col justify-start  gap-4 md:flex-row md:items-center md:gap-8">
            <LinkedInLinkButton />
            <GithubLinkButton />
          </div>
        </div>
      </PageContent>
    </>
  );
};

export default Contacts;
