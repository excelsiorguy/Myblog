export default {
  namespace: "list",
  state: {
    list: [],
  },
  reducers: {
    add(state, { payload }) {
      console.log('payloadpayload', payload)
      // const { values } = payload;
      const tmpList = [...state.list, { ...payload }];
      return { ...state, list: tmpList };
    },
  },
  subscriptions: {
    setup() {},
  },

  effects: {},
};
