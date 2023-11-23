import type { NextPage } from "next";

const Home: NextPage = () => {
  let text: string
  text = "Hello world!"
  return (
    <h1 className="flex h-screen w-screen items-center justify-center text-6xl font-bold text-blue-500">
      {text}
    </h1>
  )
}

export default Home