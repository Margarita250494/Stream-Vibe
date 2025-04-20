import Section from "@/layouts/Section"
import Button from "@/components/Button"
import { questionItems } from "@/utils/data"
import AccordionGroup from "@/components/AccordionGroup"
import Accordion from "@/components/Accordion"

export const Questions = () => {
  return (
    <Section
      title="Frequently Asked Questions"
      titleId="questions-title"
      description="Got questions? We've got answers!
      Check out our FAQ section to find answers to the most
      common questions about StreamVibe."
      actions={<Button label="Ask a Question" href="/support" />}
    >
      <AccordionGroup columns={2}>
        {questionItems.map((question, index) => (
          <Accordion
            key={index}
            title={question}
            id={`question-${index}`}
            name="questions"
            isOpen={index === 0}
          >
            <p>
              StreamVibe is a streaming service that allows you to watch movies
              and shows on demand.
            </p>
          </Accordion>
        ))}
      </AccordionGroup>
    </Section>
  )
}
