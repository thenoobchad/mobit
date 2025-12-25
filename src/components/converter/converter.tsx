import React from 'react'
import { CurrencyConverter } from './currency-converter'
import { NewsFeed } from './news-feed'

export const Converter = () => {
  return (
      <div className='flex gap-4'>
          <CurrencyConverter />
          <NewsFeed />
    </div>
  )
}
