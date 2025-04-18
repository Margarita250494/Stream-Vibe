import "./SliderNavigation.scss"
import classNames from "classnames"
import Button from "@/components/Button"

export const SliderNavigation = (props) => {
  const {
    className,
    id,
    hasPagination = true,
    /*''-default, tile*/
    mode = "",
  } = props
  return (
    <div
      className={classNames(className, "slider-navigation", {
        [`slider-navigation--${mode}`]: mode,
      })}
      id={id}
      data-js-slider-navigation=""
    >
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button-previous"
        mode="black-10"
        iconName="arrow-left"
        label="Previous Slide"
        isLabelHidden
        extraAttrs={{
          "data-js-slider-previous-button": "",
        }}
      />
      {hasPagination && (
        <div
          className="slider-navigation__pagination"
          data-js-slider-pagination=""
        />
      )}
      <Button
        className="slider-navigation__arrow-button slider-navigation__arrow-button-next"
        mode="black-10"
        iconName="arrow-right"
        label="Next Slide"
        isLabelHidden
        extraAttrs={{
          "data-js-slider-next-button": "",
        }}
      />
    </div>
  )
}
