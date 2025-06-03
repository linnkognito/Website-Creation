import Section from '../containers/Section';
import SectionTierInfo from '../containers/SectionTierInfo';
import List from '../List';
import ListItem from '../ListItem';
import HeadingSection from '../text/HeadingSection';
import SectionTierPrice from '../containers/SectionTierPrice';

function Tier({ tier }) {
  const {
    id,
    heading,
    pages,
    includedPages,
    includedFeatures,
    prices,
    addOns,
  } = tier;

  return (
    <Section color={id}>
      <HeadingSection pages={pages}>{heading}</HeadingSection>

      <div className='flex flex-col gap-9 p-div'>
        {/* Included Pages/Sections */}
        <SectionTierInfo
          heading={id === 'starter' ? 'Included Sections' : 'Included Pages'}
        >
          <List>
            {includedPages.map((page) => (
              <ListItem key={page.id} listItem={page} />
            ))}
          </List>
        </SectionTierInfo>

        {/* Included features */}
        <SectionTierInfo heading='Included Services & Features'>
          <List>
            {includedFeatures.map((page) => (
              <ListItem key={page.id} color='indigo' listItem={page} />
            ))}
          </List>
        </SectionTierInfo>

        {/* Add ons */}
        <SectionTierInfo heading='Add Ons'>
          <List>
            {addOns.map((addon) => (
              <ListItem key={addon.id} color='lime' listItem={addon} />
            ))}
          </List>
        </SectionTierInfo>

        {/* Price */}
        <SectionTierPrice heading='Price' prices={prices} tier={id} />
      </div>
    </Section>
  );
}

export default Tier;
