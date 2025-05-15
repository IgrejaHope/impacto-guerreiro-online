import React, { useState } from 'react';
import { useToast } from "@/components/ui/use-toast";
import { Shield } from 'lucide-react';
const EnrollmentForm = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    church: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Here you would normally send this data to your backend or payment processor
    console.log('Form submitted:', formData);
    toast({
      title: "Inscrição Recebida!",
      description: "Você será redirecionado para a página de pagamento em instantes.",
      duration: 5000
    });

    // Simulate redirect to payment page
    setTimeout(() => {
      alert('Esta é uma simulação. Aqui você seria redirecionado para a página de pagamento.');
    }, 2000);
  };
  return <section id="enrollment" className="section-container bg-impacto-darkgray py-16">
      
    </section>;
};
export default EnrollmentForm;