import React, { useState, memo } from 'react';
import { CheckIcon, XIcon } from 'lucide-react';
export function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(true);
  const plans = [{
    name: 'Free',
    price: {
      monthly: 0,
      annual: 0
    },
    description: "Basic memorial for honoring your pet's memory",
    features: ['Single pet memorial page', 'Photo gallery (up to 10 photos)', 'Basic timeline', 'Private memorial option', 'Share with friends & family', 'Community access'],
    notIncluded: ['Custom memorial URL', 'Rainbow AI Letters', 'Advanced privacy controls'],
    cta: 'Get Started',
    highlighted: false
  }, {
    name: 'Premium',
    price: {
      monthly: 9.99,
      annual: 7.99
    },
    description: 'Enhanced features for a beautiful, lasting tribute',
    features: ['Everything in Free', 'Unlimited photos & videos', 'Advanced memory timeline', '5 Rainbow AI Letters per month', 'Virtual candle lighting ceremonies', 'Custom memorial URL', 'Advanced privacy controls', 'Ad-free experience'],
    cta: 'Choose Premium',
    highlighted: true
  }, {
    name: 'Forever',
    price: {
      monthly: 19.99,
      annual: 14.99
    },
    description: 'Complete memorial experience with all healing tools',
    features: ['Everything in Premium', 'Multiple pet profiles', 'Unlimited Rainbow AI Letters', 'All healing rituals & tools', 'Priority support', 'Memorial backup service', 'Granular privacy settings', 'Printed memorial photobook (yearly)'],
    cta: 'Choose Forever',
    highlighted: false
  }];
  return <div className="pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Simple, Transparent <span className="text-indigo-600">Pricing</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            Choose the plan that best supports your memorial needs and healing
            journey.
          </p>
          {/* Toggle */}
          <div className="flex items-center justify-center">
            <span className={`text-sm ${isAnnual ? 'text-gray-500' : 'text-gray-800 font-medium'}`}>
              Monthly
            </span>
            <button className="relative mx-4 w-16 h-8 bg-indigo-100 rounded-full p-1" onClick={() => setIsAnnual(!isAnnual)}>
              <div className={`absolute w-6 h-6 bg-indigo-600 rounded-full shadow-sm transition-transform ${isAnnual ? 'translate-x-8' : 'translate-x-0'}`}></div>
            </button>
            <span className={`text-sm ${isAnnual ? 'text-gray-800 font-medium' : 'text-gray-500'}`}>
              Annual{' '}
              <span className="text-green-500 font-medium ml-1">Save 20%</span>
            </span>
          </div>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => <div key={index} className={`rounded-2xl overflow-hidden ${plan.highlighted ? 'bg-white border-2 border-indigo-500 shadow-lg transform md:-translate-y-4' : 'bg-white border border-gray-200 shadow-sm'}`}>
              {plan.highlighted && <div className="bg-indigo-500 py-2 text-center">
                  <span className="text-sm font-medium text-white">
                    Most Popular
                  </span>
                </div>}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-800">
                    ${isAnnual ? plan.price.annual : plan.price.monthly}
                  </span>
                  <span className="text-gray-500 ml-2">
                    {plan.price.monthly > 0 ? `/ month${isAnnual ? ', billed annually' : ''}` : ''}
                  </span>
                </div>
                <button className={`w-full py-3 rounded-md mb-8 transition-colors ${plan.highlighted ? 'bg-indigo-600 text-white hover:bg-indigo-700' : 'bg-indigo-100 text-indigo-600 hover:bg-indigo-200'}`}>
                  {plan.cta}
                </button>
                <div className="space-y-4">
                  {plan.features.map((feature, i) => <div key={i} className="flex items-start">
                      <CheckIcon className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </div>)}
                  {plan.notIncluded && plan.notIncluded.map((feature, i) => <div key={i} className="flex items-start">
                        <XIcon className="w-5 h-5 text-gray-300 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-400">{feature}</span>
                      </div>)}
                </div>
              </div>
            </div>)}
        </div>
        {/* FAQ Section */}
        <div className="bg-indigo-50 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Can I upgrade my plan later?
              </h3>
              <p className="text-gray-600">
                Yes, you can upgrade your plan at any time. Your new features
                will be available immediately, and we'll prorate any difference
                in cost.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                What happens to my memorial if I cancel?
              </h3>
              <p className="text-gray-600">
                Free memorials remain accessible indefinitely. If you downgrade
                from a paid plan, you'll retain access to your memorial with
                free tier features.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                How do privacy settings work?
              </h3>
              <p className="text-gray-600">
                All plans include basic privacy options. Premium and Forever
                plans offer advanced controls, letting you set different privacy
                levels for different sections of your memorial.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Do you offer refunds?
              </h3>
              <p className="text-gray-600">
                We offer a 30-day money-back guarantee on all paid plans. If
                you're not satisfied, contact our support team for a full
                refund.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>;
}