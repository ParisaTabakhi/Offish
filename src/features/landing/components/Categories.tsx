'use client';

import React, { memo } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ArrowUpRight } from 'lucide-react';
import { CATEGORY_CARDS } from '../data/hero.constants';
import { IHeroCategoryCard } from '../types/hero.types';

// Extracted sub-components for better readability and reusability

// Props interfaces
interface ICategoriesProps {
  onCategoryClick?: (categoryName: string) => void;
}

interface ICategoryCardProps {
  category: IHeroCategoryCard;
  index: number;
  onClick: (name: string) => void;
}

// Sub-components
const CardHeader: React.FC<{ category: IHeroCategoryCard }> = memo(({ category }) => (
  <div className="flex justify-between items-start">
    <div className="flex gap-4 items-center">
      <div className={`w-14 h-14 rounded-2xl ${category.bgIcon} flex items-center justify-center shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 ease-out border border-white/50`}>
        <category.icon className={`w-7 h-7 ${category.iconColor}`} strokeWidth={1.5} />
      </div>
      
      <div>
        <h3 className="text-lg font-bold text-slate-800 group-hover:text-slate-900 transition-colors flex items-center gap-2 whitespace-nowrap">
          {category.name}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-slate-400" />
        </h3>
        <p className="text-sm text-slate-500 font-medium group-hover:text-slate-600 transition-colors">
          {category.desc}
        </p>
      </div>
    </div>

    <div className={`w-8 h-8 rounded-full border border-slate-100 bg-white flex items-center justify-center text-slate-300 group-hover:border-${category.theme}-200 group-hover:text-${category.theme}-500 transition-colors shadow-sm`}>
      <ChevronLeft className="w-4 h-4 transition-transform group-hover:-translate-x-0.5" />
    </div>
  </div>
));

const DecorativeLine: React.FC<{ theme: string }> = memo(({ theme }) => (
  <div className="w-full h-px bg-slate-100 group-hover:bg-white/20 relative overflow-hidden">
    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${theme}-400 to-transparent w-1/2 h-full -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000 ease-in-out`} />
  </div>
));

const Tags: React.FC<{ tags: string[]; theme: string }> = memo(({ tags, theme }) => (
  <div className="flex flex-wrap gap-1">
    {tags.map((tag, i) => (
      <span
        key={i}
        className={`text-[12px] font-medium px-2 py-1 rounded-lg bg-slate-50 text-slate-500 border border-slate-100 group-hover:bg-white/60 group-hover:border-${theme}-100 transition-colors`}
      >
        {tag}
      </span>
    ))}
  </div>
));

const SubIcons: React.FC<{ subIcons: any[] }> = memo(({ subIcons }) => (
  <div className="flex -space-x-2 space-x-reverse justify-end">
    {subIcons.map((SubIcon, i) => (
      <div
        key={i}
        className={`w-7 h-7 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm relative z-[${3 - i}] transition-transform duration-300 group-hover:translate-x-${i * 2}`}
        style={{ transitionDelay: `${i * 50}ms` }}
      >
        <SubIcon className="w-3.5 h-3.5 text-slate-400" strokeWidth={1.5} />
      </div>
    ))}
  </div>
));

// Main CategoryCard component
const CategoryCard: React.FC<ICategoryCardProps> = memo(({ 
  category, 
  index, 
  onClick 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ 
        delay: 0.3 + (index * 0.1), 
        duration: 0.5, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      onClick={() => onClick(category.name)}
      className="group relative h-full w-full cursor-pointer"
    >
      <div className={`h-full shadow-md w-full bg-white rounded-3xl border border-slate-100 p-5 relative overflow-hidden transition-all duration-500 hover:shadow-xl hover:shadow-slate-200/50 hover:-translate-y-1 ${category.borderHover}`}>
        
        {/* Animated Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Decorative Background Pattern */}
        <div className="absolute right-0 top-0 w-32 h-32 opacity-[0.03] group-hover:opacity-[0.07] transition-all duration-500 pointer-events-none">
          <category.icon className="w-full h-full -rotate-12 translate-x-8 -translate-y-8" />
        </div>

        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between gap-4">
          <CardHeader category={category} />
          <DecorativeLine theme={category.theme} />
          <Tags tags={category.tags} theme={category.theme} />
          <DecorativeLine theme={category.theme} />
          <SubIcons subIcons={category.subIcons} />
        </div>
      </div>
    </motion.div>
  );
});

// Main Categories component
const Categories: React.FC<ICategoriesProps> = memo(({ onCategoryClick }) => {
  const handleCategoryClick = (categoryName: string) => {
    onCategoryClick?.(categoryName);
  };

  return (
    <div className='flex gap-5 justify-center items-center'>
      {CATEGORY_CARDS.map((category, index) => (
        <CategoryCard
          key={category.id}
          category={category}
          index={index}
          onClick={handleCategoryClick}
        />
      ))}
    </div>
  );
});

Categories.displayName = 'Categories';
CategoryCard.displayName = 'CategoryCard';

export default Categories;