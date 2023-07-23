import Link from "@docusaurus/Link"
import Layout from "@theme/Layout"
import React from "react"

export default function Home() {
  return (
    <Layout
      title="Source for learning web development"
      description="A compendium of knowledge about web development"
    >
      <div className="bg-hero-pattern flex-1">
        <div className="min-h-[75vh] flex justify-center items-center">
          <header>
            <h1 className="p-2 font-bold text-5xl sm:text-7xl text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-indigo-700">
              Source for learning web development
            </h1>

            <div className="text-slate-700 dark:text-slate-300 max-w-prose mx-auto text-left">
              <ul>
                <li>
                  The website is under development and content will be added
                  successively
                </li>
                <li>
                  Sections link to external sources with information regarding a
                  given topic
                </li>
                <li>
                  Some sections contain additional materials in the form of
                  videos
                </li>
              </ul>
            </div>

            <div className="my-16 text-center">
              <Link
                className="bg-indigo-500 hover:bg-indigo-600 text-xl font-semibold text-white hover:text-white py-4 px-8 rounded hover:no-underline"
                to="/basics/computer-science"
              >
                Start Learning
              </Link>
            </div>
          </header>

          <main></main>
        </div>
      </div>
    </Layout>
  )
}
