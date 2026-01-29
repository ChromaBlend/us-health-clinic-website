import React from 'react';

export interface FaqItem {
  question: string;
  answer: string;
}


export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface ComparisonPoint {
  label: string;
  traditional: boolean;
  ushc: boolean;
}