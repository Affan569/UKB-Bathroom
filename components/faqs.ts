/**
 * EDIT FAQs HERE
 * --------------
 * To add a FAQ:     copy one { question, answer } block and paste it where you want it.
 * To edit a FAQ:    change the text.
 * To remove a FAQ:  delete its block.
 * To reorder:       move the blocks around.
 *
 * Numbers (01, 02, 03...) are generated automatically, so you never touch them.
 */
export type FaqItem = {
  question: string;
  answer: string;
};

export const FAQS: FaqItem[] = [
  {
    question: "What bathroom services do you offer?",
    answer:
      "We cover the full journey: 3D bathroom design, supply of premium fittings and fixtures, professional installation, tiling and complete bathroom renovations.",
  },
  {
    question: "Do you offer bathroom installation services?",
    answer:
      "Yes. Our skilled installers handle everything from stripping out the old bathroom to fitting your new one, including plumbing, tiling and finishing, with a flawless result.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Most bathrooms take between 5 and 10 working days, depending on the size of the room and the scope of work. We'll give you a clear timeline before we start.",
  },
  {
    question: "Can I get a custom bathroom design?",
    answer:
      "Absolutely. We create 3D designs tailored to your space, style and budget, so you can see exactly how your bathroom will look before any work begins.",
  },
  {
    question: "What is your return or exchange policy?",
    answer:
      "Unused products in their original packaging can be returned or exchanged within 30 days. Made-to-order and custom items are not eligible. Contact us and we'll help you sort it out.",
  },
  {
    question: "Do you offer warranties on your products?",
    answer:
      "Yes. Our products come with manufacturer warranties, and our installation work is backed by our own workmanship guarantee. Details vary by product, so just ask.",
  },
  {
    question: "Do you provide delivery across the UK?",
    answer:
      "We deliver to addresses across the UK. Delivery times and costs depend on your location and the items ordered, and we'll confirm both when you place your order.",
  },
];