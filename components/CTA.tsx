import React from 'react';
import { Button } from './UI';
import { FadeIn } from './Animations';

interface CTAProps {
    title: React.ReactNode;
    description: string;
    buttonText?: string;
    onButtonClick?: () => void;
    variant?: 'teal' | 'cream';
}

export const CTA: React.FC<CTAProps> = ({
    title,
    description,
    buttonText = "Get Started",
    onButtonClick,
    variant = 'teal'
}) => {
    const isTeal = variant === 'teal';

    return (
        <section className={`py-32 ${isTeal ? 'bg-teal-900 text-white' : 'bg-cream text-center'} relative overflow-hidden`}>
            {isTeal && (
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
                    <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-400 rounded-full blur-[120px]"></div>
                </div>
            )}

            <div className={`max-w-4xl mx-auto px-6 ${isTeal ? 'text-center' : ''} relative z-10`}>
                <FadeIn>
                    <h2 className={`text-4xl md:text-6xl font-serif font-medium mb-8 leading-tight ${!isTeal ? 'text-teal-900' : ''}`}>
                        {title}
                    </h2>
                    <p className={`${isTeal ? 'text-teal-100/80' : 'text-gray-600'} text-xl mb-12 max-w-2xl mx-auto font-light`}>
                        {description}
                    </p>
                    <div className="flex flex-col items-center gap-4">
                        <Button
                            onClick={onButtonClick}
                            variant={isTeal ? "secondary" : "primary"}
                            className={isTeal ? "bg-white text-teal-900 hover:bg-teal-50 border-none" : ""}
                        >
                            {buttonText}
                        </Button>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
};
