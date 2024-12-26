import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type CartState = {
  items: Game[]
  isOPen: boolean
}

const initialState: CartState = {
  items: [],
  isOPen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((item) => item.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('O Jogo já está no carrinho')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOPen = true
    },
    close: (state) => {
      state.isOPen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
