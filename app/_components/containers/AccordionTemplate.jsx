import { CheckCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Accordion from '@/app/_components/containers/Accordion';
import InfoCard from '@/app/_components/containers/InfoCard';
import DividerHorizontal from '@/app/_components/DividerHorizontal';
import Paragraph from '@/app/_components/text/Paragraph';

function AccordionTemplate({ data }) {
  if (!data) return;

  const { title, description, infoCards } = data;

  return (
    <Accordion title={title}>
      <DividerHorizontal color='dark' />
      <Paragraph>{description}</Paragraph>
      <DividerHorizontal color='dark' />

      {/* InfoCards */}
      <div className='flex-col-gap'>
        <InfoCard
          title={infoCards.lightbulb.title}
          icon={LightBulbIcon}
          color='indigo'
        >
          {infoCards.lightbulb.text}
        </InfoCard>

        <InfoCard
          title={infoCards.check.title}
          icon={CheckCircleIcon}
          color='lime'
        >
          {infoCards.check.text}
        </InfoCard>
      </div>
    </Accordion>
  );
}

export default AccordionTemplate;
