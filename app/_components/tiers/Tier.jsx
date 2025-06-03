import Section from '../containers/Section';
import SectionTierInfo from '../containers/SectionTierInfo';
import List from '../List';
import ListItem from '../ListItem';
import HeadingInfo from '../text/HeadingInfo';
import HeadingSection from '../text/HeadingSection';

function Tier({ tier }) {
  const { id, heading, includedPages, includedFeatures, prices, addOns } = tier;

  return (
    <Section color={id}>
      <HeadingSection>{heading}</HeadingSection>

      {/* Pages */}

      <div className='flex flex-col gap-9 p-div'>
        {/* Included Pages/Sections */}
        <SectionTierInfo heading='Included Sections'>
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
        <HeadingInfo theme='tier'>Price</HeadingInfo>
      </div>
    </Section>
  );
}

export default Tier;
