import React, { useState } from 'react'
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Slider from './Slider/Slider'
// import 'bootstrap/dist/css/bootstrap.css'; // or include from a CDN
// import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';

const DEFAULT_OPTIONS = [
  {
    name: 'Brightness',
    property: 'brightness',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%',
    getProgress() {
      return Math.round(this.value) + '%'
    }
   },
  {
    name: 'Contrast',
    property: 'contrast',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%',
    getProgress() {
      return Math.round(this.value) + '%'
    }
  },
  {
    name: 'Saturation',
    property: 'saturate',
    value: 100,
    range: {
      min: 0,
      max: 200
    },
    unit: '%',
    getProgress() {
      return Math.round(this.value) + '%'
    }
  },
  {
    name: 'Blur',
    property: 'blur',
    value: 0,
    range: {
      min: 0,
      max: 20
    },
    unit: 'px',
    getProgress() {
      return Math.round(this.value / this.range.max * 100) + '%'
    }
  },
  {
    name: 'Grayscale',
    property: 'grayscale',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%',
    getProgress() {
      return Math.round(this.value) + '%'
    }
  },
  {
    name: 'Sepia',
    property: 'sepia',
    value: 0,
    range: {
      min: 0,
      max: 100
    },
    unit: '%',
    getProgress() {
      return Math.round(this.value) + '%'
    }
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
    getProgress() {
      return Math.round(this.value / this.range.max * 100) + '%'
    }
  },
]

// function getProgress(option) {
//   return Math.round(option.value / (option.range.max - option.range.min) * 100) + '%'
// }


function App() {

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  const [mainImg, setMainImg] = useState(undefined)
  const [isImgLoaded, setIsImgLoaded] = useState(false)

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

        <Sidebar
          options={options}
          selectedOptionIndex={selectedOptionIndex}
          setSelectedOptionIndex={setSelectedOptionIndex}
          setDefaultOptions={setDefaultOptions}
          setMainImg={setMainImg}
        />

        <div className='main-img-screen'>

          <Slider
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSldierChange}
            progress={selectedOption.getProgress()}
            isImgLoaded={isImgLoaded}
          />

          <div className="main-img-wrapper" >
            <img onLoad={() => setIsImgLoaded(true)} style={getImageStyle()} src={mainImg} />
          </div>

        </div>


      </div>

    </div>
  );
}

export default App;