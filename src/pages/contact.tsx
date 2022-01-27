import React from 'react';

import { useForm, ValidationError } from '@formspree/react';

import { Background } from '../background/Background';
import { Meta } from '../layout/Meta';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Footer } from '../templates/Footer';
import { Logo } from '../templates/Logo';
import { AppConfig } from '../utils/AppConfig';

function ContactForm() {
  const [submitState, handleSubmit] = useForm('mdobajgq');
  if (submitState.succeeded) {
    window.location.href = './index.html';
  }

  return (
    <div className="text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Background color="bg-hero-banner bg-cover">
        <Section yPadding="py-4">
          <NavbarTwoColumns
            logo={<Logo xl color="text-gray-100" />}
          ></NavbarTwoColumns>
        </Section>
        <Section color="bg-gray-900 opacity-90 text-center" yPadding="py-8">
          <span className="text-gold-400 font-bold text-xl py-3">
            Contact Us
          </span>
          <div className="py-3"></div>
          <form className="" onSubmit={handleSubmit}>
            <div className="">
              <div className="">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-sm font-bold mb-2 py-2 px-5"
                  htmlFor="grid-password"
                >
                  Email:
                </label>
                <input
                  className="w-full max-w-lg appearance-none bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="email"
                  name="email"
                  type="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={submitState.errors}
                />
              </div>
            </div>
            <div className="py-3">
              <label className="uppercase text-gray-500 text-sm font-bold py-3">
                Asset(s) you are interested in:
              </label>
              <div className="py-3">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="btc"
                    name="btc"
                  />
                  <span className="mx-2">BTC</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="eth"
                    name="eth"
                  />
                  <span className="mx-2">ETH</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="usdt"
                    name="usdt"
                  />
                  <span className="mx-2">USDT</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox"
                    id="usdc"
                    name="usdc"
                  />
                  <span className="mx-2">USDC</span>
                </label>
              </div>
              <p className="text-gray-600 text-sm italic text-center">
                If you are interested in other coins, please tell us more below.
              </p>
            </div>

            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label
                  className="block uppercase tracking-wide text-gray-500 text-sm font-bold mb-2 py-2 px-5"
                  htmlFor="grid-password"
                >
                  YOUR MESSAGE TO US:
                </label>
                <textarea
                  className=" no-resize appearance-none w-full max-w-lg bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-40 resize-none"
                  id="message"
                  name="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={submitState.errors}
                />
              </div>
            </div>
            <div className="">
              <button
                className="bg-gold-600 hover:bg-gold-500 text-white text-lg font-bold py-2 px-6 rounded"
                type="submit"
                disabled={submitState.submitting}
              >
                Submit
              </button>
            </div>
          </form>
        </Section>
        <Section></Section>
      </Background>
      <Footer />
    </div>
  );
}

export default ContactForm;
