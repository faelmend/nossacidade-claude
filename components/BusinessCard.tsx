import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { CheckCircle, Image as ImageIcon } from 'lucide-react';
import { Business, PlanType } from '../types';

interface BusinessCardProps {
  business: Business;
}

const BusinessCard: React.FC<BusinessCardProps> = ({ business }) => {
  const { citySlug } = useParams<{ citySlug: string }>();
  const isPaidPlan = business.plan !== PlanType.FREE;
  const isEssential = business.plan === PlanType.ESSENTIAL;

  return (
    <Link 
      to={`/${citySlug}/business/${business.id}`}
      className={`group block bg-white rounded-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col ${
        isEssential ? 'ring-2 ring-primary-100 shadow-lg hover:shadow-xl' : 'border border-slate-200 shadow-sm hover:shadow-md'
      }`}
    >
      {/* Image Section - Fixed Height for ALL plans */}
      <div className="relative bg-slate-100 h-48 flex-shrink-0 overflow-hidden rounded-t-xl">
        {business.images && business.images.length > 0 ? (
          <img 
            src={business.images[0]} 
            alt={business.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
            // Placeholder for No Image (Free plans or Paid without image)
             <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center relative">
                <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
                <ImageIcon className="w-12 h-12 text-slate-300 relative z-10" />
             </div>
        )}
        
        {/* Badges - Category */}
        <div className="absolute top-2 left-2 flex gap-2 z-20">
           <span className="bg-white/95 backdrop-blur-sm px-2 py-1 rounded-md text-[10px] font-bold uppercase tracking-wide text-slate-600 shadow-sm border border-slate-100/50">
            {business.subcategory || business.categoryName}
           </span>
        </div>
        
        {isEssential && (
           <div className="absolute top-2 right-2 z-20">
             <span className="bg-primary-600 text-white px-2 py-1 rounded-md text-xs font-bold shadow-sm flex items-center gap-1">
               <CheckCircle className="w-3 h-3" /> Destaque
             </span>
           </div>
        )}
      </div>

      {/* Content Section */}
      <div className={`p-5 pt-12 flex flex-col flex-grow bg-white relative z-10 rounded-b-xl text-center`}>
        
        {/* Logo Overlay - Centered and Increased Size (w-20 h-20 is 25% larger than w-16 h-16) */}
        {business.logo && (
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 z-30 bg-white p-1 rounded-xl shadow-lg border-4 border-white flex items-center justify-center w-20 h-20">
                <img 
                    src={business.logo} 
                    alt="Logo" 
                    className="w-full h-full object-contain" 
                />
            </div>
        )}

        <div className="mb-2">
          <h3 className="font-bold text-slate-900 leading-tight group-hover:text-primary-600 transition-colors text-lg line-clamp-1" title={business.name}>
            {business.name}
          </h3>
          
          {/* Address / Location - Always show to fill space */}
          <p className="text-xs text-slate-400 mt-1 line-clamp-1">
            {business.address}
          </p>
        </div>

        {/* Description - Uniform line clamp for all */}
        <p className="text-sm text-slate-600 line-clamp-2 mb-4 min-h-[40px]">
            {business.shortDescription || business.description || "Empresa parceira do NossaCidade. Confira mais detalhes."}
        </p>

        {/* Button - Pushed to bottom using mt-auto */}
        <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-center">
          <button className="bg-slate-50 hover:bg-primary-50 text-slate-600 hover:text-primary-600 text-xs font-bold uppercase tracking-wide px-6 py-2 rounded-full transition-colors border border-slate-200 w-full">
            Ver detalhes
          </button>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;