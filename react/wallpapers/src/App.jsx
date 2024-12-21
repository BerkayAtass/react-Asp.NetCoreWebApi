import { useState } from 'react'
import './App.css'
import Header from './header'
import { wallpapers } from './data'
import Wallpapers from './wallpapers'
import './css/wallpapers.css'

function App() {


  return (
    <div>
      <Header />
      <div className='wallpaper-main'>
        {
          wallpapers.map((wallpaper) => (
            <Wallpapers key={wallpaper.id} wallpapers={wallpaper} />
          ))
        }
      </div>
    </div>
  )
}

export default App
