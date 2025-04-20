import { Categories, Devices, Hero, Plans, Questions } from "@/sections"

export const metadata = {
  title: "Home",
  isHeaderFixed: true,
}

export default function () {
  return (
    <>
      <Hero />
      <Categories />
      <Devices />
      <Questions />
      <Plans />
    </>
  )
}
