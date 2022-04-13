const INITIAL_STATE = {
  activeVideo: {},
  activeModule: {},
  modules: [
    {
      id: 1,
      title: "Iniciando com redux",
      videos: [
        {
          id: 1,
          title: "primeira aula",
        },
        {
          id: 2,
          title: "segunda aula",
        },
      ],
    },
    {
      id: 2,
      title: "Iniciando com react",
      videos: [
        {
          id: 3,
          title: "terceira aula",
        },
        {
          id: 4,
          title: "quarta aula",
        },
      ],
    },
  ],
};

const videoReducer = (state = INITIAL_STATE, action) => {
  if (action.type === "SET_VIDEO") {
    return {
      ...state,
      activeVideo: action.video,
      activeModule: action.module,
    };
  }
  return state;
};
export default videoReducer;
