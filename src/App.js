import React, { useState } from 'react'
import './App.css';
import './Sidebar.css'
import Slider from './Slider'
import SidebarButton from './SidebarButton';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Saturation',
    property: 'saturation',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%'
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px'
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%'
  },
  {
    name: 'Hue Rotate',
    property: 'hue-rotate',
    value: 0,
    range: {
      min: 0,
      max: 360
    },
    unit: 'deg'
  },
]


function App() {

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  function handleSldierChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOption) return option
        return { ...option, value: target.value}
      })
    })
  }

  console.log(options[selectedOptionIndex].value)

  return (
    <div className="container">

      <div className="app-wrapper">

        <div className="main-image"></div>

        <div className="sidebar">
          {options.map((option, index) => {
            return (
              <SidebarButton
                key={index}
                name={option.name}
                property={option.property}
                active={selectedOptionIndex === index}
                handleClick={() => {
                  setSelectedOptionIndex(index)
                }}
              />
            )
          }
          )}
        </div>

        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSldierChange}
        />

      </div>
    </div>
  );
}

export default App;