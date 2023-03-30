import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const AboutPage = () => {
  return (
    <>
      <MetaTags title="About" description="About page" />
      About Page
      <h1 className="text-primary mt-0 mb-2 text-5xl font-medium leading-tight text-green-700">
        Tailwind Elements
      </h1>
    </>
  )
}

export default AboutPage
