const INITIAL_STATE = {
  loading: false,
  success: true,
  error: "",
  data: [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "red",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
};

const dataReducer = ( state = INITIAL_STATE,action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      return { ...state, loading: false , success: true};
    case "ERROR":
      return { ...state, loading: false , error: 'some error message'};
    default:
      return state;
  }
};


export default dataReducer;