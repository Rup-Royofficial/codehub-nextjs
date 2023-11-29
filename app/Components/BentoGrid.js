import React from 'react';

const BentoGrid = () => {
  // Sample data, you can replace it with your actual data
  const items = [
    { id: 1, title: 'Item 1', imageUrl: '' },
    // Add more items as needed
  ];

  return (
    <div className='grid grid-cols-2 gap-2'>
      {items.map((item) => (
        <div key={item.id} className='rounded-md overflow-hidden'>
          <img src={item.imageUrl} alt={item.title} className='w-[50%] h-auto' />
          <div className='p-2'>
            <p className='text-sm font-medium'>{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BentoGrid;
