import Link from "@docusaurus/Link"
import Layout from "@theme/Layout"
import React from "react"

function FeatureItem({ children, href = "" }) {
  return (
    <>
      <a
        className="group flex gap-y-6 w-full h-full hover:bg-gray-100 hover:no-underline rounded-lg p-5 transition-all dark:hover:bg-white/[.075]"
        href={href}
        target="_blank"
        rel="noopener"
      >
        <div className="flex gap-2 items-center">{children}</div>
      </a>
    </>
  )
}

export default function Home() {
  return (
    <Layout
      title="Source for learning web development"
      description="A compendium of knowledge about web development"
    >
      <div className="bg-hero-pattern flex-1">
        <div className="min-h-[60vh] flex justify-center items-center">
          <header>
            <h1 className="p-2 font-bold text-5xl sm:text-7xl text-center tracking-tight text-transparent bg-clip-text bg-gradient-to-br from-indigo-500 to-indigo-700">
              Source for learning web development
            </h1>

            <p className="text-slate-700 dark:text-slate-300 text-center">
              Despite the effort put into creating the website, the materials
              are completely free!
            </p>

            <div className="my-16 text-center">
              <Link
                className="bg-indigo-500 hover:bg-indigo-600 text-xl font-semibold text-white hover:text-white py-4 px-8 rounded hover:no-underline"
                to="/basics/computer-science"
              >
                Start Learning
              </Link>
            </div>
          </header>
        </div>

        <main className="max-w-screen-sm mx-auto">
          <p className="mb-12">
            If you find Codisity a valuable service, please consider supporting:
          </p>

          <div className="flex flex-col gap-4">
            <FeatureItem href="https://codisity.com/youtube">
              <svg
                className="w-8 h-8 text-gray-800 mr-2 dark:text-gray-200 group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="32"
                viewBox="0 0 576 512"
              >
                <path
                  fill="currentColor"
                  d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597c-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821c11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205l-142.739 81.201z"
                />
              </svg>
              <p className="m-0 block font-bold text-gray-800 dark:text-white group-hover:translate-x-1 transition-transform">
                Subscribe to Codisity's YouTube channel
              </p>
            </FeatureItem>

            <FeatureItem href="https://www.udemy.com/user/adrianbienias">
              <svg
                className="w-8 h-8 text-gray-800 mr-2 dark:text-gray-200 group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 0L5.81 3.573v3.574l6.189-3.574l6.191 3.574V3.573zM5.81 10.148v8.144c0 1.85.589 3.243 1.741 4.234S10.177 24 11.973 24s3.269-.482 4.448-1.474c1.179-.991 1.768-2.439 1.768-4.314v-8.064h-3.242v7.85c0 2.036-1.509 3.055-2.948 3.055c-1.428 0-2.947-.991-2.947-3.027v-7.878z"
                />
              </svg>
              <p className="m-0 block font-bold text-gray-800 dark:text-white group-hover:translate-x-1 transition-transform">
                Buy one of my courses you are interested in, on Udemy
              </p>
            </FeatureItem>

            <FeatureItem href="/">
              <svg
                className="w-8 h-8 text-gray-800 mr-2 dark:text-gray-200 group-hover:scale-110 transition-transform"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M18 9a3 3 0 1 0-2.977-2.63l-6.94 3.47a3 3 0 1 0 0 4.319l6.94 3.47a3 3 0 1 0 .895-1.789l-6.94-3.47a3.03 3.03 0 0 0 0-.74l6.94-3.47C16.456 8.68 17.19 9 18 9Z"
                />
              </svg>

              <p className="m-0 block font-bold text-gray-800 dark:text-white group-hover:translate-x-1 transition-transform">
                Share the link to this page with your friends
              </p>
            </FeatureItem>
          </div>

          <p className="my-16">Big thanks in advance! 🎉</p>
        </main>
      </div>
    </Layout>
  )
}
