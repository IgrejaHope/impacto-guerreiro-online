
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "É só para homens?",
      answer: "Não, o IMPACTO é para todos os que querem viver o propósito com disciplina e fé."
    },
    {
      question: "Tem experiência militar?",
      answer: "Não é necessário. A linguagem é simbólica e espiritual, representando a batalha espiritual que todos enfrentamos."
    },
    {
      question: "Tenho suporte?",
      answer: "Sim! Você terá acesso a um grupo fechado, mentorias e acompanhamento durante todo o treinamento."
    },
    {
      question: "É presencial ou online?",
      answer: "O IMPACTO é 100% online, o que permite que você participe de qualquer lugar e adapte os horários à sua rotina."
    },
    {
      question: "Qual o valor do investimento?",
      answer: "O investimento para o treinamento IMPACTO é de apenas R$150 por pessoa, um valor acessível para a transformação que você experimentará."
    },
    {
      question: "Há garantia de satisfação?",
      answer: "Sim! Oferecemos 7 dias de garantia. Se você participar ativamente e não sentir que o treinamento está agregando valor, devolveremos seu investimento."
    }
  ];

  return (
    <div className="section-container bg-impacto-darkgray">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block text-3xl mb-3">❓</span>
            <h2 className="section-title">Dúvidas Frequentes</h2>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-impacto-gray mb-4 rounded-md overflow-hidden"
              >
                <AccordionTrigger className="bg-impacto-black px-6 py-4 text-left font-military text-white hover:bg-impacto-gray hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="bg-impacto-darkgray px-6 py-4 text-gray-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
