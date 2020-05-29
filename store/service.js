export const strict = false

export const state = () => ({
  bikeService: [{
      title: 'Breakdown Assistance',
      features: ['Engine Start Failure',
        'Ignition Failure'
      ]

    },
    {
      title: 'Maintainance',
      features: ['Engine and Performance',
        'Battery and Electrical',
        'Engine oil change',
        'Brake Tuning',
        'Chain and Sprocket Tuning',
        'Vehicle Wash'
      ]
    },
    {
      title: 'Repair Service',
      features: ['Engine system',
        'Transmission and Gearbox',
        'Electrical and Battery',
        'Suspension and Alignment',
        'Oil filter change',
        'Breaking system'
      ]
    },
    {
      title: 'Wash and Polish',
      features: ['Doorstep Wash', 'Waterjet Dirt Removal', 'Body Polish', 'Scratch Prevention']
    }
  ],
  carService: [{
      title: 'Breakdown Assistance',
      features: ['Engine Start Failure',
        'Ignition Failure'
      ]

    },
    {
      title: 'Maintainance',
      features: ['Engine and Performance',
        'Battery and Electrical',
        'Engine oil change',
        'Brake Tuning',
        'Chain and Sprocket Tuning',
        'Vehicle Wash'
      ]
    },
    {
      title: 'Repair Service',
      features: ['Engine system',
        'Transmission and Gearbox',
        'Electrical and Battery',
        'Suspension and Alignment',
        'Oil filter change',
        'Breaking system'
      ]
    },
    {
      title: 'Wash and Polish',
      features: ['Doorstep Wash', 'Waterjet Dirt Removal', 'Body Polish', 'Scratch Prevention']
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
