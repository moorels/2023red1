import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      Home Page test12345w
      <div className="group rounded-xl border border-gray-100 bg-white p-6 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-8">
        <div className="relative overflow-hidden rounded-xl">
          <img
            src="https://images.unsplash.com/photo-1661749711934-492cd19a25c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80"
            alt="art cover"
            loading="lazy"
            width="1000"
            height="667"
            className="h-40 w-full object-cover object-top transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="relative mt-6"></div>
      </div>
    </>
  )
}

export default HomePage
