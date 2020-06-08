export const strict = false

export const state = () => ({
  bikeService: [{
      value: 1,
      text: 'Breakdown Assistance',
      features: ['Engine Start Failure',
        'Ignition Failure'

      ],
      price: 99

    },
    {
      value: 2,
      text: 'Maintainance',
      features: ['Engine and Performance',
        'Battery and Electrical',
        'Engine oil change',
        'Brake Tuning',
        'Chain and Sprocket Tuning',
        'Vehicle Wash'
      ],
      price: 479
    },
    {
      value: 3,
      text: 'Repair Service',
      features: ['Engine system',
        'Transmission and Gearbox',
        'Electrical and Battery',
        'Suspension and Alignment',
        'Oil filter change',
        'Breaking system'
      ],
      price: 79
    },
    {
      value: 4,
      text: 'Wash and Polish',
      features: ['Doorstep Wash', 'Waterjet Dirt Removal', 'Body Polish', 'Scratch Prevention'],
      price: 179
    }
  ],
  carService: [{
      value: 1,
      text: 'Breakdown Assistance',
      features: ['Engine Start Failure',
        'Ignition Failure'
      ],
      price: 199

    },
    {
      value: 2,
      text: 'Maintainance',
      features: ['Engine and Performance',
        'Battery and Electrical',
        'Engine oil change',
        'Brake Tuning',
        'Chain and Sprocket Tuning',
        'Vehicle Wash'
      ],
      price: 759
    },
    {
      value: 3,
      text: 'Repair Service',
      features: ['Engine system',
        'Transmission and Gearbox',
        'Electrical and Battery',
        'Suspension and Alignment',
        'Oil filter change',
        'Breaking system'
      ],
      price: 159
    },
    {
      value: 4,
      text: 'Wash and Polish',
      features: ['Doorstep Wash', 'Waterjet Dirt Removal', 'Body Polish', 'Scratch Prevention'],
      price: 499
    }
  ],

})

export const getters = {
  bikeservice(state) {
    return state.bikeService
  },
  carservice(state) {
    return state.carService
  }

}
