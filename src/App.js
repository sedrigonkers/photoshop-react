import React, { useRef, useReducer } from 'react'

import MainImg from './Components/MainImg/MainImg';
import Sidebar from './Components/Sidebar/Sidebar';
import Footer from './Components/Footer/Footer'
import './App.css';

import { DEFAULT_OPTIONS } from './state/DefaultOptions'



function App() {

  const imgRef = useRef()
  const canvasRef = useRef()
  const downloadLinkRef = useRef()
  const inputRef = useRef()


  function reducer(state, action) {
    switch (action.type) {

      case 'reset-filters':
        return { ...state, options: DEFAULT_OPTIONS }

      case 'handle-slider-change':
        return {
          ...state,
          options:
            state.options.map((option, index) => {
              if (index !== state.selectedOptionIndex) return option
              return { ...option, value: action.payload.value }
            })
        }

      case 'image-loaded':
        return { ...state, options: DEFAULT_OPTIONS, disableButtons: false}

      case 'set-selected-option':
        return { ...state, selectedOptionIndex: action.payload.index }

      case 'open-file-explorer':
        inputRef.current.click()
        return state

      case 'image-changed':
        const file = inputRef.current.files[0]
        if (!file) return state
        return { ...state, showStartTip: false, mainImg: { name: inputRef.current.files[0].name, src: URL.createObjectURL(file) } }

      case 'save-image':
        const mainImg = imgRef.current
        const canvas = canvasRef.current
        const downloadLink = downloadLinkRef.current

        const ctx = canvas.getContext("2d")
        canvas.width = mainImg.naturalWidth
        canvas.height = mainImg.naturalHeight

        const filters = state.options.map((option) => `${option.property}(${option.value}${option.unit})`)

        ctx.filter = filters.join(' ')
        ctx.drawImage(mainImg, 0, 0, canvas.width, canvas.height)

        downloadLink.download = state.mainImg.name || 'image'
        downloadLink.href = canvas.toDataURL()
        downloadLink.click()

      default:
        return state
    }
  }

  const initialState = {
    selectedOptionIndex: 0,
    mainImg: {
      src: undefined,
      name: 'image'
    },
    disableButtons: true,
    showStartTip: true,
    options: DEFAULT_OPTIONS,
    getSelectedOption() { return this.options[this.selectedOptionIndex] },
    getImageStyle() {  // Applies css filters to main image
      const filters = this.options.map((option) => `${option.property}(${option.value}${option.unit})`)
      return { filter: filters.join(' ') }
    },
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="container">
      <div className="wrapper">

        <Sidebar
          options={state.options}
          selectedOptionIndex={state.selectedOptionIndex}
          disableButtons={state.disableButtons}
          dispatch={dispatch}
        />

        <MainImg 
          dispatch={dispatch}
          isImgLoaded={state.isImgLoaded}
          showStartTip={state.showStartTip}
          imgRef={imgRef}
          canvasRef={canvasRef}
          downloadLinkRef={downloadLinkRef}
          inputRef={inputRef}
          getImageStyle={state.getImageStyle()}
          mainImg={state.mainImg}
        />

      </div>
      <Footer
        dispatch={dispatch}
        selectedOption={state.getSelectedOption()}
        inputRef={inputRef}
        disableButtons={state.disableButtons}
      />
    </div>
  );
}

export default App;