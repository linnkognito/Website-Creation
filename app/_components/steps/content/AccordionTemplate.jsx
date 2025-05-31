import { CheckCircleIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import Accordion from '@/app/_components/containers/Accordion';
import Tooltip from '@/app/_components/containers/Tooltip';
import DividerHorizontal from '@/app/_components/DividerHorizontal';
import Paragraph from '@/app/_components/Paragraph';

function AccordionTemplate({ data }) {
  if (!data) return;

  const { title, description, tooltips } = data;

  return (
    <Accordion title={title}>
      <DividerHorizontal color='dark' />
      <Paragraph>{description}</Paragraph>
      <DividerHorizontal color='dark' />

      {/* Tooltips */}
      <div className='flex-col-gap'>
        <Tooltip
          title={tooltips.lightbulb.title}
          icon={LightBulbIcon}
          color='indigo'
        >
          {tooltips.lightbulb.text}
        </Tooltip>

        <Tooltip
          title={tooltips.check.title}
          icon={CheckCircleIcon}
          color='lime'
        >
          {tooltips.check.text}
        </Tooltip>
      </div>
    </Accordion>
  );
}

export default AccordionTemplate;
