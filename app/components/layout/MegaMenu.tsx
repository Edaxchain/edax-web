import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink } from 'lucide-react';
import Link from 'next/link';

interface MenuItem {
  id: number | string;
  title: string;
  desc?: string;
  img?: string;
  icon?: React.ReactNode;
  color?: string;
  href?: string;
}

interface Props {
  items: MenuItem[];
  categoryName: string;
  onMenuHover?: () => void;
  onMenuLeave?: () => void;
  onItemClick?: () => void;
  basePath?: string;
}

export const MegaMenuTemplate = ({
  items,
  categoryName,
  onMenuHover,
  onMenuLeave,
  onItemClick,
  basePath = "/"
}: Props) => {
  const [activeItem, setActiveItem] = useState(items[0]);


  const getDestination = (item: MenuItem) => {
    if (item.href) return item.href;
    return `${basePath}`;
  };

  return (
    <motion.div
      onMouseEnter={onMenuHover}
      onMouseLeave={onMenuLeave}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative w-[800px] bg-nav-bg/95 backdrop-blur-2xl border border-nav-border/20 rounded-[2rem] overflow-hidden shadow-2xl flex text-text-main"
    >
      {/* Dropdown */}
      <div className="w-1/3 p-6 bg-nav-bg/50 border-r border-nav-border/50">
        <p className="text-[10px] uppercase tracking-[0.2em] text-text-sub mb-6 font-black italic">
          {categoryName}
        </p>
        <div className="space-y-1">
          {items.map((item) => (
            <Link
              key={item.id}
              onMouseEnter={() => setActiveItem(item)}
              href={item.href || '#'}
              onClick={onItemClick}
              className={`group flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all duration-300 ${activeItem.id === item.id ? 'bg-nav-bg/10 shadow-lg' : 'hover:bg-nav-bg/5'
                }`}
            >
              <div className="flex items-center gap-3">
                <div style={{ color: activeItem.id === item.id ? (item.color || '#3b82f6') : '#666' }}>
                  {item.icon || <div className="w-4 h-4 rounded-full bg-current opacity-20" />}
                </div>
                <span className={`text-sm font-bold transition-colors ${activeItem.id === item.id ? 'text-text-main' : 'text-text-sub'
                  }`}>
                  {item.title}
                </span>
              </div>
              <ChevronRight size={14} className={`transition-transform ${activeItem.id === item.id ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                }`} />
            </Link>
          ))}
        </div>
      </div>

      {/* Preview */}
      <div className="w-2/3 p-8 flex flex-col relative overflow-hidden">
        {/* Image */}
        <div className="relative z-10 overflow-hidden rounded-2xl h-48 mb-6 border border-nav-border/5 bg-nav-bg/40 shadow-inner">
          {activeItem.img ? (
            <motion.img
              key={activeItem.img}
              src={activeItem.img}
              initial={{ scale: 1.1, opacity: 0 }}
              animate={{ scale: 1.1, opacity: 1 }}
              whileHover={{ scale: 1.3 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          ) : (
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              key={activeItem.id}
              className="flex items-center justify-center w-full h-full relative"
            >
              
              <div
                className="absolute w-24 h-24 rounded-full blur-[40px] opacity-30"
                style={{ backgroundColor: activeItem.color || '#3b82f6' }}
              />

              <div
                className="relative z-10 scale-[4] transition-transform duration-500"
                style={{ color: activeItem.color || '#3b82f6' }}
              >
                {activeItem.icon || <div className="w-4 h-4 rounded-full bg-current opacity-20" />}
              </div>
            </motion.div>
          )}
        </div>

        <div className="relative z-10">
          <h4 className="text-2xl font-black mb-2 tracking-tight" style={{ color: activeItem.color || '#3b82f6' }}>
            {activeItem.title}
          </h4>

          {/* Description */}
          {activeItem.desc ? (
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 min-h-[40px]">
              {activeItem.desc}
            </p>
          ) : (
            <p className="text-text-main text-sm italic">Explore more details about this section.</p>
          )}


          {activeItem.href && (
            <Link
              href={activeItem.href}
              className="inline-flex mt-6 px-6 py-2 rounded-full border border-nav-border bg-primary-button text-[10px] font-bold uppercase tracking-widest hover:bg-foreground/10 hover:text-text-main transition-all group/btn"
            >
              Explore Now
              <ExternalLink size={12} className="ml-2 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </Link>
          )}
        </div>



        {/* Background */}
        <div
          className="absolute -bottom-20 -right-20 w-64 h-64 rounded-full blur-[100px] opacity-20 transition-all duration-700"
          style={{ backgroundColor: activeItem.color || '#14F195' }}
        />
      </div>
    </motion.div>
  );
};