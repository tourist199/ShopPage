import * as types from './../constants/actionType'
const initialState = [
    {
      id: 5,
      name: 'Vinsmart Joy1',
      price: 700,
      desc: 'Điện thoại của Vin',
      image: 'https://cdn.fptshop.com.vn/Uploads/Originals/2018/12/11/636801240961123743_vsmart-joy1-plus-den-1.png',
      star:4,
      quantity: 2
    },{
      id: 4,
      name: 'Fmobile T12',
      price: 700,
      desc: 'Điện thoại của FMobile',
      image:'https://img.websosanh.vn/v2/users/dclimg/images/ufdrie60ez77o.jpg',
      star:3,
      quantity: 5
    }
  ]

export default (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
          var item = action.item;
          var index = state.find((x) => x.id === item.id);
          if (index) { // trường hợp có
            index.quantity += 1;
          } else { //trường hợp 
            state.push(item);
          }
          return [...state] ;

        case types.DELETE_CART_ITEM:
          var item = action.item;
          var index = state.find((x)=>x.id===item.id);
          state.splice(state.indexOf(index),1);
          return [...state];

        case types.CHANGE_QUANTITY_CART_ITEM:
          var {item,value} = action;
          var index = state.find((x)=>x.id===item.id);
          index.quantity += value;
          if (index.quantity===0)
            state.splice(state.indexOf(index),1);
          return [...state];

        default:
            return state
    }
}
