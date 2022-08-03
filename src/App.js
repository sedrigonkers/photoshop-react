import React, { useState, useReducer } from 'react'
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer'

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


function App() {

  const [options, setOptions] = useState(DEFAULT_OPTIONS)

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const selectedOption = options[selectedOptionIndex]

  const [mainImg, setMainImg] = useState(undefined)
  const [isImgLoaded, setIsImgLoaded] = useState(false)

  const initialState = {
    selectedOptionIndex: 0,
    selectedOption: options[selectedOptionIndex],
    mainImg: undefined,
    isImgLoaded: false,

  }
  const [reducer, dispatch] = uesReducer(initialState)

  const imgRef = React.createRef()  // Refs
  const canvasRef = React.createRef()
  const downloadLinkRef = React.createRef()
  const inputRef = React.createRef()


  function setDefaultOptions() {  // Sets default options, when press button "Reset Filters"
    setOptions(DEFAULT_OPTIONS)
  }

  function handleSldierChange({ target }) {  // Changes selected option value, when slider mooves
    setOptions(prevOptions => {
      return prevOptions.map((option, index) => {
        if (index !== selectedOptionIndex) return option
        return { ...option, value: target.value }
      })
    })
  }

  function getImageStyle() {  // Applies css filters to main image
    const filters = options.map((option) => `${option.property}(${option.value}${option.unit})`)
    return { filter: filters.join(' ') }
  }

  function saveImage() {  // When press "Save Photo" button
    const mainImg = imgRef.current
    const canvas = canvasRef.current
    const downloadLink = downloadLinkRef.current

    const ctx = canvas.getContext("2d")
    canvas.width = mainImg.naturalWidth
    canvas.height = mainImg.naturalHeight

    const filters = options.map((option) => `${option.property}(${option.value}${option.unit})`)

    ctx.filter = filters.join(' ')
    ctx.drawImage(mainImg, 0, 0, canvas.width, canvas.height)

    downloadLink.download = "image.jpg"
    downloadLink.href = canvas.toDataURL()
    downloadLink.click()
  }

  function openFileExplorer() { // When press button "Open File"
    inputRef.current.click()
  }

  function loadImage() {  // When open a new file through file input
    const file = inputRef.current.files[0]
    if (!file) return
    setMainImg(URL.createObjectURL(file))
  }

  function onImgLoad() { // When image is loaded on the screen
    setIsImgLoaded(true)
    setDefaultOptions()
  }

  const switchDisable = () => isImgLoaded ? '' : 'disable' // Defines "disable" css class if image hasn't loaded yet

  return (
    <div className="container">
      <div className="wrapper">

        <Sidebar
          options={options}
          selectedOptionIndex={selectedOptionIndex}
          setSelectedOptionIndex={setSelectedOptionIndex}
          setDefaultOptions={setDefaultOptions}
          switchDisable={switchDisable}
        />

        <div className='main-img'>
          <div className='main-img-wrapper'>
            <img ref={imgRef} onLoad={onImgLoad} style={getImageStyle()} src={mainImg} />
          </div>
          <canvas hidden ref={canvasRef}></canvas>
          <a hidden ref={downloadLinkRef}></a>
        </div>

      </div>
      <Footer
        setDefaultOptions={setDefaultOptions}
        selectedOption={selectedOption}
        loadImage={loadImage}
        inputRef={inputRef}
        openFileExplorer={openFileExplorer}
        saveImage={saveImage}
        handleSldierChange={handleSldierChange}
        switchDisable={switchDisable}
      />
    </div>
  );
}

export default App;