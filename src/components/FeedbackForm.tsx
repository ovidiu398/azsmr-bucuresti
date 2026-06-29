"use client";

import React, { useState } from 'react';
import { Send, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useLanguage } from "@/context/LanguageContext";

const FeedbackForm = () => {
  const [message, setMessage] = useState("");
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!message.trim()) {
      toast({
        title: t("feedback.title"),
        description: t("feedback.error"),
        variant: "destructive",
      });
      return;
    }

    const mailtoLink = `mailto:azsmrbucuresti@gmail.com?subject=Feedback Site&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
    
    toast({
      title: t("feedback.title"),
      description: t("feedback.success"),
    });
    
    setMessage("");
  };

  return (
    <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 flex flex-col h-full">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 rounded-2xl bg-blue-50 text-blue-600">
          <MessageSquare className="w-6 h-6" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900">{t("feedback.title")}</h3>
      </div>
      
      <p className="text-gray-600 mb-6">
        {t("feedback.desc")}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4 flex-grow flex flex-col">
        <Textarea
          placeholder={t("feedback.placeholder")}
          className="flex-grow min-h-[150px] rounded-2xl border-gray-200 focus:ring-blue-500 resize-none p-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <Button 
          type="submit" 
          className="w-full py-6 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl transition-all flex items-center justify-center gap-2"
        >
          <Send className="w-5 h-5" />
          {t("feedback.button")}
        </Button>
      </form>
    </div>
  );
};

export default FeedbackForm;