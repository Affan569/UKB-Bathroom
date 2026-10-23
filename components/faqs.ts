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
      "We cover the full journey: 3D bathroom design, supply of premium fittings and fixtures, professional installation, tiling and complete bathroom renovations in Southampton and surrounding areas.",
  },
  {
    question: "How much does a bathroom installation cost?",
    answer:
      "Costs vary depending on the scope of work, materials chosen, and the size of your bathroom. We provide detailed quotes for each project. Contact us for a free quote specific to your requirements.",
  },
  {
    question: "How long does a bathroom installation take?",
    answer:
      "Most bathroom installations take between 5 and 10 working days, depending on the size of the room and the scope of work. We'll provide a clear timeline during your consultation.",
  },
  {
    question: "Do I need planning permission for a bathroom renovation?",
    answer:
      "Most bathroom renovations don't require planning permission, but certain work like moving walls or changing drainage may need building regulations approval. We can advise on this during your consultation.",
  },
  {
    question: "What waterproofing do you use for wet rooms?",
    answer:
      "We use professional-grade tanking systems and waterproof membranes to ensure your wet room is fully protected against water damage. All work complies with industry standards.",
  },
  {
    question: "What guarantees do you offer?",
    answer:
      "Our installation work comes with a workmanship guarantee. Products have their own manufacturer warranties. We'll provide full details on guarantees when we discuss your project.",
  },
  {
    question: "What is included in your quote?",
    answer:
      "Our quotes include all labour, materials, fixtures and fittings specified, and any necessary preparation work. We provide detailed, transparent quotes so you know exactly what's included.",
  },
  {
    question: "Do you work in my area?",
    answer:
      "We serve Southampton and surrounding areas including Shirley, Portswood, Woolston, Bitterne, Eastleigh, Totton, Hedge End, Chandler's Ford and Romsey. Contact us to confirm availability in your location.",
  },
];