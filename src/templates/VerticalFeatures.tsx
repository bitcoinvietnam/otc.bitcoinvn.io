import { VerticalFeatureRow } from '../feature/VerticalFeatureRow';
import { Section } from '../layout/Section';

const VerticalFeatures = () => (
  <Section color="bg-gold-50 opacity-90">
    <VerticalFeatureRow
      title="Who We Serve"
      subtitle={
        'Corporate & Institutional Clients.(U)HNWI, Privacy-oriented investors.'
      }
      image="/assets/images/feature.svg"
      imageAlt="First feature alt text"
    />
    <VerticalFeatureRow
      title="Supported Currencies"
      subtitle="Bitcoin (BTC)
      Ether (ETH)
      Tether (USDT)
      USDC
      Further Cryptocurrencies upon request."
      image="/assets/images/feature2.svg"
      imageAlt="Second feature alt text"
      reverse
    />
  </Section>
);

export { VerticalFeatures };
