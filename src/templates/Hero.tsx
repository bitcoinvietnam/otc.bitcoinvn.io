import React from 'react';

import Link from 'next/link';

import { Background } from '../background/Background';
import { HeroOneButton } from '../hero/HeroOneButton';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';

const contactFormUrl = '/contact';

const Hero = () => {
  return (
    <div>
      <Background color="bg-hero-banner bg-cover">
        <Section yPadding="py-4">
          <NavbarTwoColumns
            logo={<Logo xl color="text-gray-100" />}
          ></NavbarTwoColumns>
        </Section>
        <Section color="bg-gray-900 opacity-90" yPadding="pt-20 pb-40">
          <HeroOneButton
            title={
              <>
                {'Personalized Trading Service\n'}
                <span className="text-gold-400">BitcoinVN OTC</span>
              </>
            }
            description={
              <>
                {
                  'Trade with Vietnam’s longest-running Bitcoin Exchange service provider (since 2014).'
                }
                <br />
                {
                  'For investors located in HCMC & planet Earth* executing large trades starting from 200M ₫.'
                }
              </>
            }
            button={
              <Link href={contactFormUrl}>
                <a>
                  <button className="bg-gold-600 hover:bg-gold-500 text-white text-xl font-bold py-4 px-7 rounded">
                    Contact Now
                  </button>
                </a>
              </Link>
            }
          />
        </Section>
      </Background>
      <Background color="bg-hero-banner bg-cover">
        <Background color="bg-gradient-to-b from-gold-600 to-gold-600 opacity-90">
          <Section color="py-7"></Section>
        </Background>
        <Background color="bg-gradient-to-b from-gray-900 to-gray-800 opacity-90">
          <div className="laptop:flex py-30 px-30 ">
            <div className="laptop:w-1/2">
              <Background color="bg-who-we-serve opacity-100 bg-cover">
                <div className=" opacity-90 bg-gradient-to-l from-gray-800 to-gray-700 py-10">
                  <div className="font-bold text-gold-400 text-3xl text-center px-10 py-10">
                    Who We Serve
                  </div>
                  <div className="font-bold text-2xl laptop:text-3xl text-white text-center px-10 py-10">
                    ◇ Corporate & institutional clients
                    <br />
                    ◇ High net worth individuals
                    <br />◇ Privacy-oriented investors
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </Background>
            </div>
            {/* <div className="w-1/7"></div> */}
            <div className="laptop:w-1/2">
              <Background color="bg-supported-currencies opacity-100 bg-cover">
                <div className="opacity-90 bg-gradient-to-l from-gray-800 to-gray-700 py-10">
                  <div className="font-bold text-gold-400 text-3xl text-center px-10 py-10">
                    Supported Currencies
                  </div>
                  <div className="font-bold text-2xl laptop:text-3xl px-10 text-white text-center py-10">
                    ◇ Bitcoin (BTC)
                    <br />
                    ◇ Ether (ETH)
                    <br />
                    ◇ Tether (USDT)
                    <br />
                    ◇ USDC
                    <br />◇ Further cryptocurrencies upon request
                  </div>
                </div>
              </Background>
            </div>
          </div>
          <Section yPadding="pt-20 pb-10">
            <div className="w-full text-center sm:px-6 ">
              <h3 className="text-3xl text-gold-500 font-semibold">
                Our Team Leadership
              </h3>
              <div className="py-10">
                <img
                  className="mx-auto rounded-full shadow-sm"
                  src={`https://otc.bitcoinvn.io/assets/images/leader-avt-black.jpg`}
                  alt="Our Team Leadership"
                  width="30%"
                />
              </div>
              <span className="italic text-gold-400 font-semibold">
                <a
                  href="http://www.twitter.com/PhuongBitcoinVN"
                  target="_blank"
                  rel="noreferrer"
                >
                  Nguyen Tran Bao Phuong{' '}
                </a>
                - Head of OTC Trading
              </span>
              <div className=" py-3 text-xl mt-8 mb-16 text-gray-400 text-justify">
                <h2>
                  “Our team has been able to pioneer this market since its early
                  days. We have successively been able to build up a large
                  liquidity network within Vietnam as well as in many
                  neighbouring countries. If you feel we could provide a
                  solution to your needs - we hope to have a conversation soon!”
                </h2>
              </div>
            </div>
          </Section>
        </Background>
        <Background color="bg-gray-900 opacity-90">
          {/* <Section yPadding="pt-20 pb-40">
            <div className="w-full text-center sm:px-10 ">
              <h3 className="text-3xl text-white font-semibold">
                What Partners & Clients Tell About Us
              </h3>
            </div>
            <Testimonial />
          </Section>
 */}
          <Section yPadding="">
            <HeroOneButton
              title={
                <>
                  {'Personalized 1-on-1 Service\n'}
                  <span className="text-gold-400">BitcoinVN OTC Trading</span>
                </>
              }
              description={
                <>
                  <div className="text-center">
                    {
                      '◇ Initial high-touch consultation to help your trade execution.'
                    }
                    <br />
                    {
                      '◇ A decade of experience executing high volume orders.'
                    }{' '}
                    <br />
                    {
                      '◇ Long-lasting, trusted and mutually beneficial client relationship.'
                    }
                  </div>
                </>
              }
              button={
                <Link href={contactFormUrl}>
                  <a>
                    <button className="bg-gold-600 hover:bg-gold-500 text-white text-xl font-bold py-4 px-7 rounded">
                      Contact Now
                    </button>
                  </a>
                </Link>
              }
            />
          </Section>
        </Background>

        <Background color="bg-gray-900 opacity-90 text-gray-100">
          <Section>
            <h4 className="text-gold-500 font-bold">What is OTC?</h4>
            <br></br>
            Over-the-counter (OTC) trading takes place off the online exchange
            platforms provided by{' '}
            <a
              className="text-gold-500"
              href="http://www.bitcoinvn.io"
              target="_blank"
              rel="noreferrer"
            >
              BitcoinVN
            </a>{' '}
            and{' '}
            <a
              className="text-gold-500"
              href="http://vbtc.exchange"
              target="_blank"
              rel="noreferrer"
            >
              VBTC
            </a>{' '}
            <a>
              with highly competitive off-the-market rates. Access to our OTC
              trade desk offers deep liquidity and a private and personalized
              service. Whether you are looking to trade 50,000$ or 10,000,000$
              worth of Bitcoin, major Cryptocurrencies or Stablecoins - our OTC
              desk will provide you with execution and settlement services that
              are discreet, secure and competitive.
            </a>
            <br></br> <br></br>
            <h4 className="text-gold-500 font-bold">
              *Other Cities & (South-East)-Asian countries
            </h4>
            <br></br>
            Might be serviceable upon request! Additional markets we can service
            upon request: Japan, Malaysia, Indonesia, Thailand, Singapore,
            Europe (SEPA), Philippines, United States, Canada, Australia… (focus
            on Asia, can also serve other cities/continents).
            <p> Bank wire and cash (in some locations).</p>
          </Section>
        </Background>
      </Background>
    </div>
  );
};

export { Hero };
