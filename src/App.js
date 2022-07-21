import React, { useState } from 'react'
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Slider from './Slider'
import MainImage from './MainImage/MainImage';

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
    property: 'saturate',
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
    unit: 'deg',
  },
]

function getProgress(option) {
  return Math.round(option.value / (option.range.max - option.range.min) * 100) + '%'
}


function App() {

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  function setDefaultOptions() {
    setOptions(DEFAULT_OPTIONS)
  }

  function handleSldierChange({ target }) {
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  function getImageStyle() {
    const filters = options.map((option) => `${option.property}(${option.value}${option.unit})`)

    return { filter: filters.join(' ') }
  }

  return (
    <div className="container">
      <div className="app-wrapper">

        <MainImage getImageStyle={getImageStyle} />

        <Sidebar
          options={options}
          selectedOptionIndex={selectedOptionIndex}
          setSelectedOptionIndex={setSelectedOptionIndex}
          setDefaultOptions={setDefaultOptions}
        />

        <Slider
          min={selectedOption.range.min}
          max={selectedOption.range.max}
          value={selectedOption.value}
          handleChange={handleSldierChange}
          getProgress={getProgress}
          progress={getProgress(selectedOption)}
        />
      </div>

    </div>
  );
}

export default App;