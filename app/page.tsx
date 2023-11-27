import Image from 'next/image'
import DomainCTA from "../compnents/DomainCTA"
import Link from "next/link";

export default function Home() {
    let authorGithubUsername = process.env.AUTHOR_GITHUB_USERNAME || "quacksire"
    let authorName = process.env.AUTHOR_NAME || "Quacksire"
    let authorWebsite = process.env.AUTHOR_WEBSITE || "https://quacksire.dev"
    let supportLink = process.env.SUPPORT_LINK || "https://ko-fi.com/quacksire"


  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
              <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">

              </p>

          </div>

          <div className="relative flex place-items-center ">
              <h1 className="relative z-10 text-6xl font-bold text-center text-gray-900 dark:text-gray-100 lg:text-8xl animate-pulse">
                  <DomainCTA/>
              </h1>
          </div>

          <footer className="bottom-0 text-center m-5 text-gray-500">
              {`Made with ❤️ by `}
                <Link
                    href={authorWebsite}
                    className={'text-gray-500'}
                    target="_blank"
                >
                    {authorName}
                </Link>
              <br/>
              <Link
                  href={`https://github.com/${authorGithubUsername}/domain-park`}
                  target="_blank"
                  className={'m-2 text-gray-500'}
              >
                  Source
              </Link>
              {supportLink && <Link
                  href={supportLink}
                  target="_blank"
                  className={'m-2 text-gray-500'}
              >
                  Support
              </Link>}
          </footer>
      </main>
  )
}
