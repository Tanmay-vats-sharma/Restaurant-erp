import React, { useState } from "react";

// Professional SVG Icons
const CrownIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const StarIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const RocketIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

const CheckIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const UsersIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const TrendingUpIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
    <polyline points="17 6 23 6 23 12" />
  </svg>
);

const EditIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const PlusIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default function PlansPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [activePlan, setActivePlan] = useState("p2");

  const plans = [
    {
      id: "p1",
      name: "Starter",
      description: "Perfect for small cafes and food trucks",
      price: { monthly: 199, annual: 1990 },
      originalPrice: { annual: 2388 },
      features: [
        "Up to 10 QR Codes",
        "Basic Menu Management",
        "Standard Support",
        "500 Scans/Month",
        "Email Support",
        "Basic Analytics"
      ],
      limitations: ["No Custom Domain", "Limited Storage"],
      icon: <StarIcon className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      popular: false,
      restaurants: 45
    },
    {
      id: "p2",
      name: "Professional",
      description: "Best for growing restaurants and chains",
      price: { monthly: 499, annual: 4990 },
      originalPrice: { annual: 5988 },
      features: [
        "Unlimited QR Codes",
        "Advanced Menu Management",
        "Priority Support",
        "Unlimited Scans",
        "Phone & Email Support",
        "Advanced Analytics",
        "Custom Branding",
        "API Access"
      ],
      limitations: [],
      icon: <CrownIcon className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-50",
      popular: true,
      restaurants: 89
    },
    {
      id: "p3",
      name: "Enterprise",
      description: "For large restaurant groups and franchises",
      price: { monthly: 1499, annual: 14990 },
      originalPrice: { annual: 17988 },
      features: [
        "Multi-Branch Management",
        "Unlimited Everything",
        "24/7 Priority Support",
        "Dedicated Account Manager",
        "SLA Guarantee",
        "Custom Development",
        "White-label Solutions",
        "Advanced Security"
      ],
      limitations: [],
      icon: <RocketIcon className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-50",
      popular: false,
      restaurants: 23
    }
  ];

  const stats = [
    { label: "Total Subscriptions", value: "157", change: "+12%", trend: "up" },
    { label: "Monthly Revenue", value: "₹84.5K", change: "+8%", trend: "up" },
    { label: "Active Plans", value: "142", change: "+5%", trend: "up" },
    { label: "Avg. Plan Value", value: "₹538", change: "+3%", trend: "up" }
  ];

  const calculateSavings = (plan) => {
    const monthlyCost = plan.price.monthly * 12;
    const annualCost = plan.price.annual;
    return monthlyCost - annualCost;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <div className="p-2 bg-purple-100 rounded-lg">
                  <CrownIcon className="w-6 h-6 text-purple-600" />
                </div>
                <h1 className="text-3xl font-bold text-gray-900">Subscription Plans</h1>
              </div>
              <p className="text-gray-600">Manage and customize your pricing plans for restaurants</p>
            </div>
            <div className="flex space-x-3 mt-4 lg:mt-0">
              <button className="bg-white border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors flex items-center gap-2">
                <TrendingUpIcon className="w-4 h-4" />
                View Analytics
              </button>
              <button 
                onClick={() => setShowCreateModal(true)}
                className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-4 py-2 rounded-lg hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2"
              >
                <PlusIcon className="w-4 h-4" />
                Create Plan
              </button>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                </div>
                <div className={`flex items-center gap-1 text-sm font-medium ${
                  stat.trend === "up" ? "text-green-600" : "text-red-600"
                }`}>
                  <TrendingUpIcon className={`w-4 h-4 ${stat.trend === "down" ? "transform rotate-180" : ""}`} />
                  {stat.change}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-100 inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-3 rounded-xl font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Monthly Billing
            </button>
            <button
              onClick={() => setBillingCycle("annual")}
              className={`px-6 py-3 rounded-xl font-medium transition-all relative ${
                billingCycle === "annual"
                  ? "bg-gradient-to-r from-purple-600 to-purple-500 text-white shadow-lg"
                  : "text-gray-600 hover:text-gray-900"
              }`}
            >
              Annual Billing
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                Save 17%
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl shadow-sm border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                plan.popular 
                  ? "border-purple-500 shadow-xl" 
                  : "border-gray-100 hover:shadow-lg"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-600 to-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                {/* Plan Header */}
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className={`p-3 rounded-xl bg-gradient-to-r ${plan.color} text-white`}>
                        {plan.icon}
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{plan.name}</h3>
                        <p className="text-gray-600 text-sm">{plan.description}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-gray-900">
                      ₹{billingCycle === "monthly" ? plan.price.monthly : plan.price.annual}
                    </span>
                    <span className="text-gray-600">
                      /{billingCycle === "monthly" ? "month" : "year"}
                    </span>
                  </div>
                  {billingCycle === "annual" && (
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-sm text-gray-500 line-through">
                        ₹{plan.originalPrice.annual}
                      </span>
                      <span className="text-green-600 text-sm font-medium">
                        Save ₹{calculateSavings(plan)}
                      </span>
                    </div>
                  )}
                </div>

                {/* Restaurant Count */}
                <div className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                  <UsersIcon className="w-4 h-4" />
                  <span>{plan.restaurants} restaurants using this plan</span>
                </div>

                {/* Features */}
                <div className="space-y-4 mb-8">
                  <h4 className="font-semibold text-gray-900">What's included:</h4>
                  {plan.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <CheckIcon className="w-3 h-3 text-green-600" />
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Limitations */}
                {plan.limitations.length > 0 && (
                  <div className="space-y-2 mb-6">
                    <h4 className="font-semibold text-gray-900 text-sm">Limitations:</h4>
                    {plan.limitations.map((limitation, index) => (
                      <div key={index} className="flex items-center gap-3 text-sm text-gray-600">
                        <div className="w-4 h-4 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
                          <span className="text-xs">×</span>
                        </div>
                        <span>{limitation}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Actions */}
                <div className="space-y-3">
                  <button className={`w-full py-3 rounded-xl font-semibold transition-all ${
                    plan.id === activePlan
                      ? "bg-gradient-to-r from-green-600 to-green-500 text-white shadow-lg"
                      : `bg-gradient-to-r ${plan.color} text-white hover:shadow-lg transform hover:-translate-y-0.5`
                  }`}>
                    {plan.id === activePlan ? "Current Plan" : "Choose Plan"}
                  </button>
                  <button className="w-full flex items-center justify-center gap-2 py-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <EditIcon className="w-4 h-4" />
                    Edit Plan Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Plan Comparison</h2>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="lg:col-span-1">
              <h3 className="font-semibold text-gray-900 mb-4">Features</h3>
              <div className="space-y-4 text-sm text-gray-600">
                <div className="h-8">QR Codes</div>
                <div className="h-8">Menu Items</div>
                <div className="h-8">Scans/Month</div>
                <div className="h-8">Support</div>
                <div className="h-8">Analytics</div>
                <div className="h-8">Custom Domain</div>
              </div>
            </div>
            {plans.map((plan) => (
              <div key={plan.id} className="text-center">
                <h3 className="font-semibold text-gray-900 mb-4">{plan.name}</h3>
                <div className="space-y-4 text-sm">
                  <div className="h-8 text-green-600 font-medium">Up to 10</div>
                  <div className="h-8 text-green-600 font-medium">50 items</div>
                  <div className="h-8 text-green-600 font-medium">500</div>
                  <div className="h-8 text-green-600 font-medium">Email</div>
                  <div className="h-8 text-green-600 font-medium">Basic</div>
                  <div className="h-8 text-gray-400">—</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Create Plan Modal */}
      {showCreateModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Create New Plan</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Plan Name</label>
                <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Monthly Price (₹)</label>
                <input type="number" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-purple-500 focus:border-purple-500" rows="3" />
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                onClick={() => setShowCreateModal(false)}
                className="flex-1 bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors"
              >
                Cancel
              </button>
              <button className="flex-1 bg-gradient-to-r from-purple-600 to-purple-500 text-white py-2 rounded-lg font-medium hover:shadow-lg transition-all">
                Create Plan
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}