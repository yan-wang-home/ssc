import React, { useEffect } from 'react';

const ExternalCaculator: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.mtgcalcs.com/calculators/js/embed.js';

    document.body.appendChild(script);
  }, []);

  return (
    <>
      <div
        className="mcalculator"
        data-calc="https://www.mtgcalcs.com/calculators/widget.php?selectedCalculators=%7B%22conventional%22%3Atrue%7D&selectedColors=%7B%22mainBgColor%22%3A%22%23ffffff%22%2C%22resultsBgColor%22%3A%22%231e46dc%22%2C%22sliderPrimaryColor%22%3A%22%231e46dc%22%2C%22sliderSecondaryColor%22%3A%22%23dddddd%22%2C%22sliderHandleColor%22%3A%22%231e46dc%22%2C%22mainTextColor%22%3A%22%23373a3c%22%2C%22resultsTextColor%22%3A%22%23ffffff%22%2C%22titleDefaultColor%22%3A%22%23777777%22%2C%22titleActiveColor%22%3A%22%23333333%22%2C%22titleActiveUnderlineColor%22%3A%22%23ffffff%22%7D&fhaInputs=%7B%7D&conventionalInputs=%7B%22mcalc-conventional-purchase-price%22%3A%22250000%22%2C%22mcalc-conventional-down-payment-percent%22%3A%225%22%2C%22mcalc-conventional-interest-rate%22%3A%225%22%2C%22mcalc-conventional-loan-term%22%3A%2230%22%2C%22mcalc-conventional-annual-tax-percent%22%3A%220%22%2C%22mcalc-conventional-annual-insurance%22%3A%220%22%2C%22mcalc-conventional-mortgage-insurance-rate%22%3A%220%22%2C%22mcalc-conventional-monthly-hoa%22%3A%220%22%7D&vaInputs=%7B%7D&refinanceInputs=%7B%7D&affordabilityInputs=%7B%7D&callback=onCalculator"
        data-width="1500"
      ></div>
    </>
  );
};

export default ExternalCaculator;
