import Section from "@/layouts/Section"
import Grid from "@/components/Grid"
import { plansGroup } from "@/utils/data"
import PlanCard from "@/components/PlanCard"
import { Tabs, TabsNavigation } from "@/components/Tabs"

export const Plans = () => {
  const tabsTitle = "plans-tabs"
  const tabsNavigationId = "plans-tabs-navigation"

  return (
    <Section
      title="Choose the plan that's right for you"
      titleId="plans-id"
      description="Join StreamVibe and select from our flexible subscription options
      tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
      actions={
        <TabsNavigation
          id={tabsNavigationId}
          title={tabsTitle}
          items={plansGroup}
        />
      }
    >
      <Tabs
        title={tabsTitle}
        navigationTargetElementId={tabsNavigationId}
        items={plansGroup.map((planGroup) => ({
          title: planGroup.title,
          isActive: planGroup.isActive,
          children: (
            <Grid columns={3}>
              {planGroup.items.map((planItem, index) => (
                <PlanCard {...planItem} key={index} />
              ))}
            </Grid>
          ),
        }))}
      />
    </Section>
  )
}
