import React, { useState } from 'react'
import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Slider from './Slider/Slider'
import './Footer.css'

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

  const [selectedOptionIndex, setSelectedOptionIndex] = useState(0)
  const [options, setOptions] = useState(DEFAULT_OPTIONS)
  const selectedOption = options[selectedOptionIndex]

  const [mainImg, setMainImg] = useState(undefined)
  const [isImgLoaded, setIsImgLoaded] = useState(false)

  const imgRef = React.createRef()
  const canvasRef = React.createRef()
  const downloadLinkRef = React.createRef()
  const inputRef = React.createRef()

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

  function saveImage() {
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

  function openFileExplorer() {
    inputRef.current.click()
  }

  function loadImage() {
    const file = inputRef.current.files[0]
    if (!file) return
    setMainImg(URL.createObjectURL(file))
  }

  function onImgLoad() {
    setIsImgLoaded(true)
    setDefaultOptions()
  }
  
  const switchDisable = () => isImgLoaded ? '' : 'disable'

  return (
    <div className="container">
      <div className="wrapper">

        <Sidebar
          options={options}
          selectedOptionIndex={selectedOptionIndex}
          setSelectedOptionIndex={setSelectedOptionIndex}
          setDefaultOptions={setDefaultOptions}
        />

        <div className='main-img'>
          <div className='main-img-wrapper'>
            <img ref={imgRef} onLoad={onImgLoad} style={getImageStyle()} src={mainImg} />
          </div>
          <canvas hidden ref={canvasRef}></canvas>
          <a hidden ref={downloadLinkRef}></a>
        </div>

      </div>
      <div className="footer">
        <div className="footer-items-wrapper">
          <button className={`footer-button button ${switchDisable()}`} onClick={setDefaultOptions} title="Reset filters">
            <img src={"./icons/reset.png"} className="icon" />
          </button>
          <Slider
            min={selectedOption.range.min}
            max={selectedOption.range.max}
            value={selectedOption.value}
            handleChange={handleSldierChange}
            progress={selectedOption.getProgress()}
            switchDisable={switchDisable}
          />
          <input
            onChange={loadImage}
            ref={inputRef}
            type="file"
            className="file-input"
            accept="image/*"
            hidden
          />
          <div className="footer-file-buttons">
            <button className="footer-button button upload" onClick={openFileExplorer} title="Choose a photo"><img className="icon" src="./icons/upload.png" /></button>
            <button className={`footer-button button download ${switchDisable()}`} onClick={saveImage} title="Save edited photo"><img className="icon" src="./icons/download.png" /></button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;