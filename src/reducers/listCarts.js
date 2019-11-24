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

export default (state = initialState, { type, payload }) => {
    switch (type) {
        case 'typeName':
            return { ...state }

        default:
            return state
    }
}
