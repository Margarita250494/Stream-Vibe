import Section from "@/layouts/Section"
import { categoryItems } from "@/utils/data"
import CategoryCard from "@/components/CategoryCard"
import Slider from "@/components/Slider"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"

export const Categories = () => {
  const sliderNavigationId = "categories-slider-navigation"
  return (
    <Section
      title="Explore our wide variety of categories"
      titleId="categories-title"
      description="Whether you're looking for a comedy to make you laugh,
      a drama to make you think, or a documentary to learn something new"
      isActionsHiddenOnMobile
      actions={<SliderNavigation mode="tile" id={sliderNavigationId} />}
    >
      <Slider
        navigationTargetElementId={sliderNavigationId}
        isBeyondTheViewportOnMobileS
      >
        {categoryItems.map((categoryItem, index) => (
          <CategoryCard {...categoryItem} key={index} />
        ))}
      </Slider>
    </Section>
  )
}
