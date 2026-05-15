// src/components/cta-strip-module.tsx
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Phone, ArrowRight } from 'lucide-react';

export function CtaStripModule() {
  return (
    <section className="section-flow">
        <div className="page-container">
            <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-tertiary/95 p-6 shadow-lg transition-shadow duration-300 hover:shadow-xl hover:shadow-black/20 md:flex-row md:gap-8 md:p-8">
                
                {/* --- LEFT: Headline/Value Proposition --- */}
                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-extrabold text-primary leading-tight">
                    
Ready to De-Risk Your Next Project?
                    </h3>
                    <p className="text-sm font-medium text-primary/80 mt-1">
                        Schedule a free technical assessment or chat directly with our owner.
</p>
                </div>

                {/* --- RIGHT: Dual CTAs --- */}
                <div className="flex flex-col sm:flex-row gap-3">
                    
                    {/* 1. 
Primary CTA: Direct Call Button (Emphasized) */}
                    <Button asChild 
                        // FIX: Increased height from h-12 to h-14 and padding to p-4 (mobile fix)
                        className="h-14 py-4 px-6 text-base font-bold shadow-lg 
                                   bg-primary hover:bg-black/80 text-white" // Dark button for contrast
  
                   >
                         <a href="tel:0826277082" className="flex items-center space-x-2">
                             <Phone className="w-5 h-5" />
                     
         <span>Call Owner (082 627 7082)</span>
                         </a>
                    </Button>
                    
                    {/* 2. Secondary 
CTA: Quote/Form Button (Subtle Link) */}
                    <Button asChild 
                        // FIX: Increased height from h-12 to h-14 and padding to p-4 (mobile fix)
                        className="h-14 py-4 px-6 text-base font-bold bg-white hover:bg-gray-100 text-primary 
                                   border border-primary/20 shadow-md"
      
               >
                        <Link href="/contact" className="flex items-center space-x-2">
                            <span>Request a Comprehensive Quote</span>
                           
  <ArrowRight className="w-4 h-4 ml-1" />
                        </Link>
                    </Button>

                </div>
            </div>
        </div>
    </section>
  );
}