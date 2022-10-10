import {atom, selector} from "recoil"

/**
 * 默认的list数据
 *
 * */
export const todoListState = atom(
  {
    key: "todoListState",
    default: [],
  }
)
const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isDone);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isDone);
      default:
        return list;
    }
  },
})
