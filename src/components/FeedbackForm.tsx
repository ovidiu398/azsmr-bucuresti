"use client";

import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const FeedbackForm = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: "Eroare",
        description: "Te rugăm să scrii un mesaj înainte de a trimite.",
        variant: "destructive",
      });
      return;
    }

    const mailtoLink = `mailto:azsmrbucuresti@gmail.com?subject=Feedback Site&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: "Succes",
      description: "Clientul de email a fost deschis pentru a trimite mesajul.",
    });
    
    setMessage("");
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">Feedback</h3>
      </div>
      
      <p className="text-gray-600 mb-6">
        Părerea ta este importantă pentru noi. Scrie-ne gândurile sau sugestiile tale mai jos.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
        <Textarea
          placeholder="Scrie aici mesajul tău..."
          className="flex-grow min-h-[150px] rounded-2xl border-gray-200 focus:ring-blue-500 resize-none p-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button 
          type="submit" 
          className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          Trimite Feedback
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;