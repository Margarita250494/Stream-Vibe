import { Categories, Devices, Hero } from "@/sections"

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
    </>
  )
}
