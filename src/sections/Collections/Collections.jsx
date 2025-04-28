import "./Collections.scss"
import { Tabs } from "@/components/Tabs"
import { collectionsData } from "@/sections/Collections/collectionData"
import { getIdFromTitle } from "@/utils/getIdFromTitle"
import Section from "@/layouts/Section"
import SliderNavigation from "@/components/Slider/components/SliderNavigation"
import Slider from "@/components/Slider"
import CategoryCard from "@/components/CategoryCard"
import MovieCard from "@/components/MovieCard"

export const Collections = () => {
  return (
    <Tabs
      className="collections container"
      title="collections"
      isEnableOnlyOnMobile
      items={collectionsData.map((collection) => ({
        isActive: collection.isActive,
        title: collection.title,
        children: (
          <div className="collections__group">
            <p className="collections__title hidden-mobile">
              {collection.title}
            </p>
            {collection.items.map((item, index) => {
              const { title, categoryItems, sliderParams, movieItems } = item
              const titleFormated = `${getIdFromTitle(collection.title)}-${getIdFromTitle(title)}`
              const titleId = `${titleFormated}-title`
              const sliderNavigationId = `${titleFormated}-slider-navigation`

              return (
                <Section
                  className="collections__section"
                  key={index}
                  title={title}
                  id={titleId}
                  actions={
                    <SliderNavigation id={sliderNavigationId} mode="tile" />
                  }
                  isActionsHiddenOnMobile
                >
                  <Slider
                    sliderParams={sliderParams}
                    navigationTargetElementId={sliderNavigationId}
                    isBeyondTheViewportOnMobileS
                  >
                    {categoryItems?.map((categoryItem, index) => (
                      <CategoryCard {...categoryItem} key={index} />
                    )) ??
                      movieItems?.map((movieItem, index) => (
                        <MovieCard key={index} {...movieItem} />
                      ))}
                  </Slider>
                </Section>
              )
            })}
          </div>
        ),
      }))}
    />
  )
}

/*
 *
 *
 * */
