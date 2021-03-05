const INITIAL_STATE = {
    items: [],
};

export const ACTION_TYPES = {
    ADD_ITEM: 'ADD_ITEM',
    REMOVE_ITEM: 'REMOVE_ITEM',
    UPDATE_ITEM: 'UPDATE_ITEM',
};

export const cartReducer = (state = INITIAL_STATE, action) => {
    const { items } = state;
    const { payload, type } = action;

    switch (type) {
        case ACTION_TYPES.ADD_ITEM:
            const foundItem = items.find(item => item.sku === payload.sku);
            if (foundItem) {
                return {
                    items: [
                        ...items.map(item => {
                            if (item.sku === payload.sku) {
                                item.quantity += 1;
                            }
                            return item;
                        }),
                    ],
                };
            }
            return { items: [...items, payload] };
        case ACTION_TYPES.REMOVE_ITEM:
            return {
                items: [...items.filter(item => item?.sku !== payload.sku)],
            };
        case ACTION_TYPES.UPDATE_ITEM:
            const updatedItems = items.map(item => {
                if (item.sku === payload.sku) {
                    return payload;
                }
                return item;
            });
            return { items: updatedItems.filter(item => item.quantity > 0) };
        default:
            return { ...state };
    }
};
