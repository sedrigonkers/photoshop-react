export const DEFAULT_OPTIONS = [
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